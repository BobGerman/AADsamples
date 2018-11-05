/// <reference path="./msal.d.ts" />

export default class AuthService {

    private clientId: string;

    constructor(tenant: string, clientId: string, resourceId: string) {

        this.clientId = '0feedf81-155c-4864-a407-73fbbcc09116';
    }

    public getToken(): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            const userAgentApp = new Msal.UserAgentApplication(this.clientId, null,
                null,
                { storeAuthStateInCookie: true, cacheLocation: "localStorage" });

            this.ensureLogin(userAgentApp);
            userAgentApp.acquireTokenSilent(['group.read.all'])
            .then ((accessToken) => {
                resolve(accessToken);
            })
            .catch ((error) => {
                console.log(error);
                if (error.indexOf("consent_required") !== -1 || error.indexOf("interaction_required") !== -1 || error.indexOf("login_required") !== -1) {
                    userAgentApp.acquireTokenRedirect(['group.read.all']);
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

        userAgentApp.loginRedirect(["group.read.all"]);
    }

}