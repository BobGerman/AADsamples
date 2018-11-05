export interface IAuthService {
    getToken(tenant: string, clientId: string, resourceId: string): Promise<string>
};