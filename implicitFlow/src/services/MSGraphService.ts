import { IADGroup } from '../model/IADGroup';
import { IMSGraphService } from './IMSGraphService';
import AuthService from './AuthService';

export default class MSGraphService implements IMSGraphService {
    
    public getAllGroups (tenant: string,
                            clientId: string, 
                            resourceId: string):
        Promise<IADGroup[] | string> {

        return new Promise<IADGroup[]> ((resolve, reject) => {

            const authSvc = new AuthService(tenant, clientId, resourceId);
            authSvc.getToken()
            .then((token) => {

                fetch(
                    `https://graph.microsoft.com/v1.0/groups/?$orderby=displayName`,
                    {
                        method: "GET",
                        mode: "cors",
                        cache: "no-cache",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + token
                        }
                    }
                )
                .then ((response) => {
                    if (response.ok) {
                        return response.json();
                    }
                })
                .then ((json) => {
                    const result: IADGroup[] = 
                        json.value.map((g) => ({
                            id: g.id,
                            name: g.displayName
                        }));
                    resolve(result);
                })
                .catch ((error) => {
                    resolve ([
                        {
                            "id": 1,
                            "name": `Error ${error} using token ${token}`
                        }
                    ]);
                });

            })
            .catch((error) => {
                resolve ([
                    {
                        "id": 1,
                        "name": 'ERROR: ' + error                    }
                ]);
            })

        });

    }

}