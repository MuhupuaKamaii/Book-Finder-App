import { useState } from 'react';
import './App.css';
import SearchBar from "./components/SearchBar.jsx";

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app">
      <h1>📚 Book Finder</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* BookList will go here later */}
    </div>
  );
}

export default App; // << you had `export default SearchBar;` by mistake!


