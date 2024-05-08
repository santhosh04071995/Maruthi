import logo from './logo.svg';
import styles from './App.css';
import { StrictMode, useEffect, useState } from 'react';
import LandingPageage from './components/LandingPage';
import Menu from './components/Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function App() {
  let [count,setCount] = useState(1);
  let message = [
    {text : 'Dive into What you love'},
    {text : 'Include Your passion'},
    {text : 'Give into Your passion'}
  ]
  useEffect(()=> {
    function myfunc() {
        let x=  setInterval(() => {
                count++;    
          setCount(count);
              console.log(count);
              if(count>=4)
                {
                  clearInterval(x);
                }
                  }, 3000);
              
                }
    myfunc();
},[])

  return (
    <div className='container-fluid'>
      {/* <button onClick={()=>(setCount(1))}>1</button>
      <button onClick={()=> (setCount(2))}>2</button>
      <button onClick={()=>(setCount(3))}>3</button>
      <button onClick={()=>(setCount(4))}>4</button> */}
      
      <LandingPageage myvalue={count} mymessage={message} />     
            <Menu />   
      
    </div>
     );
}

export default App;
