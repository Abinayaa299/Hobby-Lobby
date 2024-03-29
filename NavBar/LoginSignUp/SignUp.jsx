import React from 'react';
import './login.css';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';
import {Link} from 'react-router-dom';
// import Login from './Login';
 import firebase from '../../Firebase';
import CategoriesDisplay from '../../Categories/CategoriesDisplay';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password1: '',
 password2 : '',
 username: '',
 place: ''
    };
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
console.log(this.state);
  }
  signup(e){
 if(this.state.password1 === this.state.password2)
 {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password1).then((u)=>{
      this.props.history.push("/home");
    }).catch((error) => {
        console.log(error.message);
alert(error.message);
      })
 }
 else
 alert("Passwords do not match");
  };
  
  dataBase = async() => {
 this.signup(this);
  
    var users = [];
    console.log("Hello");
    var  query1 = firebase.database().ref("users");
    query1.push({username : this.state.username, email : this.state.email, place : this.state.place, password: this.state.password1});

  }
  
    render() {
        return (
           <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450, backgroundColor:"white" }} >
                    <Header as='h2' color='teal' textAlign='center'>
                        Create new account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>

<Form.Input fluid icon='user' iconPosition='left' placeholder='Username' 
value={this.state.username} onChange={this.handleChange}
type="name" name="username" class="form-control" id="InputUsername" />

                    
  <Form.Input fluid icon='mail' iconPosition='left' placeholder='E-mail' 
  value={this.state.email} onChange={this.handleChange}
type="email" name="email" class="form-control" id="InputEmail" />

                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
type='password'
value={this.state.password1}
onChange={this.handleChange}
name="password1" 
class="form-control"
id="InputPassword1"
                        />
                    <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Confirm Password'
                            type='password'
                            value={this.state.password2}
                            onChange={this.handleChange}
                            name="password2" 
                            class="form-control"
                            id="InputPassword2"
                        />

<Form.Input fluid icon='map marker alternate' iconPosition='left' placeholder='Place' 
value={this.state.place} onChange={this.handleChange}
type="name" name="place" class="form-control" id="InputPlace"/>
                        <Button color='teal' fluid size='large' 
                        onClick={this.dataBase.bind(this)}
                         class="btn btn-primary">
                            Sign Up
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        Already have an account ?  <Link to = "/login">Login</Link>
                    </Message>
                </Grid.Column>
        </Grid>
        );
    }
}

export default SignUp;
