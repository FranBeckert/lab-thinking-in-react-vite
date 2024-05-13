function SearchBar() {
  return (
    <div>
      <label>
        Search  <br/> <input name="myInput" />
      </label>
      <br />
      <label>
        Only show products in stock <input type="checkbox" name="myCheckbox" />
      </label>
    </div>
  );
}

export default SearchBar;
