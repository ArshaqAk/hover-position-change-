import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
function App() {
  const [margin,setMargin]= useState({
    top:0,
    left:0
  })
  
  const [text,setText]=useState('')

  const handlechangeposition=()=>{
      setMargin({
        top: Math.random() * 300+100,
        left: Math.random() * 600+200,
      });
  }

  const handleYes=()=>{
    setText('I Know you love me ❤️😎')
  }

  return (
    <div className='container'>
      <div className="row text-center mt-5 d-flex flex-column align-items-center">
          <div className="col-lg-4 col-sm-12"></div>
          <div className="col-lg-4 col-sm-12">
          <h2 className='heading fs-1'>Do U Love Me!?</h2>
          <div className="button-div mt-3">
            <button onClick={handleYes} className='btn btn-dark btn-sm  butt butt2'>Yes</button>
          <button
          className='btn btn-dark btn-sm  butt butt1'
          style={{
          position: 'absolute',
          marginTop:`${margin.top}px`,
          marginLeft:`${margin.left}px`
        }} 
        onMouseOver={handlechangeposition}>No</button>

        </div>

          </div>
          <div className="col-lg-4 col-sm-12"></div>
      </div>

      <div className="row text-center mt-5 text-light">
        <h4 className='text '>{text}</h4>
      </div>

   
    </div>
  )
}

export default App
