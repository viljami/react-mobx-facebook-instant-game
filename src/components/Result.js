import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import {inject} from 'mobx-react';
import {FacebookProvider, ShareButton} from 'react-facebook';
import {Button} from 'react-bulma-components';
import {Trans} from 'react-i18next';

@inject('answer')
class Result extends Component {
  static propTypes = {
    answer: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render () {
    const {answer, history} = this.props;

    return (
      <div className='quiz'>
        <h1 className='title has-text-centered'>
          <small>
            <Trans i18nKey='worth'>Your boyfriend is worth</Trans>
          </small><br />
          {answer.camels}<br />
          <small>
            <Trans i18nKey='camels'>camels</Trans>!
          </small>
        </h1>


        <p className='has-text-centered'>
          <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
            {/*
              Attribute href should come from
              window.location.href or .origin,
              but it does not render the buttons
              on localhost. So...
            */}
            <ShareButton
              className='button is-info'
              href='http://kamelrechner.eu/en/result'
              quote={`My boyfriend is worth ${answer.camels} camels!`}
            >
              <Trans i18nKey='postOnFacebook'>Post on Facebook</Trans>
            </ShareButton>
          </FacebookProvider>
        </p>

        <p>
          <Button onClick={() => history.push('/quiz')} className='is-success'>
            <Trans i18nKey='doAgain'>Do again</Trans>
          </Button>
        </p>
      </div>
    );
  }
}

export default withRouter(Result);
