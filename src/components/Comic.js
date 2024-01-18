import { useState } from "react";

function Comic({ id, image_url, issue, title }) {
  const [isShowCover, setIsShowCover] = useState(true);

  const toggleCover = () => setIsShowCover((isShowCover) => !isShowCover);

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
          <button>Remove</button>
        </>
      )}
    </div>
  );
}

export default Comic;
