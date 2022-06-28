import { useGetDataQuery } from "./redux/bankAPI";

const App = () => {
  const { data, error, isLoading } = useGetDataQuery();
  console.log(data);
  return (
    <div>
      <h1>Welcome to Dashboard</h1>
    </div>
  );
};

export default App;
