import { IADProfile } from '../../model/IADProfile';
import { IMSGraphService } from './IMSGraphService';

export default class MSGraphServiceMock implements IMSGraphService {
    
    public getProfile (): Promise<IADProfile | string> {

        return new Promise<IADProfile> ((resolve => {
            resolve (this.mockItems);
        }));

    }

    private mockItems =
    {
        "displayName": "Megan Bowen",
        "userPrincipalName": "MeganB@M365x214355.onmicrosoft.com",
        "id": "48d31887-5fad-4d73-a9f5-3c356e68a038"
    }
}