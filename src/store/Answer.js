import {
  observable,
  computed,
  action
} from 'mobx';

export class Answer {
  @observable age;
  @observable height;

  constructor() {
    this.age = 22;
    this.height = 176;
  }

  @computed
  get camels() {
    return this.age * this.height;
  }

  @action.bound
  setAge(n) { this.age = n; }

  @action.bound
  setHeight(n) { this.height = n; }
}

export default Answer
