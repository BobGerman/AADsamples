import { IADGroup } from '../model/IADGroup';

export interface IMSGraphService {
    getReProperties(tenant: string,
                    clientId: string,
                    resourceId: string,
                    endpointUrl: string):
        Promise<IADGroup[] | string>;
}
