import List from "./List";
import Masonry from "@mui/lab/Masonry";

const ListList = (lists: any) => {
  const getList = () => {
    return lists["lists"].map((list: any) => (
      <List key={list.id} list={list} />
    ));
  };

  return (
    <Masonry
      columns={4}
      spacing={2}
      defaultHeight={450}
      defaultColumns={4}
      defaultSpacing={1}
    >
      {getList()}
    </Masonry>
  );
};
export default ListList;
