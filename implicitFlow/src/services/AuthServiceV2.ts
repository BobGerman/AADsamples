/// <reference path="./msal.d.ts" />

export default class AuthService {

    private tenant: string;
    private clientId: string;
    private resourceId: string;

    constructor(tenant: string, clientId: string, resourceId: string) {

        this.resourceId = resourceId;
        this.tenant = ''; //
        this.clientId = '0feedf81-155c-4864-a407-73fbbcc09116';
    }

    public getToken(): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            var myMSALObj = new Msal.UserAgentApplication(this.clientId, null,
                ((errorDesc, token, error, tokenType) => {
                    // ?? Check error ??
                    console.log("Received token of type:" + tokenType);
                    if (tokenType === "access_token") {
                        resolve(token);
                    }
                }),
                { storeAuthStateInCookie: true, cacheLocation: "localStorage" });
//                { storeAuthStateInCookie: true, cacheLocation: "localStorage" });

            this.ensureLogin(myMSALObj);
            // .then((idToken) => {
                //Call acquireTokenSilent (iframe) to obtain a token for Microsoft Graph
                myMSALObj.acquireTokenSilent(['group.read.all']).then(function (accessToken) {
                    resolve(accessToken); //callMSGraph(applicationConfig.graphEndpoint, accessToken, graphAPICallback);
                }, function (error) {
                    console.log(error);
                    // Call acquireTokenPopup (popup window) in case of acquireTokenSilent failure due to consent or interaction required ONLY
                    if (error.indexOf("consent_required") !== -1 || error.indexOf("interaction_required") !== -1 || error.indexOf("login_required") !== -1) {
                        myMSALObj.acquireTokenRedirect(['group.read.all']);
                        // BROWSER WILL REDIRECT HERE and when we return
                        // the access token will be in cache

                        //.acquireTokenPopup(['groups.read.all']).then(function (accessToken) {
                        //     resolve(accessToken); //    callMSGraph(applicationConfig.graphEndpoint, accessToken, graphAPICallback);
                        // }, function (error) {
                        //     console.log(error);
                        // });
                    } else {
                        reject('Error acquiring token: ' + error);
                    }
                // });
            })
            .catch((error) => {
                reject('Error logging in: ' + error);
            });
        });

    }

    private ensureLogin(myMSALObj: Msal.UserAgentApplication): void { //: Promise<any> {

        // return new Promise<string | any> ((resolve, reject) => {
            if (myMSALObj.getUser() && !myMSALObj.isCallback(window.location.hash)) {
                return
            }

            // if (!myMSALObj.getUser()) {
                myMSALObj.loginRedirect(["group.read.all"]);
            // }
            // myMSALObj.loginPopup(["groups.read.all"]).then(function (idToken) {
            //     resolve(idToken);
            // }, function (error) {
            //     reject(error);
            // });
        // });
    }

}