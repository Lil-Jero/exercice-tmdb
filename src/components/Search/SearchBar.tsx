const SearchBar = ({ searchInput, searchLanguage }: any) => {
  const handleSearch = (e: any) => {
    searchInput(e.target.value);
  };

  const handleLanguage = (e: any) => {
    const cv = e.target.value;
    console.log(cv);
    searchLanguage(cv);
  };

  return (
    <form className="d-flex justify-content-center m-2">
      <div className="search">
        Votre recherche ^^ <span>🔎</span>
      </div>
      <input
        type="text"
        placeholder="Entrez le nom d'un film"
        name=""
        id="search-input"
        onChange={handleSearch}
      />
      <select onChange={handleLanguage}>
        <option value="fr">France</option>
        <option value="en">Anglais</option>
        <option value="de">Allemand</option>
      </select>
    </form>
  );
};

export default SearchBar;
