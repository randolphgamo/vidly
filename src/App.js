import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import {ToastContainer} from 'react-toastify';

import Movies from "./components/movies";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import MoviesForm from "./components/moviesForm";
import LoginForm from "./components/common/loginForm";
import RegisterForm from "./components/common/registerForm";
import newMovieForm from "./components/common/newMovieForm";
import Logout from "./components/common/logout";
import auth from "./services/authService";


import 'react-toastify/dist/ReactToastify.css';



import "./App.css";


class App extends Component {
  state = {};
  componentDidMount() {

    const user = auth.getCurrentUser();
    this.setState({user});
    
  }

  render() {
    return (
      <React.Fragment>
        <ToastContainer />

             <NavBar user= {this.state.user} />

           <main className="container">
             <Switch>
              <Route path="/movies/new"  component={newMovieForm}/>
               <Route path="/movies/:id"  component={MoviesForm}/>
               <Route path="/register" component={RegisterForm} />
               <Route path="/login" component={LoginForm} />
               <Route path="/logout" component={Logout} />
               <Route path="/customers"  component={Customers}/>
               <Route path="/rentals" component={Rentals}/>
               <Route path="/movies" component={Movies}/>
               <Route path="/not-found" component={NotFound} />
               <Route path="/" exact component ={Movies}/>
               <Redirect to="/not-found" />
             </Switch>
      
        
      </main>
      </React.Fragment>
    );
  }
}

export default App;
