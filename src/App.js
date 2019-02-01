import React, { Component } from 'react';
import * as eva from 'eva-icons';
import './App.css';
import {ThemeProvider} from 'styled-components';
import EvaIcon from './common/EvaIcons';
import BlueTheme from './theme/BlueTheme';
import OrangeTheme from './theme/OrangeTheme';
import Button from './common/Button';
import Card from './common/Card';
import Container from './common/LayoutContainer';
import Row from './common/LayoutRow';
import Column from './common/LayoutColumn';

class App extends Component {
  state = {
    theme: BlueTheme
  };
  handleToggleTheme = () => {
    console.log(this.state);
    this.setState({
      theme: this.state.theme.id === 'blue' ?  OrangeTheme : BlueTheme
    });
    
  };
  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <Container>
          <Row alignCenter colTwo>
            <Column>
              <h1>Styled Components Course</h1>
            </Column>
            <Column justifyEnd>
              <Button onClick={this.handleToggleTheme}>
                <EvaIcon use="color-palette-outline" />&nbsp;Swap Theme
              </Button>
            </Column>
          </Row>
          <Row>
            <Card>
              <Button>
                <EvaIcon use="alert-triangle-outline" />&nbsp;Base Button
              </Button>
              <Button primary>
                  Primary button
              </Button>
              <Button secondary>
              <EvaIcon use="alert-triangle-outline" />&nbsp;Secondary Button
              </Button>
            </Card>        
          </Row>
          <Row colTwo>
            <Card>
              <h1>One Card</h1>
            </Card>
            <Card>
              <h1>Two Card</h1>
            </Card>
          </Row>
          <Row colThree>
            <Card>
              <h1>One Card</h1>
            </Card>
            <Card>
              <h1>Two Card</h1>
            </Card>
            <Card>
              <h1>Three Card</h1>
            </Card>
          </Row>
        </Container>


      </ThemeProvider>
    );
  }
}

export default App;
