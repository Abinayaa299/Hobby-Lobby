import React from 'react';
import HobbyCard from './HobbyCard';
import './CategoriesDisplay.css';
import {Link} from 'react-router-dom';
import {Header, Button, Grid, Icon} from 'semantic-ui-react';
import firebase from '../Firebase';
import NavBar from '../NavBar/Navbar';
import LogoutNavBar from '../NavBar/LogoutNavBar';

class CategoriesDisplay extends React.Component {

    selectedCategory = () => {
        console.log("Hello");
    }
    state = { cat : []};
  componentDidMount() {
    this.dataBase();
  }

    dataBase = async() => {
      console.log("aaaa");
        var cats = [];
        console.log("Hello");
        var  query = firebase.database().ref("categories").orderByKey();
        await query.once("value")
          .then(function(snapshot) {
            snapshot.forEach(function(childSnapshot) {
              var key = childSnapshot.key;
              var childData = childSnapshot.val().name;
              var photo = childSnapshot.val().photo;
              console.log(key);
              console.log(childData);
              var x = {"name" : childData, "photo": photo};
              cats.push(x);
          });
        });
        console.log(this.state);
        this.setState({

          cat : cats
        });
        console.log("*****");
    console.log(cats);
    console.log("*****");
      }

    render() {
        const data = this.state.cat.map( (d) => {
          {this.dataBase.bind(this)}
          console.log("1234");
          console.log(d.photo);
          return <HobbyCard name = {d.name} key = {d.name} photo = {d.photo}/>;
        });
        return(
            <div style = {{backgroundColor: "black"}}>
              <LogoutNavBar />
                <Header as="h2" floated = "left">
                    Categories
                </Header><br /><br /><br /><br />
                <div className = "image-list">{data}</div><br /><br /><br /><br />
                
                <Grid>
    <Grid.Column textAlign="center">
    <Button position = "center" primary as = {Link} to = "/createCategory"><Icon name = 'add'/>Create new Category</Button>
    <Button onClick = {this.dataBase.bind(this)}>Refresh</Button>
    </Grid.Column>
  </Grid>
            </div>
        );
    }
}
export default CategoriesDisplay;