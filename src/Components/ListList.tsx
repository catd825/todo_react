import List from "./List";

const ListList = (lists: any) => {
    const getList = () => {
        return lists['lists'].map((list: any) => <List key={list.id} list={list}/>)
    }

    return <>{getList()}</>
};
export default ListList;
