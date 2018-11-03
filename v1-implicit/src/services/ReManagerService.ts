import { IReProperty } from '../model/IReProperty';
import { IReManagerService } from './IReManagerService';
import AuthService from './AuthService';

export default class ReManagerService implements IReManagerService {
    
    public getReProperties (tenant: string,
                            clientId: string, 
                            resourceId: string,
                            endpointUrl: string):
        Promise<IReProperty[] | string> {

        return new Promise<IReProperty[]> ((resolve, reject) => {

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
                            "name": `Error ${error} using token ${token}`,
                            "address": "",
                            "unit": "",
                            "city": "",
                            "state": "",
                            "postalCode": "",
                            "country": null,
                            "purchaseDate": "2010-12-03T00:00:00",
                            "purchaseAmount": 0,
                            "isForSale": false,
                            "isForRent": false
                        }
                    ]);
                });

            })
            .catch((error) => {
                resolve ([
                    {
                        "id": 1,
                        "name": 'ERROR: ' + error,
                        "address": "5 Progress Road",
                        "unit": "",
                        "city": "Burlington",
                        "state": "MA",
                        "postalCode": "01803",
                        "country": null,
                        "purchaseDate": "2010-12-03T00:00:00",
                        "purchaseAmount": 344000,
                        "isForSale": false,
                        "isForRent": false
                    }
                ]);
            })

        });

    }

}