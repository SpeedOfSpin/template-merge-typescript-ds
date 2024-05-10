import * as React from 'react';
import TextInput from '../TextInputNofunc';
import { Model } from '../../../../Model';

const testModel = new Model();
testModel.firstName = 'Test';

export default <TextInput displayName="Test" onChange={testModel.updateFirstName} value={testModel.firstName} />;
