import { CardDetailGif } from "../../components/CardDetailGif";
import useSingleGif from "../../hooks/useSingleGif"

export function DetailGif({ params }) {


  const { gif } = useSingleGif({ id: params.id});
  if(!gif) return null
  return (
    <>
      <CardDetailGif gif={gif} />
   </>
  );
}
