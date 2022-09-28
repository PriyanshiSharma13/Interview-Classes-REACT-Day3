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
      <h1>Interview-Classes-REACT-Day3</h1>
      <h2>Q1. Difference between Axios and fetch.</h2>
      <div className='one'>
        <Axios />
        <br />
        <Fetch />
      </div>
      <hr />
      <h2>Q2. What is useState Hook ?(Implementation)</h2>
      <div>
        <h3>UseStateHook</h3>
        <p>The useState() is a Hook that allows you to have state variables in functional components . so basically useState is the ability to encapsulate local state in a functional component. React has two types of components, one is class components which are ES6 classes that extend from React and the other is functional components. Class components a Component and can have state and lifecycle methods: class Message extends React. The  useState hook is a special function that takes the initial state as an argument and returns an array of two entries.  UseState encapsulate only singular value from the state, for multiple state need to have useState calls.</p>
        <p>Syntax: The first element is the initial state and the second one is a function that is used for updating the state.</p>
        <pre>const [state, setState] = useState(initialstate)</pre>
      </div>
      <UseStateHook />
      <hr />
      <h2>Q3. What is useEffect Hook ?(Implementation)</h2>
      <div>
        <h3>UseEffectHook</h3>
        <p>By using this Hook, you tell React that your component needs to do something after render. React will remember the function you passed (we’ll refer to it as our “effect”), and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.</p>
      </div>
      <UseEffectHook />
      <hr />
      <h2>Q4.  What is useReducer Hook ?(Implementation)</h2>
      <div>
        <h3>UseReducerHook</h3>
        <p>The useReducer Hook is the better alternative to the useState hook and is generally more preferred over the useState hook when you have complex state-building logic or when the next state value depends upon its previous value or when the components are needed to be optimized.</p>
        <p>The useReducer hook takes three arguments including reducer, initial state, and the function to load the initial state lazily.</p>
        <p>Syntax:</p>
        <pre>const [state, dispatch] = useReducer(reducer, initialArgs, init);</pre>
      </div>
      <UseReducerHook />
      <hr />
      <h2>Q5. What is useMemo Hook ?(Implementation)</h2>
      <div>
        <h3>UseMemoHook</h3>
        <p>The useMemo is a hook used in the functional component of react that returns a memoized value. In Computer Science, memoization is a concept used in general when we don’t need to recompute the function with a given argument for the next time as it returns the cached result. A memoized function remembers the results of output for a given set of inputs. For example, if there is a function to add two numbers, and we give the parameter as 1 and 2 for the first time the function will add these two numbers and return 3, but if the same inputs come again then we will return the cached value i.e 3 and not compute with the add function again. In react also, we use this concept, whenever in the React component, the state and props do not change the component and the component does not re-render, it shows the same output. The useMemo hook is used to improve performance in our React application.</p>
        <p>Syntax:</p>
        <pre>const memoizedValue = useMemo(functionThatReturnsValue, arrayDepencies)</pre>
      </div>
      <UseMemoHook />
    </div>
  );
}

export default App;
