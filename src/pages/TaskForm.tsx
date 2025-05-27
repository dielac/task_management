import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import type { Task } from '../types/types';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const taskCtx = useContext(TaskContext);
  if (!taskCtx) return <p>Loading…</p>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ---- validation check ----
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    const newTask: Task = {
      id: uuidv4(),
      title: title.trim(),
      description: description.trim(),
      dueDate,
      status: 'todo',
    };

    taskCtx.addTask(newTask);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create Task</h2>

     
      {error && <p className="error">{error}</p>}

      <input
        placeholder="Title"
        value={title}
        onChange={e => {
          setTitle(e.target.value);
          if (error) setError(null);      
        }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
      />

      <button type="submit" disabled={!title.trim()}>
        Save
      </button>
    </form>
  );
};

export default TaskForm;
