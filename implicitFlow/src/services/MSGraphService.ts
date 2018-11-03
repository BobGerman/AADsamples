import { IADGroup } from '../model/IADGroup';
import { IMSGraphService } from './IMSGraphService';
import AuthService from './AuthService';

export default class MSGraphService implements IMSGraphService {
    
    public getReProperties (tenant: string,
                            clientId: string, 
                            resourceId: string,
                            endpointUrl: string):
        Promise<IADGroup[] | string> {

        return new Promise<IADGroup[]> ((resolve, reject) => {

            const authSvc = new AuthService(tenant, clientId, resourceId);
            authSvc.getToken()
            .then((token) => {

                fetch(
                    `${endpointUrl}/api/REProperties/`,
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
                    resolve(json);
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