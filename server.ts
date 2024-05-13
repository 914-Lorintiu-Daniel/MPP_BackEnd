import express, {NextFunction, Request, Response} from 'express';
// import mysql from 'mysql';
import {CarList} from './src/service/CarApi.ts';
// import {useCarCompany} from './src/company/CarCompany.ts';
import bcrypt from 'bcrypt';
import casual from 'casual';
import cors from 'cors';
import jwt from 'jsonwebtoken';

// import http from 'http';
// import socketIo from 'socket.io';

const app = express();

// const server = http.createServer(app);
// const io = new socketIo.Server(server);

const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200,
};

const PORT = 3000;
app.use(cors(corsOptions));

interface Car {
    id: number;
    model: string;
    brand: string;
    description: string;
    price: number;
    imageUrl: string;
}

const data: Car[] = CarList.map((car) => ({
    id: car.id,
    model: car.model,
    brand: car.brand,
    price: car.price,
    description: car.description,
    imageUrl: car.imageUrl,
}));

declare module 'express-serve-static-core' {
    interface Request {
        user: any;
    }
}

const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({
            error: 'Unauthorized: Missing or invalid authorization header',
        });
    }

    const token = authHeader.split(' ')[1];
    try {
        const decoded = jwt.verify(token, 'your_secret_key');
        (req as Request).user = decoded;
        next();
    } catch (error) {
        console.error('Error verifying JWT:', error);
        res.status(403).json({error: 'Forbidden: Invalid JWT token'});
    }
};

// app.use(verifyJWT);

app.use(express.json());

app.get('/cars/:id', verifyJWT, async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    const query = 'SELECT * FROM Car where id = ?';

    connection.query(query, [id], (error, results, _fields) => {
        if (error) {
            console.error('Error fetching data from MySQL:', error);
            res.status(500).json({error: 'Internal Server Error'});
        } else {
            res.json(results);
            console.log(results);
        }
    });
});

// app.get('/cars', (_req: Request, res: Response) => {
//     res.json(data);
// });

// const config: sql.config = {
//     server: 'DESKTOP-TBF404G\\SQLEXPRESS',
//     user: 'DESKTOP-TBF404G\\User',
//     // port: 1433,
//     // password: '',
//     database: 'CarCompany',
//     connectionTimeout: 10000,
//     // options: {
//     //     trustedConnection: true,
//     // },
// };

// app.get('/cars', async (_req, res) => {
//     try {
//         const pool = await sql.connect(config);

//         const result = await pool
//             .request()
//             .query('use CarCompany go SELECT * FROM CarCompany.dbo.Car');

//         res.json(result.recordset);
//     } catch (error) {
//         console.error('Error fetching data from SQL Server:', error);
//         res.status(500).json({error: 'Internal Server Error'});
//     }
// });

///////////////////////////

import mysql from 'mysql';

const config: mysql.ConnectionConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cars',
};

const connection = mysql.createConnection(config);

app.get('/cars', verifyJWT, (_req, res) => {
    const query = 'SELECT * FROM Car';

    connection.query(query, (error, results, _fields) => {
        if (error) {
            console.error('Error fetching data from MySQL:', error);
            res.status(500).json({error: 'Internal Server Error'});
        } else {
            res.json(results);
        }
    });
});

app.get('/types', verifyJWT, async (req, res) => {
    const query = 'SELECT * FROM cartype where userId = ?';
    const userId = req.user.id;
    connection.query(query, [userId], (error, results, _fields) => {
        if (error) {
            console.error('Error fetching data from MySQL:', error);
            res.status(500).json({error: 'Internal Server Error'});
        } else {
            // console.log('Results:', results);
            res.json(results);
        }
    });
});

app.delete('/types/:id', verifyJWT, async (_req: Request, res: Response) => {
    const id = parseInt(_req.params.id);

    const query = 'delete FROM cartype where id = ?';

    try {
        await connection.query(query, [id]);
        res.json({message: 'Car type deleted successfully'});
    } catch (error) {
        console.error('Error deleting car type:', error);
        res.status(500).json({message: 'Error deleting car type'});
    }

    // connection.query(query, [id], (error, results, _fields) => {
    //     if (error) {
    //         console.error('Error deleting data from database:', error);
    //         res.status(500).json({error: 'Internal Server Error'});
    //     } else {
    //         // console.log('Results:', results);
    //         res.json(results);
    //     }
    // });
    // res.json({message: 'Item deleted successfully'});
});

