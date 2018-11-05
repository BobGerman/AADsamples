import { IMSGraphService } from './MSGraphService/IMSGraphService';
import MSGraphServiceMock from './MSGraphService/MSGraphServiceMock';
import MSGraphService from './MSGraphService/MSGraphService';
import AuthServiceV1 from './AuthService/AuthServiceV1';
import AuthServiceV2 from './AuthService/AuthServiceV2';

export enum ServiceOption {
    mock, v1, v2
}

export class ServiceFactory {

    public static getService(option: ServiceOption) : IMSGraphService {

        if (option === ServiceOption.v1) {
            return new MSGraphService(
                new AuthServiceV1()
            );
        } else if (option === ServiceOption.v2) {
            return new MSGraphService(
                new AuthServiceV2()
            );
        } else {
            return new MSGraphServiceMock();
        }
    }
}
