import React from 'react';
import './App.css';
import { H4 } from './components/Labels/Headers';
import Button from './components/UXPin/Button/Button';
import { Model } from './Model';
import TextInput from './components/UXPin/Edits/TextInput';
import { observer } from 'mobx-react';

const testModel = new Model();

const App = observer(() => {
  console.log('Render app');
  return (
    <div className="container">
      <header>
        <p>Hello {testModel.firstName}!!</p>
      </header>
      <div>
        <Button label="Button"></Button>
        <H4>Test</H4>
        <TextInput displayName="First Name" onChange={testModel.updateFirstName} value={() => testModel.firstName} />
      </div>
    </div>
  );
});

export default App;
