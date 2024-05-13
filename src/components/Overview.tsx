import AddIcon from '@mui/icons-material/Add';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Pagination as MuiPagination,
    Typography,
} from '@mui/material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useCarCompany from '../company/CarCompany';
import Car from '../model/Car';

const Overview = () => {
    const navigate = useNavigate();
    const {Cars, deleteCar, handleOpen} = useCarCompany();
    const [currentPage, setCurrentPage] = useState(1);
    // const lastPage = 3;
    const [isAscending, setIsAscending] = useState(true); // Track sort order
    //const [currentItems, setCurrentItems] = useState<Car[]>([]);

    // useEffect(() => {
    //     const sorted = [...Cars].sort((a, b) =>
    //         (a.brand || '').localeCompare(b.brand || ''),
    //     );
    //     setSortedCars(sorted);
    // }, [Cars]);

    // useEffect(() => {
    //     // Sort the cars initially
    //     sortCars(isAscending, cars);
    // }, [cars, isAscending]);

    const ITEMS_PER_PAGE = 12;
    const totalPages = Math.ceil(Cars.length / ITEMS_PER_PAGE);

    const sortCars = (asc: boolean, cars: Car[]) => {
        const sorted = [...cars].sort((a, b) =>
            asc
                ? (a.brand || '').localeCompare(b.brand || '')
                : (b.brand || '').localeCompare(a.brand || ''),
        );
        // setSortedCars(sorted);
        return sorted;
    };

    const handleSort = () => {
        setIsAscending(!isAscending);
    };

    const handlePageChange = (
        _event: React.ChangeEvent<unknown>,
        newPage: number,
    ) => {
        // console.log('Event:', event);

        setCurrentPage(newPage);
    };

    const currentCars = Cars;
    const sortedCars = sortCars(isAscending, currentCars);

    const currentItems = sortedCars.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE,
    );

    return (
        <Grid container spacing={6}>
            <Grid item xs={12} display={'flex'} justifyContent='center'>
                <Grid item xs={4}>
                    <Typography variant='h4'>Car Overview</Typography>
                </Grid>
                <Grid container item xs={5}>
                    <Grid item xs={5}>
                        <Typography variant='h6'>Add a new Car</Typography>
                    </Grid>
                    <Grid item xs={2}>
                        <IconButton
                            onClick={() => handleOpen()}
                            aria-label='add'
                        >
                            <AddIcon htmlColor='#fff' />
                        </IconButton>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Button
                        variant='contained'
                        onClick={() => navigate('CarPriceChart')}
                    >
                        View Car Price Distribution
                    </Button>
                </Grid>
                <Grid item xs={2}>
                    <Button onClick={handleSort}>
                        {isAscending ? 'Sort Descending' : 'Sort Ascending'}
                    </Button>
                </Grid>
            </Grid>
            {currentItems.map((car) => (
                <Grid key={car.id} item xs={12} md={3}>
                    <Card sx={{maxWidth: 345}}>
                        <CardActionArea
                            onClick={() => navigate(`/cars/${car.id}`)}
                        >
                            <CardMedia
                                sx={{height: 140}}
                                image={car.imageUrl}
                                title={`${car.brand || ''} ${car.model}`}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant='h5'
                                    component='div'
                                >
                                    {`${car.brand} ${car.model}`}
                                </Typography>
                                <Typography
                                    variant='body2'
                                    color='text.secondary'
                                >
                                    {`Price: ${car.price}. ${car.description}`}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button
                                size='small'
                                onClick={() => deleteCar(car.id)}
                            >
                                Delete
                            </Button>
                            <Button
                                size='small'
                                onClick={() => handleOpen(car)}
                            >
                                Edit
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            ))}

            <Grid item xs={12} display={'flex'} justifyContent='center'>
                <MuiPagination
                    count={totalPages}
                    color='primary'
                    page={currentPage}
                    onChange={handlePageChange}
                    variant='outlined'
                    shape='rounded'
                />
            </Grid>
        </Grid>
    );
};
export default Overview;
