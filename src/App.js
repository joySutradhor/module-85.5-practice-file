
import './App.css';
import Container from './components/Container/Container';
import MobileBtn from './components/Mobile/MobileBtn';
import ToDo from './components/To-do/ToDo';



function App() {
  return (
    <div className="App">
    <Container></Container>
    <MobileBtn></MobileBtn>
    <ToDo></ToDo>
    </div>
  );
}

export default App;
