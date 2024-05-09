import React from 'react';
import './App.css';
import { H4 } from './components/Labels/Headers';
import Button from './components/UXPin/Button/Button';
import { Model } from './Model';
import TextInput from './components/UXPin/Edits/TextInput';
import { observer } from 'mobx-react';
import { zustandModel } from './ZustandModel';

const testModel = new Model();

const App = () => {
  const firstName = zustandModel((state: any) => state.firstName);
  const updateFirstName = zustandModel((state: any) => state.updateFirstName);
  console.log('Render app');
  return (
    <div className="container">
      <header>
        <p>Hello {firstName}!!</p>
      </header>
      <div>
        <Button label="Button"></Button>
        <H4>Test</H4>
        <TextInput displayName="First Name" onChange={updateFirstName} value={firstName} />
      </div>
    </div>
  );
};

export default App;
