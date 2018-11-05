export interface IAuthService {
    getToken(): Promise<string>
};