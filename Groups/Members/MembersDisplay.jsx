import React from 'react';
import {Header, Grid, Image, Button, Icon} from 'semantic-ui-react';

class MembersDisplay extends React.Component {
    render() {
        console.log("username");
        console.log(this.props.username);
        return (
                <div>  
                    <Header as = "h3" style = {{color : "white"}}>{this.props.username}<br /></Header>
                </div>
        );
    }
}

export default MembersDisplay;