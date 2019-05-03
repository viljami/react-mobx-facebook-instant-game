import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Button, Form} from 'react-bulma-components';
import {Trans, withTranslation} from 'react-i18next';
import Slider from './Slider';

const {
  Control,
  Field,
  Input,
  Label,
  Select
} = Form;

@withTranslation()
@inject('answer')
@observer
class Quiz extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    t: PropTypes.func.isRequired
  };

  setHairColor = e => {
    this.props.answer.setHairColor(e.target.value);
  };

  setFirstWord = e => {
    this.props.answer.setFirstWord(e.target.value);
  };

  render () {
    const {answer, history, t} = this.props;

    return (
      <div className="quiz">
        <Field>
          <Label><Trans i18nKey='age'>Age</Trans>: {answer.age}</Label>
          <Control>
            <Slider
              min={0}
              max={answer.maxAge}
              value={answer.age}
              onChange={answer.setAge}
            />
          </Control>
        </Field>

        <Field>
          <Label><Trans i18nKey='height'>Height</Trans> (cm): {answer.height}</Label>
          <Control>
            <Slider
              min={0}
              max={answer.maxHeight}
              value={answer.height}
              onChange={answer.setHeight}
            />
          </Control>
        </Field>

        <Field>
          <Label>
            <Trans i18nKey='hairColor'>
              Hair color
            </Trans>: <Trans i18nKey={answer.hairColor.toLowerCase()}>
              {answer.hairColor}
            </Trans>
          </Label>
          <Control>
            <Select onChange={this.setHairColor} value={answer.hairColor}>
              {
                answer.hairColors.map(a => (
                  <option key={a}>
                    {t(a.toLowerCase())}
                  </option>
                ))
              }
            </Select>
          </Control>
        </Field>

        <Field>
          <Label>
            <Trans i18nKey='firstWord'>
              First word
            </Trans>: {answer.firstWord}
          </Label>
          <Control>
            <Input
              type='text'
              value={answer.firstWord}
              onChange={this.setFirstWord}
            />
          </Control>
        </Field>

        <Button
          color='info'
          onClick={() => history.push('/result')}
        >
          Calculate
        </Button>
      </div>
    );
  }
}

export default withRouter(Quiz);
