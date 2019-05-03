import {observable, action} from 'mobx';

export default class Locale {
  @observable lang = 'en';

  @action
  setLang = s => { this.lang = s; };
}
