import * as AuthenticationContext from 'adal-angular';


export default class AuthService {

    private authContext: AuthenticationContext;
    private config: AuthenticationContext.Options;
    private resourceId: string;

    constructor(tenant: string, clientId: string, resourceId: string) {

        this.resourceId = resourceId;
        this.config = {
            tenant: tenant,
            clientId: clientId,
            redirectUri: window.location.href,
            cacheLocation: 'localStorage'
        };
        this.authContext = new AuthenticationContext(this.config);

    }

    public getToken(): Promise<string> {

        return new Promise<string>((resolve, reject) => {

            if (this.ensureLogin()) {

                let cachedToken = this.authContext.getCachedToken(this.resourceId);
                if (cachedToken) {
                    resolve(cachedToken);
                } else {
                    this.authContext.acquireToken(
                        this.resourceId,
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
                reject(`Login error: ${this.authContext.getLoginError()}`);
            }
        });

    }

    private ensureLogin(): boolean {

        var isCallback = this.authContext.isCallback(window.location.hash);

        if (isCallback && !this.authContext.getLoginError()) {
            this.authContext.handleWindowCallback(window.location.hash);
        } else {
            var user = this.authContext.getCachedUser();
            if (!user) {
                this.authContext.login();
            } else {
                return true;
            }
        }
        return false;
    }

}