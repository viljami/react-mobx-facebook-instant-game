import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {inject} from "mobx-react"

@inject('answer')
class Quiz extends Component {
  render () {
    const {answer, history} = this.props;

    return (
      <div className="quiz">
        <h1>Quiz: {answer.title}</h1>
        <button onClick={() => history.push('/result')}>Submit</button>
      </div>
    );
  }
}

export default withRouter(Quiz);
