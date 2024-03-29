import React from 'react';
import './App.css';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TaskList />} /> 
      <Route path="/create-task" element={<TaskForm />} /> 
      <Route path="/edit-task/:id" element={<TaskForm />} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
