import { IMSGraphService } from './IMSGraphService';
import MockMSGraphService from './MockMSGraphService';
import MSGraphServiceV1 from './MSGraphServiceV1';
import MSGraphServiceV2 from './MSGraphServiceV2';

export enum ServiceOption {
    mock, v1, v2
}

export class ServiceFactory {

    public static getService(option: ServiceOption) : IMSGraphService {

        if (option === ServiceOption.v1) {
            return new MSGraphServiceV1();
        } else if (option === ServiceOption.v2) {
            return new MSGraphServiceV2();
        } else {
            return new MockMSGraphService();
        }
    }
}
