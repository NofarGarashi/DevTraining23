import { useState } from 'react';

export default function useTask() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Learn React', isComplete: false },
    { id: 2, title: 'Learn Next.js', isComplete: false },
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

  const handleToggleChange = (id) => {
    setTasks((current) => {
      const taskIndex = current.findIndex((t) => t.id === id);
      if (taskIndex !== -1) {
        const newTasks = [...current];
        newTasks.splice(taskIndex, 1, {
          ...newTasks[taskIndex],
          isComplete: !newTasks[taskIndex].isComplete,
        });
        // newTasks[taskIndex].isComplete = !newTasks[taskIndex].isComplete;
        return newTasks;
      }
      return current;
    });
  };

  return [
    tasks,
    taskName,
    addTask,
    onTaskChange,
    removeTask,
    handleToggleChange,
  ];
}
