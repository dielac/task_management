import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const taskCtx = useContext(TaskContext);
  if (!taskCtx) return <p>Loading...</p>;

  const { tasks, deleteTask } = taskCtx;

  
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Dashboard</h2>
      <Link to="/create">+ Add Task</Link>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title}{' '}
            <Link to={`/task/${task.id}`}>View</Link>{' '}
            <Link to={`/edit/${task.id}`}>Edit</Link>{' '}
            <button onClick={() => deleteTask(task.id)} style={{ color: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Dashboard;
