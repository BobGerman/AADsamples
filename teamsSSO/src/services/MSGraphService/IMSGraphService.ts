import { IADProfile } from '../../model/IADProfile';

export interface IMSGraphService {
    getProfile(): Promise<IADProfile | string>;
}
