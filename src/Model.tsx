import { action, makeObservable, observable } from 'mobx';

export class Model {
  public firstName = '';
  public lastName = '';

  constructor() {
    makeObservable(this, {
      firstName: observable,
      lastName: observable,
      updateFirstName: action,
      updateLastName: action,
    });
  }

  public updateFirstName = (value: string) => {
    console.log('updateFirstName', value);
    this.firstName = value;
  };
  public updateLastName = (value: string) => {
    console.log('updateLastName', value);
    this.lastName = value;
  };
}
