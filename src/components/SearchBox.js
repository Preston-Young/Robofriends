import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div>
            <input 
            className="bg-lightest-blue b--green ba pa3"
            type="search" 
            placeholder="search robots..." 
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;