import React, { useState } from 'react';
import { FaEye, FaTrash } from 'react-icons/fa';
import {  Link, useNavigate } from 'react-router-dom';

const patientsData = [
  { id: 1, name: 'John Doe', age: 30, gender: 'Male', lastVisit: '2024-08-12 10:30 AM' },
  { id: 2, name: 'Jane Doe', age: 25, gender: 'Female', lastVisit: '2024-08-10 09:00 AM' },
  { id: 3, name: 'Sam Green', age: 45, gender: 'Male', lastVisit: '2024-08-15 11:45 AM' },
  { id: 4, name: 'Emma White', age: 34, gender: 'Female', lastVisit: '2024-08-14 02:00 PM' },
  { id: 5, name: 'Chris Black', age: 41, gender: 'Male', lastVisit: '2024-08-16 01:15 PM' },
  { id: 6, name: 'Nancy Smith', age: 29, gender: 'Female', lastVisit: '2024-08-11 03:30 PM' },
  { id: 7, name: 'Peter Brown', age: 54, gender: 'Male', lastVisit: '2024-08-13 04:45 PM' },
  { id: 8, name: 'Linda Johnson', age: 37, gender: 'Female', lastVisit: '2024-08-09 08:30 AM' },
  { id: 9, name: 'James Lee', age: 63, gender: 'Male', lastVisit: '2024-08-17 05:00 PM' },
  { id: 10, name: 'Tom Hanks', age: 50, gender: 'Male', lastVisit: '2024-08-18 12:00 PM' },
];

const PatientTable = () => {
  const [searchText, setSearchText] = useState('');
  const [sortField, setSortField] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(5);

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortField(field);
    setSortOrder(order);
    setCurrentPage(1); // Reset pagination on sorting
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // Reset pagination on search
  };

  const handlePageClick = (newPage) => {
    setCurrentPage(newPage);
  };

  const filteredData = patientsData.filter((patient) =>
    patient.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortField) {
      const fieldA = a[sortField].toString().toLowerCase();
      const fieldB = b[sortField].toString().toLowerCase();
      if (fieldA < fieldB) return sortOrder === 'asc' ? -1 : 1;
      if (fieldA > fieldB) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    }
    return 0;
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const totalPages = Math.ceil(sortedData.length / pageSize);
const navigate =useNavigate()
  const patientDetail=()=>{
navigate("/dashboard/patientDetail")
  }
  return (
    <div className="w-full  mx-auto ">
              <header className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between rounded-b-2xl shadow-lg">
                <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6 text-center lg:text-left">
                    <div className="flex items-center space-x-3 mb-4 lg:mb-0">
                        {/* <FaInfoCircle className="text-3xl sm:text-3xl lg:text-3xl" /> */}
                        <div>
                            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold">Patient Management Table</h1>

                        </div>
                    </div>
                </div>
            </header>
      {/* Search Input */}
      <div className="flex justify-between items-center my-4">
        <h2 className="text-2xl font-bold text-gray-900"></h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name"
            value={searchText}
            onChange={handleSearch}
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:border-gray-500"
          />
          <span className="absolute inset-y-0 right-3 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.9 14.32a8 8 0 111.41-1.41l4.3 4.29a1 1 0 01-1.42 1.42l-4.29-4.3zm-4.9-7.32a6 6 0 100 12 6 6 0 000-12z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-500">
          <thead className="bg-gray-200 text-gray-700 uppercase text-xs">
            <tr>
              <th
                className="py-3 px-6 cursor-pointer"
                onClick={() => handleSort('id')}
              >
                ID {sortField === 'id' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
              <th
                className="py-3 px-6 cursor-pointer"
                onClick={() => handleSort('name')}
              >
                Name {sortField === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
              <th
                className="py-3 px-6 cursor-pointer"
                onClick={() => handleSort('age')}
              >
                Age {sortField === 'age' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
              <th
                className="py-3 px-6 cursor-pointer"
                onClick={() => handleSort('condition')}
              >
                Gender {sortField === 'condition' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
              <th
                className="py-3 px-6 cursor-pointer"
                onClick={() => handleSort('doctor')}
              >
                Last Visit {sortField === 'doctor' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>  <th
                className="py-3 px-6 cursor-pointer"
                onClick={() => handleSort('action')}
              >
                Action {sortField === 'action' && (sortOrder === 'asc' ? '▲' : '▼')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {paginatedData.length > 0 ? (
              paginatedData.map((patient) => (
                <tr key={patient.id} className="border-b hover:bg-gray-50">
                  <td className="py-4 px-6">{patient.id}</td>
                  <td className="py-4 px-6">{patient.name}</td>
                  <td className="py-4 px-6">{patient.age}</td>
                  <td className="py-4 px-6">{patient.gender}</td>
                  <td className="py-4 px-6">{patient.lastVisit}</td>
                  <td className="flex py-4 px-6 items-center gap-x-2  ">
                    
                    <FaEye className="cursor-pointer text-blue-500 hover:text-blue-700" onClick={patientDetail}/>
                    <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="py-4 px-6 text-center text-gray-500">
                  No results found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 w-full overflow-x-auto">
        <div className="text-gray-600">
          Showing {Math.min((currentPage - 1) * pageSize + 1, sortedData.length)} to{' '}
          {Math.min(currentPage * pageSize, sortedData.length)} of {sortedData.length}{' '}
          entries
        </div>
        <div className="flex space-x-2 ">
          <button
            onClick={() => handlePageClick(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg ${currentPage === 1 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-700'
              }`}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`px-4 py-2 rounded-lg ${currentPage === index + 1
                ? 'bg-gray-500 text-white'
                : 'bg-gray-200 text-gray-700'
                }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageClick(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg ${currentPage === totalPages
              ? 'bg-gray-200 text-gray-400'
              : 'bg-gray-200 text-gray-700'
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PatientTable;
