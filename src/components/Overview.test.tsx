import {render} from '@testing-library/react';
import {describe, expect, it, vi} from 'vitest';
import Overview from './Overview';

vi.mock('react-router-dom', () => ({
    ...require('react-router-dom'),
    useNavigate: () => vi.fn(),
}));

describe('Overview', () => {
    it('should render', () => {
        const res = render(<Overview />);
        expect(res).toMatchSnapshot();
    });
});

// it('should navigate to "/cars/:id" when car card is clicked', () => {
//     const {getByText} = render(<Overview />);
//     const navigate = vi.fn(); // Mocked useNavigate function

//     // Find a car card and simulate click
//     const carCard = getByText(/^[A-Z]+ [A-Z]+/g); // Match brand and model format
//     fireEvent.click(carCard);

//     // Expect navigate to be called with correct car ID
//     expect(navigate).toHaveBeenCalledWith(
//         `/cars/${carCard.textContent.split(' ')[1]}`,
//     ); // Extract ID from car text
// });
