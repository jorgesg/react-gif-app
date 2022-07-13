import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Testing hook useFetchGifs', () => {

    test('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs('Fernando Alonso'));
        const { images, isLoading } = result.current;

        expect(images.length).toBe(0);
        expect(isLoading).toBeTruthy();

    });

    test('should return an array of images and isLoading=false', async () => {
        const { result } = renderHook(() => useFetchGifs('Fernando Alonso'));
        
        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isLoading).toBeFalsy();

    });

})