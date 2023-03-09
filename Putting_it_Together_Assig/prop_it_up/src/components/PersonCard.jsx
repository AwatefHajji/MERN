import React, { Component } from 'react'

class PersonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {age: this.props.personAge}}
  increaseByOne() {
      this.setState({
          age: this.state.age + 1})
  }
  render() {
    return (
    <>
    <fieldset>
      <div>{this.props.personFirst_name} Card</div>
      {/* <h1>{JSON.stringify(this.props.person)}</h1> */}
      {/* {
      this.props.person.map((person) => (person.firt_name + ',' + person.last_name + ',' + person.age+ ',' + person.Hair_Color))
      } */}
      <h1>{this.props.personLast_name},{this.props.personFirst_name}</h1>
      <p>Age: {this.state.age}</p>
      <p>Hair Color: {this.props.personHaircolor}</p>
      <button onClick={() => { this.increaseByOne() }}>Birthday Button {this.props.personLast_name} {this.props.personFirst_name} </button>



      </fieldset>
</>
    )
  }
}
export default PersonCard
