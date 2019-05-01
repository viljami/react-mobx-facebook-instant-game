import {
  observable,
  computed,
  action
} from 'mobx';

export class Answer {
  @observable title;

  constructor(title) {
    this.title = title;
  }


  @computed
  get getGreeting() {
    return `Hello ${this.title}`;
  }

  @action
  updateTitle(n) {
    this.title = `Camels ${n} required!`;
  }
}

export default Answer
