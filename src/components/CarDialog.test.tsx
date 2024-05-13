import {render} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import CarDialog from './CarDialog';

vi.mock('react-hook-form', () => ({
    ...require('react-hook-form'),
    useForm: () => ({
        register: vi.fn(),
        handleSubmit: vi.fn(),
        control: vi.fn(),
        reset: vi.fn(),
    }),
}));

vi.mock('../src/company/CarCompany', () => ({
    ...require('../src/company/CarCompany'),
    useCarCompany: () => ({
        opened: true,
        handleClose: vi.fn(),
        addCar: vi.fn(),
        editCar: vi.fn(),
        selectedCar: null,
    }),
}));

describe('CarDialog', () => {
    it('should render', () => {
        const res = render(<CarDialog />);
        expect(res).toMatchSnapshot();
    });
});
