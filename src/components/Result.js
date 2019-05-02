import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {inject} from 'mobx-react';

@inject('answer')
class Result extends Component {
  render () {
    const {answer, history} = this.props;

    return (
      <div className="quiz">
        <h1>Result: {answer.camels}</h1>
        <button onClick={() => history.push('/quiz')}>Go back</button>
      </div>
    );
  }
}

export default withRouter(Result);
