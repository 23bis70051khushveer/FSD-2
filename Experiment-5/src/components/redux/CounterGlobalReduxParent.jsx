import { useDispatch, useSelector } from "react-redux";

export default function CounterReduxParent(props) {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{props.cno} : Global State (Redux) Count: {count}</p>

      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increase</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrease</button>
    </div>
  );
}
