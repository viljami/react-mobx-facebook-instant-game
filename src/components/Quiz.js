import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {inject} from 'mobx-react';
import {Button} from 'react-bulma-components';

@inject('answer')
class Quiz extends Component {
  render () {
    const {answer, history} = this.props;

    return (
      <div className="quiz">
        <h1>Quiz: {answer.title}</h1>
        <Button color='info' onClick={() => history.push('/result')}>Submit</Button>
      </div>
    );
  }
}

export default withRouter(Quiz);
