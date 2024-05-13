import {Suspense, lazy} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import Layout from './components/Layout';
const AppRouter = () => {
    const Overview = lazy(() => import('./components/Overview'));
    const Detail = lazy(() => import('./components/Detail'));
    const CarPriceChart = lazy(() => import('./components/CarPriceChart'));
    return (
        <BrowserRouter>
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path='/' element={<Navigate replace to='/cars' />} />
                    <Route
                        element={
                            <Layout>
                                <Overview />
                            </Layout>
                        }
                        path={'/cars'}
                    />
                    <Route element={<Detail />} path={'/cars/:id'} />

                    <Route
                        element={<CarPriceChart />}
                        path={'/cars/CarPriceChart'}
                    />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default AppRouter;
