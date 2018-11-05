import * as AuthenticationContext from 'adal-angular';
import { IAuthService } from './IAuthService';
import * as constants from '../constants';

export default class AuthService implements IAuthService {

    // private authContext: AuthenticationContext;
    // private config: AuthenticationContext.Options;
    // private resourceId: string;

    public getToken(): Promise<string> {

        const config: AuthenticationContext.Options = {
            tenant: constants.tenant,
            clientId: constants.clientIdV1,
            redirectUri: window.location.href,
            cacheLocation: 'localStorage'
        };

        const authContext = new AuthenticationContext(config);
        return new Promise<string>((resolve, reject) => {

            if (this.ensureLogin(authContext)) {

                let cachedToken = authContext.getCachedToken(constants.resourceId);
                if (cachedToken) {
                    resolve(cachedToken);
                } else {
                    authContext.acquireToken(
                        constants.resourceId,
                        (error, acquiredToken) => {
                            if (error || !acquiredToken) {
                                reject(error);
                            } else {
                                resolve(acquiredToken);
                            }
                        }
                    );
                }
            } else {
                reject(`Login error: ${authContext.getLoginError()}`);
            }
        });

    }

    private ensureLogin(authContext: AuthenticationContext): boolean {

        var isCallback = authContext.isCallback(window.location.hash);

        if (isCallback && !authContext.getLoginError()) {
            authContext.handleWindowCallback(window.location.hash);
        } else {
            var user = authContext.getCachedUser();
            if (!user) {
                authContext.login();
            } else {
                return true;
            }
        }
        return false;
    }

}