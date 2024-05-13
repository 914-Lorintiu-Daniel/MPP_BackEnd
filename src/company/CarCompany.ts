import {create} from 'zustand';
import Car from '../model/Car';
import {CarList} from '../service/CarApi.ts';

interface useCarCompanyProps {
    opened: boolean;
    handleOpen: (Car?: Car) => void;
    statisticsOpen: () => void;
    handleClose: () => void;
    Cars: Car[];
    deleteCar: (CarId: number) => void;
    addCar: (Car: Car) => void;
    selectedCar: Car;
    editCar: (Car: Car) => void;
}

const useCarCompany = create<useCarCompanyProps>((set) => ({
    opened: false,
    selectedCar: {} as Car,
    handleOpen: (Car?: Car) => set({opened: true, selectedCar: Car}),
    editCar: (Car: Car) => {
        set((state) => ({
            Cars: state.Cars.map((d) => (d.id === Car.id ? Car : d)),
        }));
    },
    statisticsOpen: () => set({opened: true}),
    handleClose: () => set({opened: false, selectedCar: {} as Car}),
    Cars: CarList,
    addCar: (Car: Car) => set((state) => ({Cars: [...state.Cars, Car]})),
    deleteCar: (CarId: number) =>
        set((state) => ({Cars: state.Cars.filter((d) => d.id !== CarId)})),
}));

export default useCarCompany;
