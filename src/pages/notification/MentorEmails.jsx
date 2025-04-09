import React, { useCallback, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { tableStyles } from "../../data/data";

const MentorEmails = () => {
  const [threadGroups, setThreadGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      name: "Student Email",
      selector: (row) => row?.studentEmail,
      sortable: true,
      width: "25%",
      cell: (row) => <div className="truncate font-medium">{row?.studentEmail}</div>,
    },
    {
      name: "Mentor Email",
      selector: (row) => row?.mentorEmail,
      sortable: true,
      width: "25%",
      cell: (row) => <div className="truncate font-medium">{row?.mentorEmail}</div>,
    },
    {
      name: "Last Sender",
      selector: (row) => row?.latest_sender,
      sortable: true,
      width: "20%",
      cell: (row) => (
        <div className="flex items-center">
          <div className="flex items-center">
            {row?.latest_sender === "Student" ? (
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-blue-100 text-blue-500 mr-3 font-medium text-sm">
                  S
                </span>
                <span>Student</span>
              </div>
            ) : (
              <div className="flex items-center">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-100 text-green-500 mr-3 font-medium text-sm">
                  M
                </span>
                <span>Mentor</span>
              </div>
            )}
            <div className="flex items-center ml-2">
              {row?.recipient_type === "CC" && (
                <span className="px-1.5 py-0.5 bg-gray-200 text-gray-700 rounded text-xs font-medium mr-2">CC</span>
              )}
              {row?.needs_response && (
                <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" title="Needs response"></span>
              )}
            </div>
          </div>
        </div>
      ),
    },
    {
      name: "Count",
      selector: (row) => row?.totalMessages,
      sortable: true,
      width: "10%",
      cell: (row) => (
        <div className="text-center w-full">
          <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
            {row?.totalMessages}
          </span>
        </div>
      ),
    },
    {
      name: "Last Message",
      selector: (row) => row?.latestTimestamp,
      sortable: true,
      width: "25%",
      cell: (row) => <div className="truncate font-medium">{row?.latestTimestamp}</div>,
    },
  ];

  const getThreadGroups = useCallback(async () => {
    setLoading(true);
    try {
      let url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/mentor-emails`;
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      setThreadGroups(data?.data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getThreadGroups();
  }, [getThreadGroups]);

  return (
    <div className="container mx-auto py-10 md:py-[75px] px-5 max-w-6xl">
      <section className="bg-white rounded-lg border p-0 lg:p-0 shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">Student Communications</h2>
              <p className="text-blue-100 mt-1">Manage your student conversations</p>
            </div>
            <button
              onClick={() => getThreadGroups()}
              className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-all duration-200 font-medium flex items-center space-x-2 shadow-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <span>Refresh</span>
            </button>
          </div>
        </div>

        <div className="bg-blue-50 px-6 py-3 border-y border-blue-100 flex items-center">
          <div className="flex items-center text-sm text-blue-700">
            <span className="w-3 h-3 rounded-full bg-red-500 inline-block mr-2"></span>
            <span className="font-medium">Messages requiring response within 10 minutes</span>
          </div>
        </div>

        <DataTable
          data={threadGroups}
          columns={columns}
          progressPending={loading}
          pagination
          paginationPerPage={10}
          paginationRowsPerPageOptions={[10, 20, 30, 50]}
          highlightOnHover
          pointerOnHover
          customStyles={tableStyles}
          fixedHeader
          fixedHeaderScrollHeight="calc(100vh - 250px)"
          noDataComponent={
            <div className="p-10 flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-gray-300 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p className="text-gray-500 text-lg">No emails found</p>
            </div>
          }
        />
      </section>
    </div>
  );
};

export default MentorEmails;
