import SearchIcon from "./icons/SearchIcon";

const SearchBar = () => {
    return (
        <div className="flex items-center gap-300">
            <SearchIcon />
            <input
                title="input"
                type="text"
                className="border-b pb-4 caret-red"
            />
        </div>
    );
};

export default SearchBar;
