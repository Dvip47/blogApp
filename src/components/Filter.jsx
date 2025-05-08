import React, { useState } from "react";

const Filter = () => {
    const [tags, setTags] = useState("");
    const [users, setUsers] = useState("");
    const [title, setTitle] = useState("");

    const tagSuggestions = ["React", "JavaScript", "CSS", "HTML"];
    const userSuggestions = ["John Doe", "Jane Smith", "Alice Johnson", "Bob Brown"];

    return (
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
            {/* Title Filter */}
            <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                    Title
                </label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter title"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>

            {/* Tags Filter */}
            <div className="mb-4">
                <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
                    Tags
                </label>
                <input
                    type="text"
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="Search tags"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    list="tag-options"
                />
                <datalist id="tag-options">
                    {tagSuggestions.map((tag, index) => (
                        <option key={index} value={tag} />
                    ))}
                </datalist>
            </div>

            {/* Users Filter */}
            <div className="mb-4">
                <label htmlFor="users" className="block text-sm font-medium text-gray-700">
                    Users
                </label>
                <input
                    type="text"
                    id="users"
                    value={users}
                    onChange={(e) => setUsers(e.target.value)}
                    placeholder="Search users"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    list="user-options"
                />
                <datalist id="user-options">
                    {userSuggestions.map((user, index) => (
                        <option key={index} value={user} />
                    ))}
                </datalist>
            </div>

            {/* Apply Filters Button */}
            <button
                onClick={() => console.log({ title, tags, users })}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Apply Filters
            </button>
        </div>
    );
};

export default Filter;