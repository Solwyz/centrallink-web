import { Route, Routes } from 'react-router-dom';
import './App.css';
import User from './User/User';
import HomePage from './User/Pages/Homepage/HomePage';

function App() {
  return (
    <div className="App font-milchella">
    <Routes>
    <Route path="/" element={<User />}>
    <Route index element={<HomePage/>} />

</Route>
    </Routes>

  </div>
  );
}

export default App;
