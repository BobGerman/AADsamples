import { IADGroup } from '../model/IADGroup';

export interface IMSGraphService {
    getAllGroups(tenant: string,
        clientId: string,
        resourceId: string,
        scopes: string[]):
        Promise<IADGroup[] | string>;
}
