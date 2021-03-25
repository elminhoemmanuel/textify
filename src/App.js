import './App.css';
import axios from 'axios'
import { useState, useEffect } from 'react';
import OutputText from './components/OutputText';
import Select from './components/controls/Select'

function App() {

  const [textDetails, setTextDetails] = useState({type:'meat-and-filler',paras:4, format:'html',text:''});
  
  useEffect(() =>{
    axios.get(`https://baconipsum.com/api/?type=${textDetails.type}&paras=${textDetails.paras}
    &format=${textDetails.format}`)
    .then((response) =>{
      setTextDetails({...textDetails, text:response.data})
 
    })
    .catch((err) =>{
      console.log(err);
    })
  },[textDetails.format, textDetails.paras])

  const onChangeValue = (value) =>{
    setTextDetails({...textDetails, format:value})
  }

  const handleChange = (e) =>{
    setTextDetails({...textDetails, paras:e.target.value})
  }
  

  return (
    <div className="App container">
      <h1 className='py-5 text-center'>Textify <i class="far fa-clipboard"></i></h1>
      <p className='pb-4 text-center'>Generate placeholder text easily</p>
      <form className='form-inline mb-4'>
        <div className="form-gourp mr-5">
          <label >Add HTML tags?</label>
          <Select onChangeValue={onChangeValue} className=''/>
        </div>
        <div className="form-gourp">
          <label >How many paragraphs?</label>
          <input type="number" className='form-control' value={textDetails.paras}
            onChange={handleChange}/>
        </div>
      </form>
      <OutputText text={textDetails.text} />
    </div>
  );
}

export default App;
