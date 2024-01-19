import { useState } from "react";

function Comic({
  id,
  image_url,
  issue,
  title,
  onDeleteComic,
  onSelectComic,
  favorite,
  onFav,
}) {
  const [isShowCover, setIsShowCover] = useState(true);

  const toggleCover = () => setIsShowCover((isShowCover) => !isShowCover);

  const url = `http://localhost:8004/comics/${id}`;

  // const cover = (
  //   <img
  //     onClick={toggleCover}
  //     src={image_url}
  //     alt={`Cover for ${title}`}
  //   />
  // );

  // const back = (
  //   <>
  //     <h3 onClick={toggleCover}>{title}</h3>
  //     <h4>{`Issue No. ${issue}`}</h4>
  //     <button>Remove</button>
  //   </>
  // );

  // let viewable;
  // if (isShowCover){
  //   viewable = cover
  // } else {
  //   viewable = back
  // }
  const handleFav = () => {
    fetch(url, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: !favorite }),
    })
      .then(response => response.json())
      .then(onFav)
  };

  const handleDelete = () => {
    fetch(url, { method: "DELETE" });
    onDeleteComic(id);
  };

  return (
    <div className="comic-item">
      {/* {viewable} */}
      {isShowCover ? (
        <img
          onClick={toggleCover}
          src={image_url}
          alt={`Cover for ${title}`}
        />
      ) : (
        <>
          <h3 onClick={toggleCover}>{title}</h3>
          <h4>{`Issue No. ${issue}`}</h4>
          {favorite ? (
            <button onClick={handleFav}>⭐</button>
          ) : (
            <button onClick={handleFav}>✩</button>
          )}
          <button onClick={handleDelete}>Remove</button>
          <button onClick={() => onSelectComic(id)}>Edit</button>
        </>
      )}
    </div>
  );
}

export default Comic;
