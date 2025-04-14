import { useState } from 'react';
import './App.css';
import SearchBar from './src/components/SearchBar.jsx';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    console.log('Searching for:', term);
  };

  return (
    <div style={{ padding: '2rem', background: '#f0f0f0' }}>
      <h1>Hello from App.jsx 🚀</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button onClick={() => handleSearch(searchTerm)}>Search</button>
    </div>
  );
}

export default App;


