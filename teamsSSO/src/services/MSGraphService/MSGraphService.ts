import { IADProfile } from '../../model/IADProfile';
import { IMSGraphService } from './IMSGraphService';
import { IAuthService } from '../AuthService/IAuthService';

export default class MSGraphService implements IMSGraphService {

    constructor(private authService: IAuthService) { }

    public getProfile():
        Promise<IADProfile | string> {

        return new Promise<IADProfile>((resolve, reject) => {

            this.authService.getToken()
                .then((token) => {

                    fetch(
                        `https://graph.microsoft.com/v1.0/me/`,
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
                            resolve(<IADProfile>json);
                        })
                        .catch((error) => {
                            resolve(
                                {
                                    id: 'ERROR',
                                    displayName: `Error ${error} using token ${token}`,
                                    userPrincipalName: ''
                                }
                            );
                        });

                })
                .catch((error) => {
                    resolve(
                        {
                            id: 'ERROR',
                            displayName: `Error ${error}`,
                            userPrincipalName: ''
                        }
                    );
                })

        });

    }

}