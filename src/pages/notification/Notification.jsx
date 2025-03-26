"use client";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { notificationData, tableStyles } from "../../data/data";
import { Link } from "react-router-dom";
import NotificationModal from "./NotificaionModal";
import toast from "react-hot-toast";

const correctNumber = 1234;

const Notification = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [userInput, setUserInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userInput) === correctNumber) {
      setModalOpen(false);
    } else {
      toast.error("Incorrect number! Try again.");
    }
  };

  return (
    <div className="container mx-auto py-10 md:py-[75px] px-5">
      <section className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm">
        <div className="text-sm text-textColor font-semibold">
          Notification Summary
        </div>
        <DataTable
          data={notificationData}
          columns={columns}
          selectableRowsHighlight
          customStyles={tableStyles}
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </section>

      {modalOpen && (
        <NotificationModal>
          <form className="p-6 text-center" onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold mb-4">
              Enter the Correct Number to Continue
            </h2>
            <input
              type="number"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="border p-2 rounded w-full text-center outline-none"
              placeholder="Enter number"
            />
            <button
              type="submit"
              className="bg-primary text-white px-4 py-2 rounded mt-4 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </NotificationModal>
      )}
    </div>
  );
};

export default Notification;

const columns = [
  {
    name: "Notification",
    selector: (row) => row.notification,
    width: "30%",
  },
  {
    name: "Notification Type",
    selector: (row) => row.notificationType,
  },
  {
    name: "Date",
    selector: (row) => row.date,
  },
  {
    name: "Status ",
    selector: (row) => row.status,
  },
  {
    name: "Actions",
    selector: () => (
      <Link href="" className="underline text-[13px] font-medium text-primary">
        View contract
      </Link>
    ),
  },
];
