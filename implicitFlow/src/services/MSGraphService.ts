import { IADGroup } from '../model/IADGroup';
import { IMSGraphService } from './IMSGraphService';
import { IAuthService } from './IAuthService';

export default class MSGraphService implements IMSGraphService {

    constructor(private authService: IAuthService) { }

    public getAllGroups(tenant: string,
        clientId: string,
        resourceId: string,
        scopes: string[]):
        Promise<IADGroup[] | string> {

        return new Promise<IADGroup[]>((resolve, reject) => {

            this.authService.getToken(tenant, clientId, resourceId, scopes)
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
                        .then((response) => {
                            if (response.ok) {
                                return response.json();
                            }
                        })
                        .then((json) => {
                            const result: IADGroup[] =
                                json.value.map((g) => ({
                                    id: g.id,
                                    name: g.displayName,
                                    email: g.mail,
                                    types: g.groupTypes.join()
                                }));
                            resolve(result);
                        })
                        .catch((error) => {
                            resolve([
                                {
                                    id: 1,
                                    name: `Error ${error} using token ${token}`,
                                    email: '',
                                    types: ''
                                }
                            ]);
                        });

                })
                .catch((error) => {
                    resolve([
                        {
                            id: 1,
                            name: 'ERROR: ' + error,
                            email: '',
                            types: ''
                        }
                    ]);
                })

        });

    }

}