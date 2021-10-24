import MainContext from './mainContext';
import {useState, useEffect} from 'react'
import axios from 'axios'

const Provider = ({children})=>{
  const [city, setCity] = useState();
  const [title, setTitle] = useState();
  const [type, setType] = useState();
  const [description, setDescription] = useState();
  const [img, setImg] = useState();
  const [msg, setMsg] = useState(false);

  const postForm = async (e) => {
    e.preventDefault();
    if (city, title, type, description, img) {
      try {
        await axios.post("/post", {
          city,
          title,
          type,
          description,
          img,
        });
        setCity('');
        setTitle('');
        setType('');
        setDescription('');
        setImg('');
        setMsg(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <MainContext.Provider value={{city, setCity, title, setTitle, type, setType, description, setDescription, img, setImg, msg, setMsg, postForm}}>
      {children}
    </MainContext.Provider>
  )
}

export default Provider