//////////////////////////////////////

const entities = [];

const generateEntity = () => {
    const newEntity = {
        id: casual.uuid,
        model: casual.word,
        brand: casual.word,
        description: casual.sentence,
        price: casual.integer(1000, 100000),
        imageUrl: casual.random_element([
            'https://example.com/image1.jpg',
            'https://example.com/image2.jpg',
            'https://example.com/image3.jpg',
        ]),
        typeId: 1,
    };
    entities.push(newEntity);
    // io.emit('newEntity', newEntity);
    return newEntity;
};

// const k = 5;

// let intervalId = setInterval(generateEntity, k * 1000);

app.post('/car-dialog/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const car = data.find((car) => car.id === id);
    if (car) {
        console.log(`Car with ID ${id} opened`);
        res.json(car);
    } else {
        res.status(404).json({message: 'Car not found'});
    }
});

// app.delete('/cars/:id', (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);
//     data = data.filter((item) => item.id !== id);
//     res.json({message: 'Item deleted successfully'});
// });

app.delete('/cars/:id', async (_req: Request, res: Response) => {
    const id = parseInt(_req.params.id);

    const query = 'delete FROM car where id = ?';

    try {
        await connection.query(query, [id]);
        res.json({message: 'Car deleted successfully'});
    } catch (error) {
        console.error('Error deleting car :', error);
        res.status(500).json({message: 'Error deleting car '});
    }
});

