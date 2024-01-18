import { useState, useEffect } from "react";
import ComicsContainer from "./ComicsContainer";
import ComicForm from "./ComicForm";

function App() {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8004/comics")
      .then((response) => response.json())
      .then(setComics);
  }, []);

  function addComic(newComic){
    console.log("🚀 ~ addComic ~ newComic:", newComic)
    setComics([newComic, ...comics])
  }

  function removeComic(removedComicId){
    console.log("🚀 ~ removeComic ~ removedComicId:", removedComicId)
    setComics(comics.filter(comic => comic.id !== removedComicId))
  }

  return (
    <div className="App">
      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">
        <div className="flex-container">
          <ComicsContainer comics={comics} onDeleteComic={removeComic} />
        </div>

        <div className="sidebar">
          <ComicForm onSubmitComic={addComic}/>
        </div>
      </div>
    </div>
  );
}

export default App;
