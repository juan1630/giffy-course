import { ListGif } from '../../components/ListGif';
import { useGifs } from '../../hooks/useGifs';
import './search.css'

export const Search = ({params}) => {
    const {keyword} = params;
    const { gifs, setPage } = useGifs(keyword);
    
    const handleNextPage = () =>  setPage(prev => prev +1 )
    return(
    <>
        <ListGif  gifs={gifs} />
        <button className='btn' onClick={handleNextPage} > Next page </button>
    </>
)
}