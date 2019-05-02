import {
  observable,
  computed,
  action
} from 'mobx';
import calculate from '../lib/calculate';

const {floor} = Math;

export default class Answer {
  @observable age = 22;
  @observable height = 176;
  @observable hairColor = 'Ginger';
  @observable firstWord = '';

  maxAge = 110;
  maxHeight = 310;
  hairColors = [
    'Ginger',
    'Dark',
    'Brunette',
    'Blonde'
  ];

  @computed
  get camels() {
    const normalizedOutput = calculate(
      this.age / this.maxAge,
      this.height / this.maxHeight,
      this.hairColors.length - this.hairColors.indexOf(this.hairColor),
      this.firstWord.length
    );

    return floor(normalizedOutput * 100);
  }

  @action
  setAge = n => { this.age = n; };

  @action
  setHeight = n => { this.height = n; };

  @action
  setHairColor = color => { this.hairColor = color; };

  @action
  setFirstWord = s => { this.firstWord = s; };
};
