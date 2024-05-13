import {describe, expect, it} from 'vitest';
//import fetch from "node-fetch";
import casual from 'casual';
import request from 'supertest';
import app from './server';

describe('Server Endpoints', () => {
    it('should return status code 200 for GET http://localhost:3000/cars', async () => {
        const response = await request(app).get('/cars');
        expect(response.statusCode).toBe(200);
    });

    it('should return status code 404 for GET /nonexistent', async () => {
        const response = await request(app).get('/nonexistent');
        expect(response.statusCode).toBe(404);
    });

    it('should return status code 200 and the correct data for GET /cars/:id', async () => {
        const response = await request(app).get('/cars/5');
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual([
            {
                id: 5,
                model: 'E-Class',
                brand: 'BMW',
                description:
                    'A full-size luxury sedan offering a blend of comfort, technology, and performance.',
                price: 50000,
                imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
                typeId: 1,
            },
        ]);
    });

    const newItem = {
        id: casual.card_number,
        model: casual.word,
        brand: casual.word,
        description: casual.sentence,
        price: casual.integer(1000, 100000),
        imageUrl: casual.random_element([
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
            'https://example.com/image3.jpg',
        ]),
    };

    it('should return status code 201 and the newly added item for POST /cars', async () => {
        // const newItem = {
        //     id: casual.card_number,
        //     model: casual.word,
        //     brand: casual.word,
        //     description: casual.sentence,
        //     price: casual.integer(1000, 100000),
        //     imageUrl: casual.random_element(['https://example.com/image1.jpg', 'https://example.com/image2.jpg', 'https://example.com/image3.jpg']),
        // };
        const response = await request(app).post('/cars').send(newItem);
        expect(response.statusCode).toBe(201);
        expect(response.body).toEqual({message: 'Car created successfully'});
    });

    // it('should return status code 200 and a success message for DELETE /cars/:id', async () => {
    //     const itemIdToDelete = newItem.id;
    //     const response = await request(app).delete(`/cars/${itemIdToDelete}`);
    //     expect(response.statusCode).toBe(200);
    //     expect(response.body).toEqual({message: 'Car deleted successfully'});
    // });

    it('should return status code 200 and a success message for PUT /cars/:id', async () => {
        const itemIdToUpdate = 5;
        const updatedItem = {
            id: 5,
            model: 'E-Class',
            brand: 'BMW',
            description:
                'A full-size luxury sedan offering a blend of comfort, technology, and performance.',
            price: 50000,
            imageUrl: 'https://wallpapercave.com/wp/wp12284001.jpg',
        };
        const response = await request(app)
            .put(`/cars/${itemIdToUpdate}`)
            .send(updatedItem);
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual({message: 'Car updated successfully'});
    });
});
