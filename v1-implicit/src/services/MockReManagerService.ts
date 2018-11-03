import { IReProperty } from '../model/IReProperty';
import { IReManagerService } from './IReManagerService';

export default class MockReManagerService implements IReManagerService {
    
    public getReProperties (clientId: string, 
                            endpointUrl: string):
        Promise<IReProperty[] | string> {

        return new Promise<IReProperty[]> ((resolve => {
            resolve (this.mockItems);
        }));

    }

    private mockItems =
    [
        {
            "id": 1,
            "name": "Mock bungalow",
            "address": "5 Wayside Road",
            "unit": "",
            "city": "Burlington",
            "state": "MA",
            "postalCode": "01803",
            "country": null,
            "purchaseDate": "2010-12-03T00:00:00",
            "purchaseAmount": 344000,
            "isForSale": false,
            "isForRent": false
        },
        {
            "id": 2,
            "name": "Mock luxury",
            "address": "280 Trumbull St.",
            "unit": "21st floor",
            "city": "Hartford",
            "state": "CT",
            "postalCode": "06103",
            "country": null,
            "purchaseDate": "2016-04-01T00:00:00",
            "purchaseAmount": 350000,
            "isForSale": false,
            "isForRent": false
        },
        {
            "id": 3,
            "name": "Mock condominium",
            "address": "1245 Worcester Rd.",
            "unit": "3072",
            "city": "Natick",
            "state": "MA",
            "postalCode": "01760",
            "country": null,
            "purchaseDate": "2014-08-15T00:00:00",
            "purchaseAmount": 235000,
            "isForSale": false,
            "isForRent": false
        }];

}