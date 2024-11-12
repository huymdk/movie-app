import PropTypes from 'prop-types';
import { useState } from 'react';

function Header({ onSearch }) {
    const [textSearch, setSearch] = useState('');
    return (
        <div className="p-4 bg-orange-700 flex items-center justify-between space-x-4 rounded-md shadow-lg">
            <div className="flex items-center space-x-8">
                <h1 className="font-bold text-4xl uppercase text-white">Movie</h1>
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-white hover:text-gray-300">Home</a>
                    <a href="#" className="text-white hover:text-gray-300">About</a>
                    <a href="#" className="text-white hover:text-gray-300">Contact</a>
                </nav>
            </div>
            <div className="flex items-center p-2 shadow-md rounded-lg bg-white">
                <input
                    type="text"
                    placeholder="Search"
                    className="flex-grow p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={(e) => setSearch(e.target.value)}
                    value={textSearch}
                />
                <button
                    className="ml-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
                    onClick={() => onSearch(textSearch)}
                >
                    Search
                </button>
            </div>
        </div>
    );
}

Header.propTypes = {
    onSearch: PropTypes.func,
};

export default Header;
