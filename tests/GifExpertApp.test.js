import { render, screen, fireEvent } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en GifExpertApp', () => { 

    const newCategory = 'Saitama';

    test('should Add new categories', () => {
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); 
  
        //ahora disparo los eventos para agregar 3 categorias nuevas
        fireEvent.input(input, { target: { value: newCategory } });
        fireEvent.submit(form); //agrega Saitama
  
        //Espero que se hallan agregado 3 categorías cuyos nombres aparecen en etiquetas h3
        expect(screen.getAllByRole('heading', { level: 1 }).length).toBe(3);
    });

     test('should match the snapshot', () => {
 
        const { container } = render(<GifExpertApp />);
        expect(container).toMatchSnapshot();
     });
 })