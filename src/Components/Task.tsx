const Task = (task: any) => {

  return (
    <>
      <ul>
        Tasks
        <li>task name: {task["task"].task}</li>
        <li>to be completed by: {task["task"].to_be_completed_by}</li>
        <li>completed: {String(task["task"].completed)}</li>
      </ul>
    </>
  );
};

export default Task;
