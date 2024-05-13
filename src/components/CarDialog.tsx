import {Button, Grid, MenuItem, TextField, Typography} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import {useEffect} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import useCarCompany from '../company/CarCompany';
import {CarBrand} from '../model/Car';
import ReactHookFormSelect from './ReactHookFormSelect';
interface Inputs {
    model: string;
    brand: CarBrand;
    description: string;
    price: number;
    imageUrl: string;
}

const CarDialog = () => {
    const {opened, handleClose, addCar, selectedCar, editCar} = useCarCompany();
    const {register, handleSubmit, control, reset} = useForm<Inputs>({});

    useEffect(() => {
        reset(selectedCar);
    }, [selectedCar]);

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        if (selectedCar) {
            editCar({
                ...selectedCar,
                ...data,
            });
        } else {
            addCar({
                id: Math.floor(Math.random() * 1000),
                ...data,
            });
        }
        reset();
        handleClose();
    };
    return (
        <Dialog
            open={opened}
            onClose={handleClose}
            fullWidth
            maxWidth='sm'
            fullScreen={false}
        >
            <form style={{padding: 16}} onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h5'>Add a new car</Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <ReactHookFormSelect
                            label='Brand'
                            control={control}
                            defaultValue={''}
                            name={'brand'}
                        >
                            {Object.keys(CarBrand).map((brand) => {
                                const value =
                                    CarBrand[brand as keyof typeof CarBrand];
                                return (
                                    <MenuItem key={value} value={value}>
                                        {value}
                                    </MenuItem>
                                );
                            })}
                        </ReactHookFormSelect>
                    </Grid>

                    <Grid item xs={12}>
                        <TextField
                            label='Model'
                            fullWidth
                            {...register('model', {required: true})}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Price'
                            type='number'
                            fullWidth
                            {...register('price', {required: true})}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label='Image URL'
                            fullWidth
                            {...register('imageUrl', {required: true})}
                        />
                    </Grid>
                    {/* <Grid item xs={12}>
                        <TextField
                            label='Brand'
                            fullWidth
                            {...register('brand', {required: true})}
                        />
                    </Grid> */}
                    <Grid item xs={12}>
                        <TextField
                            label='Description'
                            fullWidth
                            {...register('description', {required: true})}
                        />
                    </Grid>

                    <Grid
                        item
                        xs={12}
                        display={'flex'}
                        justifyContent={'flex-end'}
                    >
                        <Button variant='contained' type='submit' sx={{mr: 2}}>
                            Submit
                        </Button>
                        <Button variant='outlined' onClick={handleClose}>
                            Close
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Dialog>
    );
};

export default CarDialog;
