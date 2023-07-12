import { useState } from "react";
import "./SearchBar.scss";

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchBar__input"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
