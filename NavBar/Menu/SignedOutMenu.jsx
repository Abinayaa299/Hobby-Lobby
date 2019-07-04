import React from 'react';
import {Menu, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
class SignedOutMenu extends React.Component{
    render() {
        console.log(this.props.valid("HYYYY"));
        return (
            <Menu.Item position = "right">
                {/* <Button onClick = {this.props.signIn} positive inverted content = "Login"/> */}
                <Button primary as = {Link} to = "/login" style = {{marginRight : '2.5px'}} >Login</Button>
                <Button primary as = {Link} to = "/signup" content = "Sign Up" style = {{marginLeft : '2.5px'}}/>
            </Menu.Item>
        );
    }
}

export default SignedOutMenu;