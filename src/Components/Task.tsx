import Typography from "@mui/material/Typography";
import moment from "moment";

const Task = (task: any) => {
  return (
    <>
      <Typography variant="h6" component="div">
        {task["task"].task}
      </Typography>
      <Typography variant="body2">
        to be completed:{" "}
        {moment(task["task"].to_be_completed_by).format("YYYY-MM-DD")}
      </Typography>
      <Typography variant="body2">
        completed: {String(task["task"].completed)}
      </Typography>
    </>
  );
};

export default Task;
