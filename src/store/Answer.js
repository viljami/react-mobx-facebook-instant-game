import {
  observable,
  computed,
  action
} from 'mobx';
import calculate from '../lib/calculate';

const {floor} = Math;

export class Answer {
  @observable age;
  @observable height;

  maxAge = 110;
  maxHeight = 310;

  constructor() {
    this.age = 22;
    this.height = 176;
  }

  @computed
  get camels() {
    const normalizedOutput = calculate(
      this.age / this.maxAge,
      this.height / this.maxHeight
    );
    console.log(normalizedOutput);
    return floor(normalizedOutput * 100);
  }

  @action.bound
  setAge(n) { this.age = n; }

  @action.bound
  setHeight(n) { this.height = n; }
}

export default Answer
