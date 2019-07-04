import React from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import {Container} from 'semantic-ui-react';
import Login from './NavBar/LoginInSignUp/Login';
import SignUp from './NavBar/LoginInSignUp/SignUp';
import CategoriesDisplay from './Categories/CategoriesDisplay';
import CategoriesDetailPage from './Categories/CategoryDetailPage';
import CreateNewCategory from './Categories/NewCategory/CreateNewCategory';
import Home from './Home';
import Navbar from './NavBar/Navbar';
import GroupsDetailDisplay from './Groups/GroupsDetailDisplay';
import MainPage from './MainPage';
class App extends React.Component {
  render() {
      return (
        <div>
          {/* <Navbar /> */}
          <Switch>
            <Route exact path = '/'  component={MainPage}/>
          </Switch>
          <Route path = "/(.+)" render = {() => (
              <div className = "App">
              {/* <NavBar />  */}
                <Container className = "main">
                  <Switch>
                    <Route path = '/signup' component={SignUp}/>
                    <Route path = '/login' component={Login}/>
                    <Route path = '/createCategory' component={CreateNewCategory}/>
                    <Route exact path = '/home' component = {Home} />
                    <Route path = '/:category/:id' component={GroupsDetailDisplay}/>
                    <Route path = '/:id' component={CategoriesDetailPage}/>
                  </Switch>
                </Container>
          </div> 
            )}/>
        </div>
      );
      }
}

export default App;
