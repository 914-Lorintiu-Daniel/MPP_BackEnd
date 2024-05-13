import {Grid, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import useCarStore from '../company/CarCompany';
import Car from '../model/Car';

const Detail = () => {
    const params = useParams();
    const [Car, setCar] = useState<Car | undefined>(undefined);
    const {Cars} = useCarStore();

    React.useEffect(() => {
        if (params.id)
            setCar(Cars.find((Car) => Car.id === parseInt(params.id!)));
    }, []);
    return (
        <>
            <Grid container spacing={2} style={{backgroundColor: '#fff'}}>
                <Grid item xs={12} md={6}>
                    <img
                        src={Car?.imageUrl}
                        alt={Car?.model}
                        style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: 10,
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Typography
                                variant='body1'
                                style={{color: '#000000'}}
                            >
                                <b>Price</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                disabled={true}
                                value={Car?.price || ''}
                            />
                        </Grid>
                        <Grid item xs={2}>
                            <Typography
                                variant='body1'
                                style={{color: '#000000'}}
                            >
                                <b>Model:</b>
                            </Typography>
                        </Grid>
                        <Grid item xs={10}>
                            <TextField
                                disabled={true}
                                value={Car?.model || ''}
                            ></TextField>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Detail; //export { Detail };
