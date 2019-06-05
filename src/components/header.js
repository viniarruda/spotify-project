import React from "react";
import { connect } from "react-redux";
import { requestLogout } from "../store/auth/thunks";
import styled from "styled-components";
import LogoImage from "../assets/images/logo.png";
import theme from "./theme";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "./button";

const Nav = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  background: ${theme.colors.background};
  position: ${props => (props.fixed ? "fixed" : "relative")};
`;

const Right = styled.nav`
  flex: 1;
  text-align: right;
`;

const Logo = styled.img`
  margin: 0;
  width: 30px;
`;

const UserIcon = styled(FontAwesomeIcon)`
  color: ${theme.colors.secondary};
  font-size: 14px;
  margin: 0 5px;
`;

const UserName = styled.span`
  color: ${theme.colors.secondary};
  font-size: 12px;
  text-transform: uppercase;
`;

const Header = props => {
  const { auth, spotify, requestLogout } = props;

  const handleLogout = async () => {
    await requestLogout();
  };

  return (
    <Nav>
      <Logo src={LogoImage} alt="Logo Spotify" />
      {auth.logged && (
        <Right>
          {spotify.user && <UserName>{spotify.user.display_name}</UserName>}
          <UserIcon icon="user-circle" />
          <Button primary onClick={() => handleLogout()}>
            Logout
          </Button>
        </Right>
      )}
    </Nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth,
  spotify: state.spotify
});

export default connect(
  mapStateToProps,
  {
    requestLogout
  }
)(Header);
