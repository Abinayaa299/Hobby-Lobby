import React from 'react';
import './App.css';
import {Header, Button} from 'semantic-ui-react';
import NavBar from './NavBar/Navbar';
import {Link} from 'react-router-dom';
class MainPage extends React.Component {
    render() {
        return (
            <div className = "background">
                <NavBar />
                <div className = "quote">
                    <Header as = "h1" style = {{color: "black"}} className="ui massive label"> A hobby a day keeps the doldrums away.
                        <br /><br />Login to explore more!!<br /><br />
                        <Button primary as = {Link} to = "/login"><i class="angle right icon"></i></Button>
                    </Header>
                    
                </div>
            </div>
        );
    }
}

export default MainPage;