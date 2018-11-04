import { IMSGraphService } from './IMSGraphService';
import MockMSGraphService from './MockMSGraphService';
import MSGraphService from './MSGraphService';

export enum ServiceOption {
    mock, v1, v2
}

export class ServiceFactory {

    public static getService(option: ServiceOption) : IMSGraphService {

        if (option === ServiceOption.v1) {
            return new MSGraphService();
        } else if (option === ServiceOption.v2) {
            return new MockMSGraphService();
        } else {
            return new MockMSGraphService();
        }
    }
}
