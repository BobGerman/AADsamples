export interface IReProperty {
    id: number;
    name: string;
    address: string;
    unit: string;
    city: string;
    state: string;
    postalCode: string;
    country?: any;
    purchaseDate: any; // Date;
    purchaseAmount: number;
    isForSale: boolean;
    isForRent: boolean;

}
