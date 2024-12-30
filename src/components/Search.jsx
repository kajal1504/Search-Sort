import React, { useState } from "react";
import { data } from "../data.js";

function Search() {
    const [search, setSearch] = useState("");
    const [sort, setSort] = useState(""); // Stores the selected sort key

    const filterdata = data.filter((e) =>
        e.name.toLowerCase().includes(search.toLowerCase())
    );

    const sortedAndFilteredData = [...filterdata].sort((a, b) => {
        if (!sort) return 0; // Skip sorting if no sort key is selected
        if (a[sort] < b[sort]) return -1;
        if (a[sort] > b[sort]) return 1;
        return 0;
    });

    const handleChange = (e) => {
        setSort(e.target.value); // Set the sort key
    };

    return (
        <>
            <div className="h-[100vh] w-[100wh] flex justify-center my-10">
                <div className="cursor-pointer">
                    <div className="flex justify-between">
                        {/* Search */}
                        <input
                            type="text"
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="search contacts"
                            className="h-10 w-[20rem] rounded-xl placeholder:text-blue-500 placeholder:p-2 ring-1 ring-black"
                        />

                        {/* Sort */}
                        <div className="pt-2">
                            <label>Sort by:</label>
                            <select
                                name="sort"
                                onChange={handleChange}
                                className="text-blue-500 ring-1 ring-black rounded-xl w-[20rem]"
                            >
                                <option value="">Please select</option>
                                <option value="name">Name</option>
                                <option value="gender">Gender</option>
                                <option value="phone">Phone</option>
                                <option value="email">Email</option>
                            </select>
                        </div>
                    </div>

                    <table className="table-auto w-full border-collapse border border-gray-500 mt-4">
                        <thead>
                            <tr className="bg-gray-600">
                                <th className="px-4 py-2 text-white">NAME</th>
                                <th className="px-4 py-2 text-white">GENDER</th>
                                <th className="px-4 py-2 text-white">EMAIL</th>
                                <th className="px-4 py-2 text-white">PHONE</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedAndFilteredData.map((e) => (
                                <tr key={e.id} className="hover:bg-gray-100 transition-all">
                                    <td className="border border-gray-300 px-4 py-2">{e.name}</td>
                                    <td className="border border-gray-300 px-4 py-2">{e.gender}</td>
                                    <td className="border border-gray-300 px-4 py-2">{e.email}</td>
                                    <td className="border border-gray-300 px-4 py-2">{e.phone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default Search;