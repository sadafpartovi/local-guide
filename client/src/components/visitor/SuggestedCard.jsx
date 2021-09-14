import "./visitor.css";
// import { Card } from 'react-bootstrap';
import {useState} from 'react'
import axios from "axios";

const SuggestedCard = ({ title, description, img, handleLike, like}) => {
  const [likeNum, setLikeNum] = useState(like)

  const addLike = async () => {
    await handleLike()
    setLikeNum(likeNum + 1)

  }

  return (
    <div className="d-flex p-3 mx-5 my-5">
      <img src={img} alt="card" className="img-card"></img>
      <div className=" flex-grow-1 d-flex px-5 flex-column ">
        <h4>{title}</h4>
        <p className="flex-grow-1">{description}</p>
        <div className="d-flex align-self-end justify-content-end align-items-center flex-grow-1">
          <i onClick={addLike} className="fa fa-heart "></i>
          <p className="p-0 m-0 mx-2">{likeNum}</p>
        </div>
      </div>
    </div>
  );
};
export default SuggestedCard;
