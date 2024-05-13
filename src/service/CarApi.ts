export default interface Car {
    id: number;
    model: string;
    brand: string;
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

export const CarList = [
    {
        id: 1,
        model: 'C-Class',
        brand: CarBrand.MERCEDES,
        description:
            'A mid-size luxury sedan known for its comfort and performance.',
        price: 45000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 2,
        model: 'X3',
        brand: CarBrand.BMW,
        description:
            'A compact luxury SUV offering a blend of practicality and sportiness.',
        price: 42000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 3,
        model: 'A4',
        brand: CarBrand.AUDI,
        description:
            'A well-rounded luxury sedan known for its technology and handling.',
        price: 40000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 4,
        model: '911',
        brand: CarBrand.PORSCHE,
        description:
            'A high-performance sports car known for its iconic design and handling.',
        price: 120000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 5,
        model: 'E-Class',
        brand: CarBrand.MERCEDES,
        description:
            'A full-size luxury sedan offering a blend of comfort, technology, and performance.',
        price: 50000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 6,
        model: '5 Series',
        brand: CarBrand.BMW,
        description:
            'A mid-size luxury sedan known for its driving dynamics and technology.',
        price: 47000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 7,
        model: 'A6',
        brand: CarBrand.AUDI,
        description:
            'A full-size luxury sedan offering a spacious interior and advanced technology.',
        price: 52000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 8,
        model: '718 Cayman',
        brand: CarBrand.PORSCHE,
        description:
            'A mid-engine sports car offering a thrilling driving experience.',
        price: 80000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 9,
        model: 'S-Class',
        brand: CarBrand.MERCEDES,
        description:
            'A full-size luxury sedan known for its unmatched comfort, technology, and performance.',
        price: 100000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 10,
        model: 'S-Class',
        brand: CarBrand.MERCEDES,
        description:
            'A full-size luxury sedan known for its unmatched comfort, technology, and performance.',
        price: 100000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 11,
        model: 'X7',
        brand: CarBrand.BMW,
        description:
            'A full-size luxury SUV offering spacious seating and advanced technology.',
        price: 75000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 12,
        model: 'X7',
        brand: CarBrand.BMW,
        description:
            'A full-size luxury SUV offering spacious seating and advanced technology.',
        price: 75000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },

    {
        id: 13,
        model: 'X7',
        brand: CarBrand.BMW,
        description:
            'A full-size luxury SUV offering spacious seating and advanced technology.',
        price: 75000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 14,
        model: 'A3',
        brand: CarBrand.AUDI,
        description:
            'A compact luxury sedan known for its refined interior and sporty performance.',
        price: 35000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 15,
        model: '3 Series',
        brand: CarBrand.BMW,
        description:
            'A compact luxury sedan offering a perfect blend of comfort and agility.',
        price: 38000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 16,
        model: 'CLA',
        brand: CarBrand.MERCEDES,
        description:
            'A compact luxury sedan known for its sleek design and advanced technology.',
        price: 36000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 17,
        model: 'Cayenne',
        brand: CarBrand.PORSCHE,
        description:
            'A luxury SUV offering a blend of performance, comfort, and practicality.',
        price: 90000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 18,
        model: 'Panamera',
        brand: CarBrand.PORSCHE,
        description:
            'A luxury sedan offering exceptional performance and driving dynamics.',
        price: 110000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 19,
        model: 'Q5',
        brand: CarBrand.AUDI,
        description:
            'A luxury compact SUV known for its stylish design and comfortable ride.',
        price: 43000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
    {
        id: 20,
        model: 'X5',
        brand: CarBrand.BMW,
        description:
            'A luxury SUV offering a perfect blend of performance and luxury.',
        price: 65000,
        imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
    },
];