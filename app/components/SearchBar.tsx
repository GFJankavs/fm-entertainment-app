import SearchIcon from "./icons/SearchIcon";

const SearchBar = () => {
    return (
        <div className="flex items-start gap-300">
            <SearchIcon />
            <input
                title="input"
                type="text"
                placeholder="Some placeholder"
                className="w-full max-w-[540px] text-white border-b border-b-transparent focus:border-b-blue-500 pb-4 placeholder:opacity-50 caret-red outline-none text-preset-2--medium"
            />
        </div>
    );
};

export default SearchBar;
