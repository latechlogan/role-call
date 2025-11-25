import "./App.css";
import htmlAriaRoles from "./data/html-aria-roles.json";
import Table from "./components/Table/Table";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData = htmlAriaRoles.filter((item) =>
    item.element.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return <Table data={filteredData} />;
}

export default App;
