import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from './store/reducers/countReducer'

function App() {
  const value = useSelector((state) => state.value);
  const dispatch = useDispatch()
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to my redux tutorial.</h1>
        <p>{value}</p>
        <div>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
      </header>
    </div>
  );
}

export default App;
