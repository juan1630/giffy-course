import { ListGif } from '../../components/ListGif';
import { useGifs } from '../../hooks/useGifs'

export const Search = ({params}) => {
    const {keyword} = params;
    const { gifs } = useGifs(keyword);
    return(<ListGif  gifs={gifs} />)
}