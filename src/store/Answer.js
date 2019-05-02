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
    const l = this.hairColors.length;

    const normalizedOutput = calculate(
      this.age / this.maxAge,
      this.height / this.maxHeight,
      (l - this.hairColors.indexOf(this.hairColor)) / l,
      this.firstWord.length > 4 ? 0.7 : 0.3
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
