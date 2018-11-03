import { IReManagerService } from './IReManagerService';
import MockReManagerService from './MockReManagerService';
import ReManagerService from './ReManagerService';

export class ReManagerServiceFactory {

    public static getService(isMock: boolean) : IReManagerService {

        if (isMock) {
            return new MockReManagerService();
        } else {
            return new ReManagerService();
        }
    }
}
