import React from 'react';
import {Header} from 'semantic-ui-react';
import firebase from '../Firebase';
import GroupDetails from './GroupsDetails';
class GroupsAvailable extends React.Component {

    constructor(props) {
        super(props);
        this.state = {group : [], name :this.props.name};
        // console.log("12345678");
        // console.log(this.props.name);

    }

    dataBase = async() => {
        var group = [];
        var name = this.state.name;
          var  query = firebase.database().ref().child("groups");
          await query.once("value")
            .then(function(snapshot) {
              // console.log("**###**");
              // console.log(snapshot.val());
              snapshot.forEach(function(childSnapshot) {
                //console.log(childSnapshot);
                var key = childSnapshot.key;
                var childData = childSnapshot.val();
                if (childData.category == name) {
                  var groupDetails = {name: childData.name, category: childData.category, description: childData.Description};
                  group.push(groupDetails);
                }
                
            });
          });
          this.setState({group : group});
        }

    componentWillMount() {
        this.dataBase();
    }

    render() {
        const data = this.state.group.map( (d) => {
            {this.dataBase.bind(this)}
            console.log(d.name);
            return <GroupDetails details = {d}/>;
          });
        return (
            <div>
                <Header as = "h1" style = {{color: "white" }}>Groups Available: </Header>
                {data}
            </div>
        );
    }
}

export default GroupsAvailable;