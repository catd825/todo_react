import Task from "./Task";

const List = (list: any) => {
  const tasks = list["list"].tasks.map((task: any) => {
    return <Task key={task.id} task={task} />;
  });
  return (
    <div style={{ width: "300px" }}>
      List Name: {list["list"].name}
      {tasks}
    </div>
  );
};
export default List;
