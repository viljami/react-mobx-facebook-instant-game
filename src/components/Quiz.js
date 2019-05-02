import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {inject, observer} from 'mobx-react';
import {Button, Form} from 'react-bulma-components';
import Slider from './Slider';

const {
  Control,
  Field,
  Label
} = Form;


@inject('answer')
@observer
class Quiz extends Component {
  render () {
    const {answer, history} = this.props;

    return (
      <div className="quiz">
        <Field>
          <Label>Age: {answer.age}</Label>
          <Control>
            <Slider min={0} max={100} value={answer.age} onChange={answer.setAge}/>
          </Control>
        </Field>

        <Field>
          <Label>Height (cm): {answer.height}</Label>
          <Control>
            <Slider min={0} max={300} value={answer.height} onChange={answer.setHeight}/>
          </Control>
        </Field>

        <Button color='info' onClick={() => history.push('/result')}>Calculate</Button>
      </div>
    );
  }
}

export default withRouter(Quiz);
