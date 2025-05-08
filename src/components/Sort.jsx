import { useState } from "react";

const Sort = ({ onSortChange }) => {
    const [sortOption, setSortOption] = useState("");

    const handleSortChange = (event) => {
        const selectedOption = event.target.value;
        setSortOption(selectedOption);
        onSortChange(selectedOption);
    };

    return (
        <div className="flex flex-col items-start space-y-2">
            <label htmlFor="sort" className="text-sm font-medium text-gray-700">
                Sort by:
            </label>
            <select
                id="sort"
                value={sortOption}
                onChange={handleSortChange}
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option value="">Select</option>
                <option value="title">Title</option>
                <option value="date">Date</option>
                <option value="author">Author</option>
            </select>
        </div>
    );
};

export default Sort;