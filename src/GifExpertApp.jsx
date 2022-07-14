import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components/index';


export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One Punch']);
    
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory]);
    }

    return (
    <>   
        {/* titulo */ }
        <h1>GifExpertApp</h1>

        {/* Input */ }
        <AddCategory onNewCategory={ (newCat)=> onAddCategory(newCat) } />

        {/* Listado de Gif */ }
        { 
            categories.map( ( category ) => (
                <GifGrid 
                    key={ category } 
                    category={ category }
                />
            ))
        }
    </>
  )
}
