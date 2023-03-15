import Task from "./Task";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from '@mui/material/Typography';

const List = (list: any) => {
  const tasks = list["list"].tasks.map((task: any) => {
    return <Task key={task.id} task={task} />;
  });
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {list["list"].name}
        </Typography>
        {tasks}
      </CardContent>
    </Card>
  );
};
export default List;
