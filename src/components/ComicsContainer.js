import Comic from "./Comic";

function ComicsContainer({ comics }) {
  const comicBooks = comics.map((comic) => (
    <Comic
      key={comic.id}
      {...comic}
    />
  ));

  return <>{comicBooks}</>;
}

export default ComicsContainer;
