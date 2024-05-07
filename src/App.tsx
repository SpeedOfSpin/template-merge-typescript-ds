import React from 'react';
import './App.css';
import { H4 } from './components/Labels/Headers';
import { Grid } from './components/Grid/Grid';
import { TextInput } from './components/Edits/TextInput';
import Button from './components/UXPin/Button/Button';

function App() {
  return (
    <div className="container">
      <header>
        <p>Hello Merge!</p>
      </header>
      <div>
        <Button label="Button"></Button>
        <H4>Test</H4>
        <TextInput displayName="Test" value={() => 3} />
      </div>
    </div>
  );
}

export default App;
