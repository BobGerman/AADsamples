export interface IAuthService {
    getToken(tenant: string, clientId: string, resourceId: string, scopes: string[]): Promise<string>
};