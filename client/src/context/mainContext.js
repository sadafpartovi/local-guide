import {createContext} from 'react';

const mainContext = createContext({
  city: null,
  setCity: () => {},
  title: null,
  setTitle: () => {},
  type: null,
  setType: () => {},
  description: null,
  setDescription:() => {},
  img : null,
  setImg: () => {},
  msg: null,
  setMsg: () => {},
  postForm: () => {},
})

export default mainContext;