import { Routes, Route } from 'react-router-dom';
import Dashboard  from './pages/Dashboard';
import TaskDetail from './pages/TaskDetails';
import TaskForm   from './pages/TaskForm';
import TaskEdit   from './pages/TaskEdit';
import Login      from './pages/Login';


function App() {
  return (
    <Routes>
      <Route path="/"          element={<Dashboard  />} />
      <Route path="/task/:id"  element={<TaskDetail />} />
      <Route path="/create"    element={<TaskForm   />} />
+     <Route path="/edit/:id"  element={<TaskEdit   />} />
      <Route path="/login"     element={<Login      />} />
    </Routes>
  );
}



export default App;
