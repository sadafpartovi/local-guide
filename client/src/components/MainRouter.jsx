import { Switch, Route } from "react-router-dom";
import Home from './home/Home'
import Visitor from './visitor/Visitor';
import Local from './local/Local'
import './app.css'
import LogIn from './logIn/LogIn';
// import MyForm from './test/Form.jsx'


const MainRouter = () => {
  return (
    <Switch>
      <Route path='/visitor' render={() => <Visitor/>}/>
      <Route path='/local' render={() => <Local/>}/>
      <Route path='/home' render={() => <Home/>}/>
      <Route path='/' render={() => <LogIn/>}/>

      {/* <Route path='/form' render={() => <MyForm/>}/> */}
    </Switch>
  )
}
export default MainRouter