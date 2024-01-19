import { useState, useEffect } from "react";
import ComicsContainer from "./ComicsContainer";
import ComicForm from "./ComicForm";
import EditForm from "./EditForm";

function App() {
  const [comics, setComics] = useState([]);
  const [comicToEdit, setComicToEdit] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8004/comics")
      .then((response) => response.json())
      .then(setComics);
  }, []);

  function addComic(newComic) {
    console.log("🚀 ~ addComic ~ newComic:", newComic);
    setComics([newComic, ...comics]);
  }

  function updateComic(updatedComic) {
    console.log("🚀 ~ updateComic ~ updatedComic:", updatedComic);
    setComics(comics.map(comic => comic.id === updatedComic.id ? updatedComic : comic))
  }

  function removeComic(removedComicId) {
    console.log("🚀 ~ removeComic ~ removedComicId:", removedComicId);
    setComics(comics.filter((comic) => comic.id !== removedComicId));
  }

  function findSelectedComic(selectedId) {
    setComicToEdit(comics.find((comic) => comic.id === selectedId));
  }

  return (
    <div className="App">
      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">
        <div className="flex-container">
          <ComicsContainer
            comics={comics}
            onDeleteComic={removeComic}
            onSelectComic={findSelectedComic}
            onFav={updateComic}
          />
        </div>

        <div className="sidebar">
          {comicToEdit ? (
            <EditForm
              comicToEdit={comicToEdit}
              onPatchComic={updateComic}
              setComicToEdit={setComicToEdit}
            />
          ) : (
            <ComicForm onSubmitComic={addComic} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
