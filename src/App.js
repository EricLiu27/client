import './App.css';
import { Routes, Route } from 'react-router-dom';
import CreatePage from './views/CreatePage';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <Routes>
        <Route path="/product" element={<CreatePage />} />
      </Routes>
    </div>
  );
}

export default App;
