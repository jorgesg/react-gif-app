import { render, screen } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Testing <GifItem />', () => {

    const title = 'Gif title test';
    const url = 'https://giftest.com/url-test-1234'

    test('Match snapshot', () => {
        const { container } = render(<GifItem title={title} url={url}/>);
        expect(container).toMatchSnapshot();
    });

    test('Should display image with correct url and alt', () => {
        render(<GifItem title={title} url={url}/>);
        
        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('Should display title', () => {
        render(<GifItem title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();
    })

})