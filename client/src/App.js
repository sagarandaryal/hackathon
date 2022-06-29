import { useGetDataQuery } from "./redux/bankApi";

const App = () => {
  const { data, error, isLoading, isSuccess } = useGetDataQuery();
  console.log(data);
  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Something went wroung.</h2>}
      {isSuccess && data && <h1>Welcome to Dashboard</h1>}
    </div>
  );
};

export default App;
