import { useSelector } from 'react-redux';

const ResultPage = () => {
  const count = useSelector((state) => state.counter.count);

  return (
    <div>
      <h1>Result Page</h1>
      <p>Latest Count: {count}</p>
    </div>
  );
};

export default ResultPage;
