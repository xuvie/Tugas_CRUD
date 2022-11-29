import './App.css';
import Form from './Pages/Form';
import { Routes, Route } from 'react-router-dom';
import Table from './Pages/Table';
import Edit from './Pages/Edit';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Table />}/>
      <Route path='/form' element={<Form />}/>
      <Route path='/edit/:id' element={<Edit />}/>
    </Routes>
  );
}

export default App;
