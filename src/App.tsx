import React from 'react';
import './App.css';
import { H4 } from './components/Labels/Headers';
import Button from './components/UXPin/Button/Button';
import { Model } from './Model';
import TextInput from './components/UXPin/Edits/TextInput';
import { observer } from 'mobx-react';
import { zustandModel } from './ZustandModel';
import TextInputNoFunc from './components/UXPin/EditsNoFunc/TextInputNofunc';

const testModel = new Model();

const App = observer(() => {
  console.log('Render app');
  return (
    <div className="container">
      <header></header>
      <div>
        <Button label="Button"></Button>
        <H4>Test</H4>
        <TextInput displayName="First Name" onChange={testModel.updateFirstName} value={() => testModel.firstName} />
        <TextInput displayName="Last Name" onChange={testModel.updateLastName} value={() => testModel.lastName} />
        <TextInputNoFunc displayName="Last Name" onChange={testModel.updateLastName} value={testModel.lastName} />
      </div>
    </div>
  );
});

export default App;
