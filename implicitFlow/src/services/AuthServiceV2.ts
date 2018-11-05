/// <reference path="./msal.d.ts" />

import { IAuthService } from './IAuthService';

export default class AuthService implements IAuthService {

    public getToken(tenant: string, clientId: string, resourceId: string, scopes: string[]): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            const userAgentApp = new Msal.UserAgentApplication(clientId, 
                null, null,
                { storeAuthStateInCookie: true, cacheLocation: "localStorage" });

            this.ensureLogin(userAgentApp, scopes);
            userAgentApp.acquireTokenSilent(scopes)
            .then ((accessToken) => {
                resolve(accessToken);
            })
            .catch ((error) => {
                console.log(error);
                if (error.indexOf("consent_required") !== -1 || error.indexOf("interaction_required") !== -1 || error.indexOf("login_required") !== -1) {
                    userAgentApp.acquireTokenRedirect(scopes);
                } else {
                    reject('Error acquiring token: ' + error);
                }
            });
        });
    }

    private ensureLogin(userAgentApp: Msal.UserAgentApplication, scopes: string[]): void { //: Promise<any> {

        if (userAgentApp.getUser() && !userAgentApp.isCallback(window.location.hash)) {
            return
        }

        userAgentApp.loginRedirect(scopes);
    }

}