
import './App.css';
import './components/Card'
import './index.css'
import './styles/form.css'
import Card from './components/Card';
import List from './components/List'
import TypeMe from './components/TypeMe';
import MyForm from './components/MyForm';

function App() {
  const user={name :"John Doe", job:"Engineer",hobby:"Listen to music"}
  const users=[{name :"John Doe", job:"Engineer",hobby:"Listen to music"},{name :"John Smith", job:"Programming",hobby:"Running"},{name :"John Roe", job:"Farmer",hobby:"Swimming"}]
  return (
    <div className="App">
      <Card user={user} />
      <List users={users}/>
      <TypeMe/>
      <MyForm/>
    </div>
  );
}

export default App;
