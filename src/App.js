import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme, alternativeTheme } from './Themes';
import logo from './logo.svg';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: darkTheme,
    };
  }

  render() {
    return (
      <MuiThemeProvider theme={this.state.theme}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to <b>fe-bp</b></h1>
        </header>
        <p className="App-intro">
          #material-ui
        </p>
        <p className="App-intro">
          To get started, edit <code>App.js</code> or <code>App.scss</code> and save
          to reload. <code>npm start</code> will run on two threads.
        </p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.setState({ theme: lightTheme });
          }}
        >
          Light <Icon >highlight</Icon>
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.setState({ theme: darkTheme });
          }}
        >
          Dark <Icon >highlight</Icon>
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            this.setState({ theme: alternativeTheme });
          }}
        >
          Alternative <Icon >highlight</Icon>
        </Button>
      </MuiThemeProvider>
    );
  }
}
