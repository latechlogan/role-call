import "./SearchBar.css";

export default function SearchBar({ searchTerm, handleChange, resultCount }) {
  return (
    <section className="searchBar">
      <input
        type="text"
        id="tag-search-input"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search by tag name..."
      />
      {searchTerm !== "" && formatResultCount(resultCount)}
    </section>
  );
}

const formatResultCount = (resultCount) => {
  return resultCount > 1 ? (
    <p>{resultCount} results</p>
  ) : (
    <p>{resultCount} result</p>
  );
};
