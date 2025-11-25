import "./App.css";
import htmlAriaRoles from "./data/html-aria-roles.json";
import Table from "./components/Table/Table";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = htmlAriaRoles.filter((item) =>
    item.element.toLowerCase().startsWith(searchTerm.toLowerCase())
  );
  const resultCount = filteredData.length;

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <section className="searchSection">
        <SearchBar
          searchTerm={searchTerm}
          handleChange={handleChange}
          resultCount={resultCount}
        />
        <p>
          Source:&ensp;
          <a
            href="https://www.w3.org/TR/html-aria/"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3C ARIA in HTML Spec
          </a>
        </p>
      </section>
      <Table data={filteredData} />
      <footer>
        <p>
          Data sourced from the W3C® ARIA in HTML specification. Copyright ©
          2025 World Wide Web Consortium. W3C® liability, trademark and document
          use rules apply.
        </p>
        <p>
          Full specification:{" "}
          <a
            href="https://www.w3.org/TR/html-aria/"
            target="_blank"
            rel="noopener noreferrer"
          >
            W3C ARIA in HTML Specification
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
