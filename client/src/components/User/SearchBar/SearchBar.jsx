import { Input } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Search } = Input;

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const onSearchHandler = (value) => {
        if (!value.trim()) return;
        navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }

    return (
        <Search
            style={{ maxWidth: '64rem' }}
            placeholder="Search..."
            allowClear={true}
            onChange={(e) => setSearchQuery(e.target.value)}
            onSearch={onSearchHandler}
            onClear={() => console.log('input cleared!')}
        />
    )
};

export default SearchBar;