import React, { useState } from "react";

function RegitrationForm(props) {
  const { data, itemsPerPage } = props;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <table className="table w-full text-center my-10">
        <thead className="p-2">
          <tr>
            <th className="p-3 bg-blue-700 text-white border-collapse rounded-tl">
              User Name
            </th>
            <th className="p-3 bg-blue-700 text-white">Devices</th>
            <th className="p-3 bg-blue-700 text-white">Date of Registration</th>
            <th className="p-3 bg-blue-700 text-white">Subscription Type</th>
            <th className="p-3 bg-blue-700 text-white">Subscription Start Time
            </th>
            <th className="p-3 bg-blue-700 text-white rounded-tr">
              Subscription End Time
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startIndex, endIndex).map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-blue-200" : " bg-blue-50"}
            >
              <td className="p-5">{item.userNumber}</td>
              <td className="p-5">{item.devices}</td>
              <td className="p-5">{item.subscriptionDate}</td>
              <td className="p-5">{item.subscriptionType}</td>
              <td className="p-5">{item.subscriptionStart}</td>
              <td className="p-5">{item.subscriptionEnd}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center text-white">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handleClick(pageNumber)}
              className={`${
                currentPage === pageNumber ? "bg-blue-500" : "bg-gray-300"
              } px-2 py-1 mx-1 rounded`}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
}

export default RegitrationForm;
