import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('Puebas en <GifItem/>', () => {

    const title = 'pepe';
    const url = 'http://google.com/'

    test('debe de hacer match con el snapshot', () => { 

        const { container } = render(<GifItem title={ title } url={ url }/>);
        expect( container ).toMatchSnapshot();
    })    

    test('debe de mostrar la imagen con el url y alt indicando', () => { 
        
        render( <GifItem title={ title } url={ url }/> );
        //screen.debug();
        const { src, alt } = screen.getByRole('img')
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

     test('debe mostrar el titulo', () => { 

        render( <GifItem title={ title } url={ url }/> );
        expect( screen.getByText( title) ).toBeTruthy();
    })
})