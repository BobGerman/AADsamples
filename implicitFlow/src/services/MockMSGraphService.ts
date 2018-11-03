import { IADGroup } from '../model/IADGroup';
import { IMSGraphService } from './IMSGraphService';

export default class MockMSGraphService implements IMSGraphService {
    
    public getAllGroups (tenant: string,
                            clientId: string, 
                            resourceId: string):
        Promise<IADGroup[] | string> {

        return new Promise<IADGroup[]> ((resolve => {
            resolve (this.mockItems);
        }));

    }

    private mockItems =
    [
        {
            "id": 1,
            "name": "Group 1"
        },
        {
            "id": 2,
            "name": "Group 2"
        },
        {
            "id": 3,
            "name": "Group 3"
        }];

}