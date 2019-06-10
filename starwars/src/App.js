import React, { Component } from 'react';
import './App.css';
import Chars from './components/StarWarsList';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
  
      })
      .catch(err => {
        throw new Error(err);
      });
  };




  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <ul>
          {this.state.starwarsChars.map(chars => (
            <div className = "char_description">
              <ul>
                <li className = "char_name">{chars.name}</li>
                <li>Height :{chars.height}</li>
                <li>Mass : {chars.mass}</li>
                <li>Hair Color : {chars.hair_color}</li>
                <li>Skin Color : {chars.skin_color}</li>
                <li>Eye Color : {chars.eye_color}</li>
                <li>Birth Year : {chars.birth_year}</li>
                <li>Gender : {chars.gender}</li>
                <li>HomeWorld : {chars.homeworld}</li>
                <li>Films : {chars.films}</li>
                <li>Species : {chars.species}</li>
                <li>Vehicles : {chars.vehicles}</li>
                <li>Starships : {chars.starships}</li>
                <li>Created : {chars.created}</li>
                <li>Edited : {chars.edited}</li>
                <li>URL : {chars.url}</li>
              </ul>
            </div>    
         
          
       ))}
        </ul>
      </div>
    );
  }
}



export default App;
