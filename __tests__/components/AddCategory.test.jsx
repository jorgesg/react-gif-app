import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Testing <AddCategory />', () => {

    test('Should change input value', () => {
        render(<AddCategory onNewCategory={() => {}}/>);
        
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});

        expect(input.value).toBe('Saitama');
    });

    test('Should trigger OnNewCategory if input has value', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        expect(input.value).toBe('');

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);

    });

    test('Should NOT trigger OnNewCategory if input is empty', () => {
        //const inputValue = '';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        //const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        // fireEvent.input(input, {target: {value: inputValue}});
        // expect(input.value).toBe('');
        fireEvent.submit(form);
        
        // expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();
    });

})