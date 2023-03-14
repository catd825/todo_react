import "./App.css";
import ListContainer from "./Containers/ListContainer";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ListContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
