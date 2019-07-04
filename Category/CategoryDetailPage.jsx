import React  from 'react';
import {Link} from 'react-router-dom';
import {Header,Image, Grid, Button} from 'semantic-ui-react';
import photo from '../images/dance.jpeg';
import GroupsAvailable from '../Groups/GroupsAvailable';
import firebase from '../Firebase';
import LogoutNavBar from '../NavBar/LogoutNavBar';

class CategoryDetailPage extends React.Component {
    constructor(props) {
    super(props);
    var path = this.props.location.pathname;
    var str = path.substring(2);
    this.state = {name: str, categorySelected: {}};
    console.log(str);
    }

    dataBase = async() => {
        console.log("aaaa");
        var categorySelected = this.state.name;
        var x = {};
          var  query = firebase.database().ref().child("categories");
          await query.once("value")
            .then(function(snapshot) {
                console.log("**&*&*&*&*");
                console.log(snapshot);
              snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var category = childSnapshot.val().name;
                if (category === categorySelected) {
                    var description = childSnapshot.val().description;
                    //console.log(childSnapshot.val().photo);
                    x = {"name" : category, "description": description, "photo" : childSnapshot.val().photo};
                }
            });
          });
          console.log(x);
          this.setState({categorySelected : x});
        }

        componentWillMount() {
            this.dataBase();
        }
    render() {
       
        return (
            <div>
                <LogoutNavBar />
                <Grid>
                    <Grid.Row></Grid.Row>
                    <Grid.Row><Header as = "h1" floated = "center" style = {{color: "white" }}>{this.state.name}</Header></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={13}>
                            <Header as = "h3" floated = "left" style = {{color: "white" }}>{this.state.categorySelected.description}</Header>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image src = {this.state.categorySelected.photo} alt = "image" width = "200" height = "200" floated = "right"/>
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        {/* <Button onClick = {this.dataBase.bind(this)}>Refresh</Button> */}
                            <GroupsAvailable name = {this.state.name}/>
                    </Grid.Row>
                </Grid>
                
                
                
                
            </div>
        );
    }
}

export default CategoryDetailPage;