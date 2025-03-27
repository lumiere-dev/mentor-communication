import { convert } from "html-to-text";
import React, { useCallback, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { tableStyles } from "../../data/data";

const MentorEmails = () => {
  const [emails, setEmails] = useState([]);
  const extractText = (email) => {
    const extractedText = convert(email, {
      wordwrap: false,
      ignoreImage: true,
      ignoreHref: true,
    });
    return extractedText;
  };
  const columns = [
    {
      name: "sender",
      selector: (row) => row.sender,
      maxWidth: "5rem",
    },
    {
      name: "Subject",
      selector: (row) => row.subject_line,
      maxWidth: "12rem",
    },
    {
      name: "Mentor email",
      selector: (row) => row.mentor_email,
      maxWidth: "13rem",
    },
    {
      name: "Student email",
      selector: (row) => row.student_email,
      maxWidth: "13rem",
    },
    {
      name: "email",
      selector: (row) => extractText(row.email_body),
    },
  ];
  const getAllNotifications = useCallback(async () => {
    try {
      let url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/mentor-emails`;
      const response = await fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
      const data = await response.json();
      setEmails(data || []);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getAllNotifications();
  }, [getAllNotifications]);

  return (
    <div className="container mx-auto py-10 md:py-[75px] px-5">
      <section className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm">
        <div className="text-sm text-textColor font-semibold">Emails Summary</div>
        <DataTable
          data={emails}
          columns={columns}
          selectableRowsHighlight
          customStyles={tableStyles}
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </section>
    </div>
  );
};

export default MentorEmails;
