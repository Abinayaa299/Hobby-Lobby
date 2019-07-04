import React from 'react';
import {Dropdown, Menu, Button} from 'semantic-ui-react';
import {Link} from 'react-router-dom/Link';
const SignedInMenu = ({signOut}) => {
    return (
        <Menu.Item position = "right">
            <Button onClick = {signOut} content = "Logout" />
        </Menu.Item>
        );
}

export default SignedInMenu;