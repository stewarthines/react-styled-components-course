import React, { Component } from 'react';
import './App.css';
import {ThemeProvider} from 'styled-components';
import WireTheme from './theme/wire';
import Button from './common/Button';
import Card from './common/Card';
import Layout from './common/Layout';



class App extends Component {
  render() {
    return (
      <ThemeProvider theme={WireTheme}>
      <Layout>
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
        </Layout>
      </ThemeProvider>
    );
  }
}

export default App;
