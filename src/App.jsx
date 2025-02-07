
import './App.css'
import BlogList from './components/BlogList';
import ExtraInfo from './components/ExtraInfo';
import Header from './components/Header';
import MovingPicture from './components/MovingPicture';

function App() {
  return (<>
  <Header/> 
  <br /><br /><br /><br />
  <MovingPicture/> 
  <div className='row'>
    <BlogList/> <div className='seperator'></div> <ExtraInfo/>
  </div>
  </>);
}

export default App
