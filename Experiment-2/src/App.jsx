import React, { useState } from 'react';
import Button from './components/Button';
import TextField from './components/TextField';
import Select from './components/Select';
import Rating from './components/Rating';
import Checkbox from './components/Checkbox';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  const [text, setText] = useState('');
  const [selection, setSelection] = useState('option1');
  const [rating, setRating] = useState(3);
  const [checked, setChecked] = useState(false);

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Experiment 2 Components</h1>

      <section style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
        <h2>Copied Components</h2>
        <Home />
        <About />
        <Contact />
      </section>

      <section style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
        <h2>New UI Components</h2>

        <div style={{ marginBottom: '10px' }}>
          <h3>Button</h3>
          <Button label="Click Me" onClick={() => alert('Button Clicked!')} />
          <Button label="Disabled" disabled style={{ marginLeft: '10px' }} />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3>TextField</h3>
          <TextField
            label="Enter text:"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type something..."
          />
          <p>Value: {text}</p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3>Select</h3>
          <Select
            label="Choose an option:"
            value={selection}
            onChange={(e) => setSelection(e.target.value)}
            options={[
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' },
            ]}
          />
          <p>Selected: {selection}</p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3>Rating</h3>
          <Rating value={rating} onChange={setRating} />
          <p>Current Rating: {rating}</p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3>Checkbox</h3>
          <Checkbox
            label="Check me"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <p>Checked: {checked ? 'Yes' : 'No'}</p>
        </div>
      </section>
    </div>
  );
}

export default App;
