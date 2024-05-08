import React from 'react';
import './App.css';
import { H4 } from './components/Labels/Headers';
import { TextInput } from './components/Edits/TextInput';
import Button from './components/UXPin/Button/Button';
import { Model } from './Model';

const testModel = new Model();

function App() {
  return (
    <div className="container">
      <header>
        <p>Hello Merge!</p>
      </header>
      <div>
        <Button label="Button"></Button>
        <H4>Test</H4>
        <TextInput displayName="Test" onChange={testModel.updateFirstName} value={() => testModel.firstName} />
      </div>
    </div>
  );
}

export default App;
