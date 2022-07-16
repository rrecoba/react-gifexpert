import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Puebas en <GifGrid/>', () => {

    const category = 'One Punch';
   
    test('debe de mostrar el loading incialemente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={ category }/>);
        expect( screen.getByText ('Cargando...'));
    })    

    test('debe de mostrar items', () => { 
        const gifs = [
            {
               id: 'ABC',
               title: 'Pepe',
               url: 'http://pepe'
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render(<GifGrid category={ category }/>);
        expect( screen.getAllByRole('img').length).toBe(1);
    })

  
})