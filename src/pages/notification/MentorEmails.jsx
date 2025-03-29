import { convert } from "html-to-text";
import React, { useCallback, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { tableStyles } from "../../data/data";
import { useNavigate } from "react-router-dom";

const MentorEmails = () => {
  const [threadGroups, setThreadGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Preview text formatter
  const formatPreview = (text, limit = 100) => {
    const extractedText = convert(text, {
      wordwrap: false,
      ignoreImage: true,
      ignoreHref: true,
    });
    return extractedText.length > limit 
      ? extractedText.substring(0, limit) + "..." 
      : extractedText;
  };

  // Format timestamp to readable date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  // Handle row click to show thread details
  const handleRowClick = (row) => {
    navigate(`/thread/${encodeURIComponent(row.student_mentor_pair)}`);
  };

  const columns = [
    {
      name: "Student Email",
      selector: (row) => row.student_email,
      sortable: true,
      maxWidth: "200px",
    },
    {
      name: "Subject",
      selector: (row) => row.latest_subject,
      sortable: true,
      maxWidth: "200px",
    },
    {
      name: "Preview",
      selector: (row) => formatPreview(row.latest_email_preview),
      maxWidth: "300px",
    },
    {
      name: "Last Sender",
      selector: (row) => row.latest_sender,
      sortable: true,
      maxWidth: "120px",
      cell: (row) => (
        <div className="flex items-center">
          <span>{row.latest_sender}</span>
          {row.needs_response && (
            <span className="ml-2 w-3 h-3 rounded-full bg-red-500" title="Needs response"></span>
          )}
        </div>
      ),
    },
    {
      name: "Last Message",
      selector: (row) => formatDate(row.latest_timestamp),
      sortable: true,
      maxWidth: "180px",
    },
    {
      name: "Messages",
      selector: (row) => row.email_count,
      sortable: true,
      maxWidth: "100px",
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
      setThreadGroups(data || []);
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
    <div className="container mx-auto py-10 md:py-[75px] px-5">
      <section className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Student Communications</h2>
          <button 
            onClick={() => getThreadGroups()} 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Refresh
          </button>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Red dot</span>: Student message needs response within 10 minutes
          </p>
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
          onRowClicked={handleRowClick}
          customStyles={tableStyles}
          fixedHeader
          fixedHeaderScrollHeight="70vh"
          noDataComponent="No emails found"
        />
      </section>
    </div>
  );
};

export default MentorEmails;