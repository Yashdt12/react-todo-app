import './SearchItem.css';

const SearchItem = ({ searchItem, setSearchItem }) => {
    return (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="search-bar" className="offscreen">Search here:</label>
            <input type="text" placeholder="Search here..." id="search-bar" className="search-bar" value={searchItem} onChange={(e) => setSearchItem(e.target.value)} />
        </form>
    )
};

export default SearchItem;