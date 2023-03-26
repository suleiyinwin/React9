
import './App.css';
import './components/Card'
import './index.css'
import Card from './components/Card';
import List from './components/List'
import TypeMe from './components/TypeMe';

function App() {
  const user={name :"John Doe", job:"Engineer",hobby:"Listen to music"}
  const users=[{name :"John Doe", job:"Engineer",hobby:"Listen to music"},{name :"John Smith", job:"Programming",hobby:"Running"},{name :"John Roe", job:"Farmer",hobby:"Swimming"}]
  return (
    <div className="App">
      <Card user={user} />
      <List users={users}/>
      <TypeMe/>
    </div>
  );
}

export default App;
