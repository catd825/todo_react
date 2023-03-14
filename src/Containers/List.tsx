import axios from "axios";
import { useEffect, useState } from "react";

const List = () => {
  const [lists, setLists] = useState([]);

  const getLists = async () => {
    const res = await axios.get("http://localhost:3000/lists");
    const { data } = res;
    setLists(data);
    return data;
  };
  useEffect(() => {
    getLists();
  }, []);
  console.log(lists)
  return <>list</>;
};
export default List;
