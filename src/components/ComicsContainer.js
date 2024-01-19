import Comic from "./Comic";

function ComicsContainer({ comics, onDeleteComic, onSelectComic }) {
  const comicBooks = comics.map((comic) => (
    <Comic
      key={comic.id}
      {...comic}
      onDeleteComic={onDeleteComic}
      onSelectComic={onSelectComic}
    />
  ));

  return <>{comicBooks}</>;
}

export default ComicsContainer;
