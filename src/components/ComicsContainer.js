import Comic from "./Comic";

function ComicsContainer({ comics, onDeleteComic }) {
  const comicBooks = comics.map((comic) => (
    <Comic
      key={comic.id}
      {...comic}
      onDeleteComic={onDeleteComic}
    />
  ));

  return <>{comicBooks}</>;
}

export default ComicsContainer;
