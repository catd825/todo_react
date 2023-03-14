import axios from "axios";
import { useQuery } from "react-query";
import ListList from "../Components/ListList";

const ListContainer = () => {
  const getLists = async () => {
    const res = await axios.get("http://localhost:3000/lists");
    const { data } = res;
    return data;
  };
  const { data, error, isLoading } = useQuery("getLists", getLists);

  if (error) return <div>Request Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <ListList lists={data}/>
    </>
  );
};
export default ListContainer;
