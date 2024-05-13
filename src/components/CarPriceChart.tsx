import {BarChart} from '@mui/x-charts/BarChart';
// import Car from '../model/Car';
import useCarStore from '../company/CarCompany';
import Car from '../model/Car';

interface PriceData {
    [brand: string]: number[]; // Object structure to hold price data for each brand
}

const CarPriceChart = () => {
    const {Cars} = useCarStore();
    // const priceData = Cars.map((car) => car.price);
    // const brands = Cars.map((car) => car.brand);

    const getPriceDataByBrand = (cars: Car[]): PriceData => {
        const priceDataByBrand: PriceData = {};

        // Iterate through each car
        cars.forEach((car) => {
            // Check if the brand already exists in the priceDataByBrand object
            if (priceDataByBrand[car.brand]) {
                // If the brand exists, push the car's price to the existing array
                priceDataByBrand[car.brand].push(car.price);
            } else {
                // If the brand doesn't exist, create a new array with the car's price
                priceDataByBrand[car.brand] = [car.price];
            }
        });

        return priceDataByBrand;
    };

    const priceDataByBrand = getPriceDataByBrand(Cars);

    const series = Object.entries(priceDataByBrand).map(([brand, prices]) => ({
        data: prices,
        label: brand,
    }));

    const chartSetting = {
        xAxis: [
            {
                label: 'rainfall (mm)',
            },
        ],
        width: 500,
        height: 400,
    };

    //const valueFormatter = (value: number | null) => `${value}mm`;

    // const calculateAveragePrice = (prices: number[]): number => {
    //     if (prices.length === 0) {
    //         return 0; // Return 0 if there are no prices
    //     }

    //     const total = prices.reduce((acc, curr) => acc + curr, 0); // Calculate the total sum of prices
    //     return total / prices.length; // Calculate the average by dividing the total by the number of prices
    // };

    //const prices: number[] = priceStrings.map((price) => parseFloat(price));

    //const averagePrice = calculateAveragePrice(prices);

    return (
        <BarChart
            //dataset={Object.keys(getPriceDataByBrand(Cars))}
            yAxis={[
                {
                    scaleType: 'band',
                    data: Object.keys(getPriceDataByBrand(Cars)),
                },
            ]}
            series={series}
            layout='horizontal'
            {...chartSetting}
        />
    );
};
//     return (
//         <BarChart width={1000} height={800}>
//             <XAxis
//                 title='Car Brands'
//                 dataKey='label' // Use label from series for x-axis data
//                 tickLabelAlignment='outside' // Rotate x-axis labels for better readability
//             />
//             <YAxis title='Price (USD)' />
//             <Tooltip // Add tooltip functionality
//                 renderContent={(params) => (
//                     <>
//                         <div>Brand: {params.datum.label}</div>
//                         <div>
//                             Average Price: $
//                             {params.datum.data.reduce(
//                                 (sum, val) => sum + val,
//                                 0,
//                             ) / params.datum.data.length}
//                         </div>
//                     </>
//                 )}
//             />
//             <Bar
//                 data={series}
//                 colorBy='label' // Assign different colors to bars based on brand
//             />
//         </BarChart>
//     );
// };
//     return (
//         <BarChart
//             xAxis={[{scaleType: 'band', data: Object.keys(priceDataByBrand)}]}
//             series={series}
//             width={1000}
//             height={800}
//         />
//     );
// };

// export default CarPriceChart;

// import {Typography} from '@mui/material';
// import {BarChart} from '@mui/x-charts';
// import useCarStore from '../company/CarCompany';
// import Car from '../model/Car';

// const CarPriceChart: React.FC = () => {
//     const {Cars} = useCarStore();

//     // Extracting brand names and prices from car data
//     const brandPrices: {[brand: string]: number[]} = Cars.reduce(
//         (acc: {[brand: string]: number[]}, car: Car) => {
//             acc[car.brand] = acc[car.brand] || [];
//             acc[car.brand].push(car.price);
//             return acc;
//         },
//         {},
//     );

//     // Converting data into a format suitable for rendering
//     const chartData: {brand: string; averagePrice: number}[] = Object.entries(
//         brandPrices,
//     ).map(([brand, prices]: [string, number[]]) => ({
//         brand,
//         averagePrice:
//             prices.reduce((sum, price) => sum + price, 0) / prices.length,
//     }));

//     // Sorting chart data based on average price in descending order
//     chartData.sort((a, b) => b.averagePrice - a.averagePrice);

//     return (
//         <div>
//             <Typography variant='h5' align='center' gutterBottom>
//                 Average Car Price by Brand
//             </Typography>
//             <BarChart
//                 data={chartData}
//                 xAxisOptions={{dataKey: 'brand'}}
//                 yAxisOptions={{type: 'number'}}
//                 height={500}
//                 width={800}
//                 padding={{top: 50, right: 50, bottom: 50, left: 50}}
//             >
//                 <XAxis tickSize={0} />
//                 <YAxis tickSize={0} />
//                 <Tooltip />
//                 <BarSeries dataKey='averagePrice' color='#1976d2' />
//                 <Grid direction='y' />
//             </BarChart>
//         </div>
//     );
// };

// export default CarPriceChart;

// import { Typography } from '@mui/material';
// import { BarChart } from '@mui/x-charts';
// // import Tooltip from '@mui/x-charts/ChartsTooltip';
// // import XAxis from '@mui/x-charts/ChartsXAxis';
// // import YAxis from '@mui/x-charts/ChartsYAxis';
// import useCarStore from '../company/CarCompany';
// import Car from '../model/Car';

// const CarPriceChart: React.FC = () => {
//     const {Cars} = useCarStore();

//     // Extracting brand names and prices from car data
//     const brandPrices: {[brand: string]: number[]} = Cars.reduce(
//         (acc: {[brand: string]: number[]}, car: Car) => {
//             acc[car.brand] = acc[car.brand] || [];
//             acc[car.brand].push(car.price);
//             return acc;
//         },
//         {},
//     );

//     // Converting data into a format suitable for rendering
//     const chartData: {brand: string; averagePrice: number}[] = Object.entries(
//         brandPrices,
//     ).map(([brand, prices]: [string, number[]]) => ({
//         brand,
//         averagePrice:
//             prices.reduce((sum, price) => sum + price, 0) / prices.length,
//     }));

//     // Sorting chart data based on average price in descending order
//     chartData.sort((a, b) => b.averagePrice - a.averagePrice);

//     return (
//         <div>
//             <Typography variant='h5' align='center' gutterBottom>
//                 Average Car Price by Brand
//             </Typography>
//             <BarChart
//                 series:{[{data={chartData}}]}
//                 xAxisOptions={{dataKey: 'brand'}}
//                 yAxisOptions={{type: 'number'}}
//                 height={500}
//                 width={800}
//                 padding={{top: 50, right: 50, bottom: 50, left: 50}}
//                  />
//                 {/* </div>series dataKey='averagePrice' color='#1976d2'
//                 />
//                 </div><Grid direction='y' /> */}
//             </BarChart>
//         </div>
//     );
// };

export default CarPriceChart;
