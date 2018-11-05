import { IADGroup } from '../model/IADGroup';

export interface IMSGraphService {
    getAllGroups(): Promise<IADGroup[] | string>;
}
