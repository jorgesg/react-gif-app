import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Testing <GifExpertApp />', () => {

    test('should match snapshot', () => {
        const { container } = render(<GifExpertApp />);
        
        expect(container).toMatchSnapshot();
    });

    test('should not add categories with length <= 1', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'a'}});
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);
    });

    test('should add new category', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Deftones'}});
        fireEvent.input(input, {target: {value: 'Opeth'}});
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);//3
    });

    test('should NOT add a previously added category', () => {
        render(<GifExpertApp />);

        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Alien'}});
        fireEvent.input(input, {target: {value: 'Alien'}});
        expect(screen.getAllByRole('heading', {level: 3}).length).toBe(1);//2
    });

})