import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('Pruebas del componente <AddCategory/>', () => { 

    test('debe cambiar el valor de la caja de texto', () => {

        render( <AddCategory onNewCategory={ () => true }/> );
        
        
        const input = screen.getByRole('textbox');
        fireEvent.input( input,  { target: { value: 'Batman'}} );

        expect( input.value ).toBe('Batman');
        screen.debug();
    })

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
    
            const inputValue = 'Batman';
            const onNewCategory = jest.fn();
            
            render( <AddCategory onNewCategory={ onNewCategory }/> );

            const input = screen.getByRole('textbox');
            const form = screen.getByRole('form');
            
            fireEvent.input( input,  { target: { value: inputValue}} );
            fireEvent.submit( form );

            expect( input.value ).toBe('');

            expect( onNewCategory ).toHaveBeenCalledTimes(1);
            expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    })

    test('no debe de llamar onNewCategory si el input esta vacio', () => { 
    
        const inputValue = '';
        const onNewCategory = jest.fn();
        
        render( <AddCategory onNewCategory={ onNewCategory }/> );

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        
        fireEvent.input( input,  { target: { value: inputValue}} );
        fireEvent.submit( form );

        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
        

})
 })