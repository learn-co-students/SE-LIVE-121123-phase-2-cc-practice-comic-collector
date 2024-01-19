import Comic from "./Comic";

function ComicsContainer({ comics, onDeleteComic, onSelectComic, onFav }) {
  const comicBooks = comics.map((comic) => (
    <Comic
      key={comic.id}
      {...comic}
      onDeleteComic={onDeleteComic}
      onSelectComic={onSelectComic}
      onFav={onFav}
    />
  ));

  return <>{comicBooks}</>;
}

export default ComicsContainer;
