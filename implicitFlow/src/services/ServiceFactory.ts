import { IMSGraphService } from './IMSGraphService';
import MockMSGraphService from './MockMSGraphService';
import MSGraphService from './MSGraphService';

export class ServiceFactory {

    public static getService(isMock: boolean) : IMSGraphService {

        if (isMock) {
            return new MockMSGraphService();
        } else {
            return new MSGraphService();
        }
    }
}
