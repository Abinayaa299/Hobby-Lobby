import React, { Component } from 'react';
import {Menu, Container, Button, Header} from 'semantic-ui-react';
import {Link, withRouter} from 'react-router-dom';
import SignedOutMenu from './Menu/SignedOutMenu';
import SignedInMenu from './Menu/SignedInMenu';
class Navbar extends Component {
    state = {authenticated : false};
    handleSignIn = () => {
        this.setState({authenticated : true});
    }
    handleSignOut = () => {
        this.setState({authenticated : false});
        this.props.history.push('/')
    }
    valid = (a) => {
        console.log("#$%ˆ&*()*&ˆ%$#@$%ˆ&*()*&ˆ%")
        console.log(a);
    }
    render() {
        const {authenticated} = this.state;
        return (
            <Menu style = {{background : "#E2229C" , height : "80px"}}>
                <Container>
                    <Menu.Item position = "left" as = {Link} to = "/">
                        <Header as = "h1" style = {{color: "white"}}>Hobby Lobby</Header>
                    </Menu.Item>
                    {authenticated ? <SignedInMenu signOut = {this.handleSignOut} /> : <SignedOutMenu signIn = {this.handleSignIn} valid = {this.valid} />}
                </Container>
            </Menu>
        );
    }
}

export default withRouter(Navbar);