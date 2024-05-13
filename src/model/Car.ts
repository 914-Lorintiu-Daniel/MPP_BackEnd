export default interface Car {
    id: number;
    model: string;
    brand: CarBrand;
    description: string;
    price: number;
    imageUrl: string;
}

export enum CarBrand {
    MERCEDES = 'Mercedes-Benz',
    BMW = 'BMW',
    AUDI = 'Audi',
    PORSCHE = 'Porsche',
}
