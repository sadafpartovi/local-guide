import { Switch, Route } from "react-router-dom";
import Home from './home/Home'
import Visitor from './visitor/Visitor';
import Local from './local/Local'
import './app.css'
import LogIn from './logIn/LogIn';
// import MyForm from './test/Form.jsx'
import SignUp from './signUp/SignUp';


const MainRouter = () => {
  return (
    <Switch>
      <Route path='/visitor' render={() => <Visitor/>}/>
      <Route path='/local' render={() => <Local/>}/>
      <Route path='/signup' render={() => <SignUp/>}/>
      <Route path='/login' render={() => <LogIn/>}/>
      <Route path='/' render={() => <Home/>}/>


      {/* <Route path='/form' render={() => <MyForm/>}/> */}
    </Switch>
  )
}
export default MainRouter