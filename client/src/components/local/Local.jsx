import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
import "./local.css";
import ModalBtn from "./Modal.jsx";
import img1 from '../../statics/image/city2.svg'
import mainContext from '../../context/mainContext';
import Nav from '../nav/NavBar';

const Local = () => {
  const {city, setCity, title, setTitle, type, setType, description, setDescription, img, setImg, msg, setMsg, postForm} = useContext(mainContext)

  return (
    <>
    <Nav/>
    <div >
      <h1 className="text-center p-5">Share Your World as a Local Guide</h1>

      <div>
        <form
          onSubmit={(e) => postForm(e)}
          className="mx-5 p-3 d-flex justify-content-center flex-column"
        >
          <input
            className="localForm m-3 p-3"
            type="text"
            placeholder="My City"
            onChange={(e) => setCity(e.target.value)}
          value={city}></input>
          <input
            className="localForm m-3 p-3"
            type="text"
            placeholder="Name of the Place"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></input>
          <input
            className="localForm m-3 p-3"
            type="text"
            placeholder="Type of the Place eg:restuarant, museum, ..."
            onChange={(e) => setType(e.target.value)}
            value={type}
          ></input>
          <input
            className="localForm m-3 p-3"
            type="text"
            placeholder="Why I like it"
            onChange={(e) => setDescription(e.target.value)} value={description}
          ></input>
          <input
            className="localForm m-3 p-3"
            type="text"
            placeholder="Image"
            onChange={(e) => setImg(e.target.value)}
            value={img}
          ></input>
          <div className="d-flex justify-content-center">
            <button className="submit-button text-center" type="submit">
              Submit
            </button>
            <ModalBtn show={msg} setShow={setMsg}/>
          </div>
        </form>
      </div>
      <div className='d-flex justify-content-center flex-column'>
      <img src={img1} alt='city image'></img>
      </div>

    </div>
    </>
  );
};
export default Local;
