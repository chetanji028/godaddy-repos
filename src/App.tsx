import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RepoDetailPage from './pages/RepoDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/repo/:name" element={<RepoDetailPage />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;