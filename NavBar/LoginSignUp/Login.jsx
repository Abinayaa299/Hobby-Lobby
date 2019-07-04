import React from 'react';
import './login.css';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react'
import {Link} from 'react-router-dom';
import firebase from '../../Firebase';
import CategoriesDisplay from '../../Categories/CategoriesDisplay';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
      handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
      }
      
      login(e) {
        e.preventDefault();
    console.log("hi");
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log("Correct");
            this.dataBase();
            this.props.history.push('/home');
        }).catch((error) => {
            console.log(error);
            alert(error.message);
          });
      }

      dataBase = async() => {
        console.log("HiiiHello");
        var email = this.state.email;
        console.log("***&&&***");
          var  query = firebase.database().ref().child("users");
          await query.once("value")
            .then(function(snapshot) {
                console.log(snapshot);
              snapshot.forEach(function(childSnapshot) {
                var key = childSnapshot.key;
                var emailDB = childSnapshot.val().email;
                //console.log(email);
                if(emailDB == email) {
                    var group = childSnapshot.val().username;
                    localStorage.setItem("uname",group);
                    console.log(group)
                }
                
            });
          });
        }

        // componentWillMount() {
        //     this.dataBase();
        // }

    render() {
        return (
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450, backgroundColor:"white" }} >
                    <Header as='h2' color='teal' textAlign='center'>
                        Login to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                        <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail'
                        value={this.state.email} onChange={this.handleChange}
                        type="email" name="email" class="form-control" id="InputEmail"
                        />
                        <Form.Input
                            fluid
                            icon='lock'
                            iconPosition='left'
                            placeholder='Password'
                            type='password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            name="password" 
                            class="form-control"
                            id="InputPassword"
                        />
                        <Button color='teal' fluid size='large' onClick={this.login}>
                            Login
                        </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <Link to = "/signup"> Sign Up</Link>
                    </Message>
                </Grid.Column>
        </Grid>
        );
    }
}

export default Login;