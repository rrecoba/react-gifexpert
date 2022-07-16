import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook', () => { 
    
    test('debe regresar el estado incial', () => { 
        
        const { result } = renderHook( () => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    })

    test('debe retornar imagenes', async() => { 
        const { result } = renderHook( () => useFetchGifs('One Punch'));
        
        await waitFor(
         () => expect(result.current.images.length).toBeGreaterThan(0)
        );
        
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();

    })
 })