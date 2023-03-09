
import './App.css';
// import PersonCard from './components/PersonCard';
import PersonCardFunction from './components/PersonCardFunction';
const persons = [{
  "first_name": "Jane",
  "last_name": "Doe",
  "age":45,
  "Hair_Color": "Black"

},
{"first_name":"John",
 "last_name":"Smith",
 "age":88,
 "Hair_Color":"Brown"},
{"first_name":"Millard",
 "last_name":"Fillmore",
 "age":50,
 "Hair_Color":"Brown"},
{
  "first_name": "Maria",
  "last_name": "Smith",
  "age":62,
  "Hair_Color": "Brown"}]
function App() {
  return (
    <div className="App">
{/* {persons.map(person => {return <PersonCard personFirst_name={person.first_name} personLast_name={person.last_name} personAge={person.age} personHaircolor={person.Hair_Color}/>})} */}
{persons.map((person) => {return <PersonCardFunction personFirst_name={person.first_name} personLast_name={person.last_name} personAge={person.age} personHaircolor={person.Hair_Color}/>})}
    </div>
  );
}

export default App;
