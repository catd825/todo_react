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
    <div style={{ margin: "100px 20px 0px 20px" }}>
      <ListList lists={data} />
    </div>
  );
};
export default ListContainer;
