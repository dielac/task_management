import { useContext } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const TaskDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const taskCtx = useContext(TaskContext);
  if (!taskCtx) return <p>Loading...</p>;

  const task = taskCtx.tasks.find(t => t.id === id);
  if (!task) return <p>Task not found :(</p>;

    return (
      <div>
        <h2>{task.title}</h2>
        <p>{task.description}</p>
        <p>Due: {task.dueDate}</p>
        <p>Status: {task.status}</p>
  +     <Link to={`/edit/${task.id}`}>Edit</Link>{' '}
  +     <button onClick={() => { taskCtx.deleteTask(task.id); navigate('/'); }} style={{color:'red'}}>Delete</button>
        <button onClick={() => navigate('/')}>Go back</button>
      </div>
    );
  
  
};

export default TaskDetails;
