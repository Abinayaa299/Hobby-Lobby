import React from 'react';
import {Segment,Header,Item,Button,Icon} from 'semantic-ui-react';
import event1 from '../images/dance.jpeg';
import {Link} from 'react-router-dom';

class GroupDetails extends React.Component {
    display = () => {
        console.log(this.props.details.name);
    }
    render() {
        console.log("Username =============== ");
        
        return (

            <Link to = {
                {
                    pathname: "/:category/:" + this.props.details.name,
                    param : "Hello"
                }
            }	
                >
                    
            <Segment.Group  onClick = {this.display.bind(this)}>
                <Segment>
                    <Item.Group>
                        <Item>
                            <Item.Image size = "tiny" circular src = {event1}/>
                        </Item>
                    </Item.Group>
                    <Header as = "h5">{this.props.details.name}</Header>
                </Segment>
                <Segment>
                   {this.props.details.description}
                </Segment>
            </Segment.Group>
            
            </Link>
        );
    }
}
export default GroupDetails;