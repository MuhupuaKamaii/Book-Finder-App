function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search for books..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "0.5rem",
        fontSize: "1rem",
        width: "100%",
        marginBottom: "1rem"
      }}
    />
  );
}

export default SearchBar;


