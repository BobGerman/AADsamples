/// <reference path="./msal.d.ts" />

import { IAuthService } from './IAuthService';
import * as constants from '../constants';

export default class AuthService implements IAuthService {

    public getToken(): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            const userAgentApp = new Msal.UserAgentApplication(constants.clientIdV2, 
                null, null,
                { storeAuthStateInCookie: true, cacheLocation: "localStorage" });

            this.ensureLogin(userAgentApp);
            userAgentApp.acquireTokenSilent(constants.scopes)
            .then ((accessToken) => {
                resolve(accessToken);
            })
            .catch ((error) => {
                console.log(error);
                if (error.indexOf("consent_required") !== -1 || error.indexOf("interaction_required") !== -1 || error.indexOf("login_required") !== -1) {
                    userAgentApp.acquireTokenRedirect(constants.scopes);
                } else {
                    reject('Error acquiring token: ' + error);
                }
            });
        });
    }

    private ensureLogin(userAgentApp: Msal.UserAgentApplication): void { //: Promise<any> {

        if (userAgentApp.getUser() && !userAgentApp.isCallback(window.location.hash)) {
            return
        }

        userAgentApp.loginRedirect(constants.scopes);
    }

}