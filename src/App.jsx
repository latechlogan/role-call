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

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <SearchBar searchTerm={searchTerm} handleChange={handleChange} />
      <Table data={filteredData} />
    </>
  );
}

export default App;
