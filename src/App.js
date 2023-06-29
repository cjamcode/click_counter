import './App.css';
import Button from './components/Button'
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

const [value, setValue] = useState(0);

  function counterUp(){
    console.log('Hola');
    setValue(value + 1);
  }

  function counterReset(){
    setValue(0);
  }

  return (
    <div className="App">
      <div className='container'>
        <Counter value = {value} />
        <Button 
          value = 'Click me'
          type = 'clicker'
          action = {counterUp} />
        <Button 
          value = 'Reset'
          type = 'reset'
          action = {counterReset} />
      </div>
      
    </div>
  );
}

export default App;
