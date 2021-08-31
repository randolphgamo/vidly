import React, { Component } from 'react';
import Form from './form';
import Joi from 'joi-browser';
import {saveMovie} from '../../services/movieService';

class NewMovieForm extends Form {
    state = { 
        data: {title: '', genre: '', numberInStock: '', dailyRentalRate:''},
        errors: {}
     }


     schema = {
        
        title: Joi.string().required().label("Title"),
        genre: Joi.string().required().label("Genre"),
        numberInStock: Joi.string().required().label("Number in Stock"),
        dailyRentalRate: Joi.string().required().label("Rate")
    };

    doSubmit = () => {
        // Call the server
        //save changes
        //redirect user to a different page
        const movie = {...this.state.data};

        console.log(this.state.data);
        console.log(movie);

        saveMovie(movie);

       this.props.history.replace('/movies');
     
           }


    render() { 
        return ( 
            <div><h1>Movie Form</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput('title', 'Title')}
                    {this.renderInput('genre', 'Genre')}
                    {this.renderInput('numberInStock', 'Number in Stock')}
                    {this.renderInput('dailyRentalRate', 'Rate')}               
                    {this.renderButton("Save")}               
                    
                </form>
            </div>
         );
    }
}
 
export default NewMovieForm;