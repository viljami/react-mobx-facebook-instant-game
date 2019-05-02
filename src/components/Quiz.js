import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Button, Form} from 'react-bulma-components';
import Slider from './Slider';

const {
  Control,
  Field,
  Input,
  Label,
  Select
} = Form;

@inject('answer')
@observer
class Quiz extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  setHairColor = e => {
    this.props.answer.setHairColor(e.target.value);
  };

  setFirstWord = e => {
    this.props.answer.setFirstWord(e.target.value);
  };

  render () {
    const {answer, history} = this.props;

    return (
      <div className="quiz">
        <Field>
          <Label>Age: {answer.age}</Label>
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
          <Label>Height (cm): {answer.height}</Label>
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
          <Label>Hair color: {answer.hairColor}</Label>
          <Control>
            <Select onChange={this.setHairColor} value={answer.hairColor}>
              {
                answer.hairColors.map(a => <option key={a}>{a}</option>)
              }
            </Select>
          </Control>
        </Field>

        <Field>
          <Label>First word: {answer.firstWord}</Label>
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
