import { IAuthService } from './IAuthService';
import * as constants from '../../constants';

export default class AuthService implements IAuthService {

    public getToken(): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            const userAgentApp = new Msal.UserAgentApplication(
                constants.clientIdV2, // Client ID
                null,       // Authority
                null,       // Token received callback
                {           // Options
                    storeAuthStateInCookie: true,
                    cacheLocation: "localStorage"
                });

            // Ensure user is logged in
            if (!userAgentApp.getUser() ||
                userAgentApp.isCallback(window.location.hash)) {
                userAgentApp.loginRedirect(constants.scopes);
            }

            // Try to get a token silently
            userAgentApp.acquireTokenSilent(constants.scopes)
                .then((accessToken) => {
                    resolve(accessToken);
                })
                .catch((error) => {
                    console.log(error);
                    // If the error is due to a need for user
                    // interaction, then redirect to allow it
                    if (error.indexOf("consent_required") !== -1 ||
                        error.indexOf("interaction_required") !== -1 ||
                        error.indexOf("login_required") !== -1) {
                        userAgentApp.acquireTokenRedirect(constants.scopes);
                    } else {
                        reject('Error acquiring token: ' + error);
                    }
                });
        });
    }
}