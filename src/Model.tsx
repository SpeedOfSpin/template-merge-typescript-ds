import { action, makeObservable, observable } from 'mobx';

export class Model {
  public firstName = '';

  constructor() {
    makeObservable(this, {
      firstName: observable,
      updateFirstName: action,
    });
  }

  public updateFirstName = (value: string) => {
    console.log('updateFirstName', value);
    this.firstName = value;
  };
}
