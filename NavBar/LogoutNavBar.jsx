import React, { Component } from 'react';
import {Menu, Container, Button, Header} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
import SignedInMenu from './Menu/SignedInMenu';
class LogoutNavBar extends Component {
    handleSignOut = () => {
        this.props.history.push("/");
    }
    render() {
        return (
            <Menu style = {{background : "#E2229C" , height : "80px"}}>
                <Container>
                    <Menu.Item position = "left" as = {Link} to = "/home">
                        <Header as = "h1" style = {{color: "white"}}>Hobby Lobby</Header>
                    </Menu.Item>
                    <SignedInMenu signOut = {this.handleSignOut} />
                </Container>
            </Menu>
        );
    }
}

export default withRouter(LogoutNavBar);
