import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/fetaures/counter/counterSlice";

function App() {
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1 className="text-center text-5xl text-fuchsia-950 font-semibold font-mono">
        Tech net
      </h1>
      <div className="flex ">
        <button
          className="border-2 border-blue-500  p-3 text-blue-600 rounded"
          onClick={() => dispatch(decrement())}
        >
          {" "}
          decrement
        </button>
        <button
          className="border-2 border-blue-500  p-3 text-blue-600 rounded"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment by amount
        </button>
        <p className="text-orange-500 text-3xl mx-3">{count}</p>
        <button
          className="border-2 border-fuchsia-500 p-3 text-fuchsia-600 rounded"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
      </div>
    </>
  );
}

export default App;
