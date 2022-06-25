import React, { useEffect, useRef, useState } from "react";
import { searchIcon } from "../../../static/svg";
import "./SearchBox.scss";

export interface SearchBoxProps {
  onSubmit: any;
  onChangeText: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => any;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSubmit, onChangeText }) => {
  const ref = useRef<HTMLButtonElement>(null);
  const [active, setActive] = useState("");
  const onClick = (e: any) => {
    setActive("active");
  };

  const checkOutside = (e: any) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setActive("");
    }
  };

  useEffect(() => {
    document.addEventListener("click", checkOutside);
    return () => {
      document.removeEventListener("click", checkOutside);
    };
  }, [active]);

  return (
    <button
      ref={ref}
      className={`search-box_block ${active}`}
      onClick={onClick}
    >
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="search-box_input"
          onChange={onChangeText}
          onSubmit={onSubmit}
        />
      </form>
      <img alt="search" src={searchIcon} onClick={onSubmit} />
    </button>
  );
};

export default SearchBox;
