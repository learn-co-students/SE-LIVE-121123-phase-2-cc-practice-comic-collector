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

  return (
    <div className="App">
      <h1>Comicbook Collector</h1>

      <div className="grid with-sidebar">
        <div className="flex-container">
          <ComicsContainer comics={comics} />
        </div>

        <div className="sidebar">
          <ComicForm />
        </div>
      </div>
    </div>
  );
}

export default App;
