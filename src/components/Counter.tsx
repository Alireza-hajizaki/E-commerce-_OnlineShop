import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../redux/store"
import { decrement, increment , incrementByAmount, incrementAsync } from "../redux/reducers/products/productReducer";

const Counter = () => {

    const count = useSelector((state:RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    console.log(count)

  return (
    <div>
     <h2>{count}</h2>
     <button onClick={() => dispatch(incrementAsync(10))}>increment</button>
     -
     <button onClick={() => dispatch(decrement())}>decrement</button>
    </div>
  )
}

export default Counter
