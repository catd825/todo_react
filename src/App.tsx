import "./App.css";
import ListContainer from "./Containers/ListContainer";
import { QueryClient, QueryClientProvider } from "react-query";
import Navbar from "./Components/Navbar";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <div className="App"> */}
      <Navbar /> 
        <ListContainer />
      {/* </div> */}
    </QueryClientProvider>
  );
}

export default App;
