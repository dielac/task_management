import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import type { Task } from '../types/types';
import { TaskContext } from '../context/TaskContext';

const TaskEdit = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const taskCtx = useContext(TaskContext);
  const [error, setError] = useState<string>('');

  
  if (!taskCtx) return <p>Loading...</p>;

  // finds task we want to edit
  const existing = taskCtx.tasks.find((t) => t.id === id);



  useEffect(() => {
    if (!existing) navigate('/');
  }, [existing, navigate]);

  // form state
  const [title, setTitle] = useState(existing?.title ?? '');
  const [description, setDescription] = useState(existing?.description ?? '');
  const [dueDate, setDueDate] = useState(existing?.dueDate ?? '');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // validation
    if (!title.trim()) {
      setError('Title is required');
      return;
    }
    

    const updatedTask: Task = {
      ...existing!,
      title,
      description,
      dueDate,
    };
    
    taskCtx.updateTask(updatedTask);
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Task</h2>
      <input
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      <textarea
        placeholder="desc"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit" disabled={!title.trim()}>
        save
      </button>
    </form>
  );
};



export default TaskEdit;
