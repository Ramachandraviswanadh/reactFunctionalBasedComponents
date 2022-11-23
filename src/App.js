
import './App.css';
import ChildComponent from './component/ChildComponent'
import Count from './component/Count';

function App() {
  return (
    <div className="App">
     <ChildComponent id={1}/>
     <ChildComponent id={2}/>
     <ChildComponent id={3}/>
     <ChildComponent id={4}/>
     <ChildComponent id={5}/>
     <Count/>
    </div>
  );
}

export default App;
