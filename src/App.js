import React, { Component } from 'react';
import './App.css';
import Button from './common/Button';
import Card from './common/Card';
import {ThemeProvider} from 'styled-components';
import WireTheme from './theme/wire';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={WireTheme}>
      <Card>
          <Button>
              Base button
          </Button>
          <Button primary>
              Primary button
          </Button>
          <Button secondary>
              Secondary Button
          </Button>
        </Card>
      </ThemeProvider>
    );
  }
}

export default App;
