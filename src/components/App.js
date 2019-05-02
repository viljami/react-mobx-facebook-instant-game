import React, {Component} from 'react';
import {Provider} from 'mobx-react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import {Container, Section, Footer} from 'react-bulma-components';
import {FacebookProvider, Like} from 'react-facebook';
import Answer from '../store/Answer';
import Quiz from './Quiz';
import Result from './Result';
import './App.scss';

const answer = new Answer('camels');

class App extends Component {
  render() {
    return (
      <Provider answer={answer}>
        <div id='app'>
          <Section>
            <Container>
              <h1 className='title'>How many camels for your boyfriend?</h1>

              <Router>
                <Switch>
                    <Route path='/quiz' component={Quiz} state={answer} />
                    <Route path='/result' component={Result} state={answer} />
                    <Redirect to='/quiz' />
                </Switch>
              </Router>
            </Container>
          </Section>

          <Section>
            <Footer>
              <Container>
                <FacebookProvider appId={process.env.REACT_APP_FACEBOOK_APP_ID}>
                  <Like href='http://kamelrechner.eu/en' colorScheme='dark' />
                </FacebookProvider>
              </Container>
            </Footer>
          </Section>
        </div>
      </Provider>
    );
  }
}

export default App;
