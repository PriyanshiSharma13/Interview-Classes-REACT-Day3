import './App.css';
import Axios from './Components/Axios';
import Fetch from './Components/Fetch';
import UseEffectHook from './Components/UseEffectHook';
import UseMemoHook from './Components/UseMemoHook';
import UseReducerHook from './Components/UseReducerHook';
import UseStateHook from './Components/UseStateHook';

function App() {
  return (
    <div className="App">
      <Axios />
      <Fetch />
      <UseStateHook />
      <UseEffectHook />
      <UseReducerHook />
      <UseMemoHook />
    </div>
  );
}

export default App;
