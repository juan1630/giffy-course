import { Redirect } from "wouter";
import { CardDetailGif } from "../../components/CardDetailGif";
import useSingleGif from "../../hooks/useSingleGif";
import { Helmet } from "react-helmet";

export function DetailGif({ params }) {
  const { gif, hasError, isLoadingState } = useSingleGif({ id: params.id });
  const title = gif ? gif.title : "";

  if (isLoadingState) {
    return (
      <>
        <Helmet>
          <title>Cargando... </title>
        </Helmet>
      </>
    );
  }
  if (hasError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title> {gif.title} </title>
      </Helmet>
      <CardDetailGif gif={gif} />
    </>
  );
}
