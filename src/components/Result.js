import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {inject} from 'mobx-react';

@inject('answer')
class Result extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

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
