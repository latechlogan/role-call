import "./SearchBar.css";

export default function SearchBar({ searchTerm, handleChange }) {
  return (
    <section>
      <input
        type="text"
        id="tag-search-input"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by tag name..."
      />
    </section>
  );
}
