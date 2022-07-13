import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs'; 

jest.mock('../../src/hooks/useFetchGifs');

describe('Testing <GifGrid />', () => {

    const category = 'Rafa Nadal';

    test('should display loading initially', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)

        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });

    test('should display items when useFetchGifs loads the images', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Roland Garros',
                url: 'http://test/rolandgarros.jpg'
            },
            {
                id: 'DEF',
                title: 'Australia',
                url: 'http://test/australia.jpg'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)

        expect(screen.getAllByRole('img').length).toBe(2);

    });

})