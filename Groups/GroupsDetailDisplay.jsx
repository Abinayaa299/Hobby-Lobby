import React from 'react';
import {Header, Grid, Image, Button, Icon} from 'semantic-ui-react';
import firebase from '../Firebase';
import photo from '../images/dance.jpeg';
import MembersDisplay from '../Groups/Members/MembersDisplay';
import { async } from 'q';
import LogoutNavBar from '../NavBar/LogoutNavBar';
class GroupsDetailDisplay extends React.Component {

    constructor(props) {
        super(props);
        var path = this.props.location.pathname;
        var str = path.substring(12);
        this.state = {name: str, categorySelected: {}, mem: [], groupName : "", existingUser : false};
        console.log(str);
        }
        dataBase = async() => {
            console.log("aaaa");
            var categorySelected = this.state.name;
            var x = {};
            var groupName = "";
            var username = [];
            var existingUser = false;
              var  query = firebase.database().ref().child("groups");
              await query.once("value")
                .then(function(snapshot) {
                    console.log("**&*&*&*&*");
                    console.log(snapshot);
                  snapshot.forEach(function(childSnapshot) {
                    var key = childSnapshot.key;
                    var group = childSnapshot.val().name;
                    //console.log(key);
                    if (group === categorySelected) {
                        var description = childSnapshot.val().description;
                        x = {"name" : group, "description": description, "photo" : childSnapshot.val().photo};
                        var mem = childSnapshot.val().members;
                        console.log("Members:");
                        console.log(mem);
                        groupName = key;
                        for(var m in mem) {
                            if( mem[m].username == localStorage.getItem("uname")) {
                                existingUser = true;
                            }
                            username.push(mem[m].username);
                        }
                        
                    }
                });
              });
              console.log(x);
              this.setState({categorySelected : x, mem : username, groupName : groupName, existingUser});
              this.displayMembers();
            }
    
            displayMembers() {
                var mem = this.state.mem;
                //console.log("hh");
                for(var i = 0; i < mem.length; i++) {
                    console.log(mem[i]);
                }
            }
            addMember = async() => {
                console.log(localStorage.getItem("uname"));
                var  query1 = firebase.database().ref("groups").child(this.state.groupName).child("members");
                query1.push({username:localStorage.getItem("uname")});
                this.forceUpdate();
            }
            componentWillMount() {
                this.dataBase();
            }

    render() {
        const data = this.state.mem.map( (d) => {
            {this.dataBase.bind(this)}
            console.log(d);
            return <MembersDisplay username = {d}/>;
          });

        return (
            <div>
                <LogoutNavBar />
            <Grid>
                    <Grid.Row>
                        
                    </Grid.Row>
                    <Grid.Row><Header as = "h1" floated = "center" style = {{color: "white" }}>{this.state.name}</Header></Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={13}>
                            <Header as = "h3" floated = "left" style = {{color: "white" }}>{this.state.categorySelected.description}</Header>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Image src = {photo} alt = "image" width = "200" height = "200" floated = "right"/>
                            {!this.state.existingUser && 
                            <Button primary onClick = {this.addMember}><i class="disabled users icon"></i>Join group</Button>
                            }
                            {/* { this.state.existingUser &&
                            <Button primary negative onClick = {this.addMember}><i class="disabled users icon"></i>Leave group</Button>
                            } */}
                            {/* <Button primary><i class="disabled users icon"></i>Join group</Button> */}
                        </Grid.Column>
                        </Grid.Row>
                        
                        <Grid.Row>
                        
                    </Grid.Row>
                    <div position = "left">
                <Header as = "h1" style = {{color : "white"}}>Members</Header>
                        {data}
                </div>
                </Grid>
                
                
            </div>
        );
    }
}

export default GroupsDetailDisplay;