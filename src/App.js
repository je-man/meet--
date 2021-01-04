import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';


class App extends Component {
  state = {
    events: [],
    locations: []
  }


  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted) {
        this.setState({ events, locations: extractLocations(events) });
      }
    });
  }

  getData = ()=>{
    const {locations, events} = this.state;
    const data = locations.map((location)=>{
      const number = events.filter((event)=>
        event.location === location).length
        const city = location.split(' ').shift()
        return{city, number};
    })
    return data;
  }

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} />
        <EventList events={this.state.events} />
      </div>
    );
  }  
}

// class App extends Component {
//   state = {
//     events: [],
//     locations: []
//   }

//   render() {
//     return (
//       <div className="App">
//         <CitySearch locations={this.state.locations} />
//         <EventList events={this.state.events} />
//       </div>
//     );
//   }
// }

export default App;