app.post('/cars', (_req: Request, res: Response) => {
    // const newCar = req.body;

    const newCar = generateEntity();
    // let typeId = 1;

    // if (newCar.type == 'Diesel') {
    //     typeId = 2;
    // } else if (newCar.type == 'Electric') {
    //     typeId = 3;
    // }

    // const insert = (newEntity: any) => {
    const query = `
      INSERT INTO car (brand, model, price, imageUrl, description, typeid)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    connection.query(
        query,
        [
            newCar.brand,
            newCar.model,
            newCar.price,
            newCar.imageUrl,
            newCar.description,
            newCar.typeId,
            // typeId,
        ],
        (error, result) => {
            if (error) {
                console.error('Error creating car :', error);
                res.status(500).json({error: 'Failed to create car '});
            } else {
                console.log(`Car created with ID: ${result.insertId}`);
                res.status(201).json({
                    message: 'Car created successfully',
                });
                // io.emit('newEntity', newEntity);
            }
        },
    );
    // };

    // const _newCar = generateEntity();
    // insert(_newCar);

    // setInterval(() => {
    //     const newCar = generateEntity();
    //     insert(newCar);
    // }, k * 1000);
});

// app.post('/cars', (req: Request, res: Response) => {
//     const newItem: Car = req.body;
//     data.push(newItem);
//     res.status(201).json(newItem);
// });

app.put('/cars/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let typeId = 1;
    const updatedCar = req.body; // Assuming data for the update is in the request body

    if (updatedCar.type == 'Diesel') {
        typeId = 2;
    } else if (updatedCar.type == 'Electric') {
        typeId = 3;
    }

    const query = `
        UPDATE car
        SET brand = ?, model = ?, price = ?, imageUrl = ?, description = ?, typeid = ?
        WHERE id = ?
        `;

    connection.query(
        query,
        [
            updatedCar.brand,
            updatedCar.model,
            updatedCar.price,
            updatedCar.imageUrl,
            updatedCar.description,
            typeId,
            id,
        ],
        (error, result) => {
            if (error) {
                console.error('Error updating car:', error);
                res.status(500).json({error: 'Failed to update car '});
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({message: 'Car not found'});
                } else {
                    console.log(`Car with ID ${id} updated`);
                    res.status(200).json({
                        message: 'Car updated successfully',
                    });
                }
            }
        },
    );
});

// app.put('/cars/:id', (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);
//     const updatedItem: Car = req.body;
//     data = data.map((item) =>
//         item.id === id ? {...item, ...updatedItem} : item,
//     );
//     res.json({message: 'Item updated successfully'});
// });

//types

app.post('/types', verifyJWT, (req: Request, res) => {
    const newCarType = req.body;
    const userId = req.user.id;
    const query = `
      INSERT INTO cartype (type, description, userId)
      VALUES (?, ?, ?)
    `;

    connection.query(
        query,
        [newCarType.type, newCarType.description, userId],
        (error, result) => {
            if (error) {
                console.error('Error creating car type:', error);
                res.status(500).json({error: 'Failed to create car type'});
            } else {
                console.log(`Car type created with ID: ${result.insertId}`);
                res.status(201).json({
                    message: 'Car type created successfully',
                });
            }
        },
    );
});

app.put('/types/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCarType = req.body; // Assuming data for the update is in the request body

    const query = `
        UPDATE cartype
        SET type = ?, description = ?
        WHERE id = ?
        `;

    connection.query(
        query,
        [updatedCarType.type, updatedCarType.description, id],
        (error, result) => {
            if (error) {
                console.error('Error updating car type:', error);
                res.status(500).json({error: 'Failed to update car type'});
            } else {
                if (result.affectedRows === 0) {
                    res.status(404).json({message: 'Car type not found'});
                } else {
                    console.log(`Car type with ID ${id} updated`);
                    res.status(200).json({
                        message: 'Car type updated successfully',
                    });
                }
            }
        },
    );
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// axios
//     .get(`http://localhost:${PORT}/cars`)
//     .then((response) => {
//         console.log('All data:', response.data);
//     })
//     .catch((error) => {
//         console.error('Error fetching all data:', error);
//     });

// axios
//     .get(`http://localhost:${PORT}/cars/types`)
//     .then((response) => {
//         console.log('Types', response.data);
//     })
//     .catch((error) => {
//         console.error('Error fetching types data:', error);
//     });

// axios
//     .get(`http://localhost:${PORT}/cars/2`)
//     .then((response) => {
//         console.log('Data for ID 2:', response.data);
//     })
//     .catch((error) => {
//         console.error('Error fetching data for ID 2:', error);
//     });

// axios
//     .delete(`http://localhost:${PORT}/cars/4`)
//     .then((response) => {
//         console.log('Item with ID 4 deleted:', response.data);
//     })
//     .catch((error) => {
//         console.error('Error deleting item with ID 4:', error);
//     });

// const newCar: Car = {
//     id: CarList.length + 2,
//     model: 'New Car',
//     brand: 'Brand X',
//     description: 'A brand new car',
//     price: 50000,
//     imageUrl: 'https://example.com/image.jpg',
// };

// axios
//     .post(`http://localhost:${PORT}/cars`, newCar)
//     .then((response) => {
//         console.log('New car added:', response.data);
//     })
//     .catch((error) => {
//         console.error('Error adding new car:', error);
//     });

//////// user login

// User Registration Endpoint
app.post('/register', async (req, res) => {
    const {username, password} = req.body;

    console.log('Received username:', username);

    // const salt = await bcrypt.genSalt(10);

    // const hashedPassword = await bcrypt.hash(password, 10);
    // const hashedPassword = password;

    const query =
        'INSERT INTO user_credentials (username, password) VALUES (?, ?)';
    connection.query(
        query,
        [username, password],
        (error, _results, _fields) => {
            if (error) {
                console.error('Error registering user:', error);
                res.status(500).json({error: 'Internal Server Error'});
            } else {
                console.log('User registered successfully');
                res.status(201).json({message: 'User registered successfully'});
            }
        },
    );
});

// User Login Endpoint
app.post('/login', (req, res) => {
    const {username, password} = req.body;

    const query = 'SELECT * FROM user_credentials WHERE username = ?';
    connection.query(query, [username], async (error, results, _fields) => {
        if (error) {
            console.error('Error logging in:', error);
            // console.log(' - user pass    - ' + password);
            res.status(500).json({error: 'Internal Server Error'});
        } else if (results.length === 0) {
            console.log('0 results');
            res.status(401).json({error: 'Invalid username or password'});
        } else {
            const user = results[0];

            let isPasswordValid = await bcrypt.compare(password, user.password);
            isPasswordValid = password == user.password;

            console.log(
                'Comparison:' +
                    isPasswordValid +
                    ' Password:' +
                    password +
                    ' Hashed:' +
                    user.password,
            );

            if (!isPasswordValid) {
                res.status(401).json({error: 'Invalid username or password'});
            } else {
                const token = jwt.sign(
                    {username: user.username},
                    'your_secret_key',
                );
                res.status(200).json({token});
            }
        }
    });
});

export default app;
