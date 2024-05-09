import { action, makeObservable, observable } from 'mobx';

export class Model {
  public firstName = '';

  constructor() {
    makeObservable(this, {
      firstName: observable,
      updateFirstName2: action,
    });
  }

  public updateFirstName2 = (value: string) => {
    console.log('updateFirstName', value);
    this.firstName = value;
  };
}
