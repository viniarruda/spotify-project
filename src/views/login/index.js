import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { requestLogin } from "../../store/auth/thunks";

import Container from "./containers/container";
import Button from "../../components/button";
import SpotifyLogo from "../../assets/images/spotify_login.png";
import Logo from "./components/logo";

class Login extends Component {
  handleLogin = async () => {
    await this.props.requestLogin();
  };

  render() {
    const { from } = this.props.location.state || {
      from: { pathname: "/home" }
    };

    if (this.props.auth.logged) {
      return <Redirect to={from} />;
    }

    return (
      <Container>
        <Logo src={SpotifyLogo} alt="Logo Spotify" />
        <Button onClick={this.handleLogin}>Login</Button>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {
    requestLogin
  }
)(Login);
