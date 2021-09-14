import './home.css'
import img from '../../statics/image/map.png'
import img1 from '../../statics/image/city1.svg'
import {useHistory} from 'react-router'
const Home = () => {
  const history = useHistory()
  return (
    <div className='container full-height'>
      <div className='d-flex flex-column h-100 align-items-center '>

      <h1 className="text-center p-5 mx-0 mt-5">Say Hello To Your Local Guide</h1>
      <img className='homeImg' alt='myimage' src={img1}/>
      <div className='d-flex  justify-content-center align-items-center  mt-0'>
        <button className='p-5'onClick={() => history.push('/local')}>I am a Local</button>
        <button className='p-5' onClick={() => history.push('/visitor')}>I am a Visitor</button>
      </div>
      </div>


    </div>
  )
}
export default Home