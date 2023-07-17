import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../store/counterSlice';
import { useRouter } from 'next/router';

const IncrementPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const count = useSelector((state) => state.counter.count);
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleredirect = () => {
    router.push('/result');
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleredirect}>Result</button>
    </div>
  );
};

export default IncrementPage;
