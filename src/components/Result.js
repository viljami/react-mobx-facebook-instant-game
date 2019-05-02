import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {inject} from 'mobx-react';
import {
  FacebookProvider,
  ShareButton
} from 'react-facebook';
import {Button} from 'react-bulma-components';

@inject('answer')
class Result extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render () {
    const {answer, history} = this.props;
    console.log(window.location.origin)
    return (
      <div className='quiz'>
        <h1 className='title has-text-centered'>
          <small>Your boyfriend is worth</small><br />
          {answer.camels}<br />
          <small>camels!</small>
        </h1>


        <p className='has-text-centered'>
          <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
            <ShareButton
              className='button is-info'
              href='http://kamelrechner.eu/en/result'
              quote={`My boyfriend is worth ${answer.camels} camels!`}
            >
              Post on Facebook
            </ShareButton>
          </FacebookProvider>
        </p>

        <p>
          <Button onClick={() => history.push('/quiz')} className='is-success'>
            Do again
          </Button>
        </p>
      </div>
    );
  }
}

export default withRouter(Result);
