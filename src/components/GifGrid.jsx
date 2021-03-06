import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types';

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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired

}