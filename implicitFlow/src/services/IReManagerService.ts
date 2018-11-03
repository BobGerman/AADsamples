import { IReProperty } from '../model/IReProperty';

export interface IReManagerService {
    getReProperties(tenant: string,
                    clientId: string,
                    resourceId: string,
                    endpointUrl: string):
        Promise<IReProperty[] | string>;
}
