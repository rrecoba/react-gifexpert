import { useState, useEffect } from 'react'
//import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

    //Custom Hook
    const { images, isLoading } = useFetchGifs ( category ) ;

    return (
        <>
            <h1>{ category }</h1>
            {
                isLoading ? (  <h2>Cargando...</h2>) : null
            }
           

            <div className='card-grid'>
            { 
                images.map( ( img ) => (
                    <GifItem 
                        key={ img.id }
                        title={ img.title } 
                        url={ img. url }
                    />
                ))
            }
            </div>
        </>
    )
}
