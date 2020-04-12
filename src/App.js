import React from 'react';
import './App.css';
import { Component } from 'react';
import PropTypes from 'prop-types'
const Person = ({ img, name, age }) => {
  return (
    <article>
      <img src={img} alt="person" />
      <h4>name : {name}</h4>
      <h4>age : {age}</h4>
    </article>
  )
}
Person.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  age: PropTypes.number,
}
class PersonList extends Component {
  state = {
    people: [
      {
        id: 1,
        img: "https://randomuser.me/api/portraits/thumb/men/75.jpg",
        name: 'Daniel',
        age: 15
      },
      {
        id: 2,
        img: "https://randomuser.me/api/portraits/thumb/men/66.jpg",
        name: 'Grace',
        age: 29
      }
    ]
  }
  render() {
    return (
      <section>
        {
          this.state.people.map(
            (person) => (
              <Person key={person.id} img={person.img} name={person.name} age={person.age}></Person>
            )
          )
        }
      </section>
    )
  }
}



class App extends Component {


  render() {
    return (
      <div>
        <PersonList />
      </div>
    )
  }
}


export default App;
