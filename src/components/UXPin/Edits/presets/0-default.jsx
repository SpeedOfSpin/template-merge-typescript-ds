import * as React from 'react';
import TextInput from '../TextInput';
import { Model } from '../../../../Model';

const testModel = new Model();

export default <TextInput displayName="Test" onChange={testModel.updateFirstName} value={() => testModel.firstName} />;
