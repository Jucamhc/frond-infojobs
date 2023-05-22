import React, { useState } from 'react';
import './TodoSearch.css';
import { fetchData } from './fetchData'

function TodoSearch() {
    const [searchValue, setSearchValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const data = async (type) => {
        if (type.length > 0) {
            const apiData = await fetchData(type);
            const newSuggestions = apiData.map((e) => e.value);
            setSuggestions(newSuggestions);
        }
    }

    const suggestedText = (value) => {
        console.log(value)
        setSearchValue(value)
    }

    const renderSuggestions = () => {
        if (suggestions.length === 0 && searchValue !== "") {
            return <p>Search content not found</p>
        }
        return (
            <ul>
                {suggestions.map((item) => (
                    <div key={item}>
                        <li onClick={() => suggestedText(item) }>{item}</li>
                        <hr/>
                    </div>
                ))}
            </ul>
        )
    }

    return (
        <div>
            <input
                id='inputSearch'
                placeholder="Busca"
                className="TodoSearch"
                value={searchValue}
                onChange={(event) => {
                    data(event.target.value)
                    setSearchValue(event.target.value);
                }}
            />
            {renderSuggestions()}
        </div>
    );
}

export { TodoSearch };
