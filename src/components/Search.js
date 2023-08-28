import React from "react";
import { DatePicker } from 'antd';

const Search = (props) => {
  return (
    <div className="grid grid-cols-3 p-4 gap-4 bg-gray-100 rounded-lg">
      <div className="flex items-center">
        <label className="mr-2 text-gray-700 font-semibold">Mobile Number</label>
        <input
          className="p-2 shadow-md rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={props.searchQuery}
          onChange={(e) => props.setSearchQuery(e.target.value)}
          placeholder="Enter mobile number..."
        />
      </div>
      <div className="flex items-center">
        <div className="text-gray-700 font-semibold">From</div>
        <DatePicker className="ml-2" style={{ width: "150px" }} />
      </div>
      <div className="flex items-center">
        <div className="text-gray-700 font-semibold">To</div>
        <DatePicker className="ml-2" style={{ width: "150px" }} />
      </div>
    </div>
  );
};

export default Search;
