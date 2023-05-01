import { useState } from 'react';

export default function useTask() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React' },
    { id: 2, title: 'Learn Next.js' },
  ]);
  const [taskName, setTaskName] = useState('');

  const addTask = () => {
    setTasks([...tasks, { id: tasks.length + 1, title: taskName }]);
    setTaskName('');
  };

  const onTaskChange = (event) => {
    setTaskName(event.target.value);
  };

  const removeTask = (id) => {
    setTasks((current) => current.filter((task) => task.id !== id));
  };

  return [tasks, taskName, addTask, onTaskChange, removeTask];
}
