const tableStyles = {
  headCells: {
    style: {
      fontSize: "14px",
      fontWeight: 500,
      color: "#7E7E7E",
      borderBottom: "1px solid #32343CB2 !important",
    },
  },
  rows: {
    style: {
      background: "transparent",
      padding: "10px 0",
      margin: "0",
      borderBottomStyle: "dashed !important",
    },
  },
  cells: {
    style: {
      color: "#32343C",
      fontSize: "13px",
    },
  },
};

const notificationData = [
  {
    notification: "Your proposal #P-1001 has been accepted.",
    notificationType: "Proposal Update",
    date: "25 Mar 2025",
    status: "read",
  },
  {
    notification: "New property listing added in your area.",
    notificationType: "Property Alert",
    date: "24 Mar 2025",
    status: "unread",
  },
  {
    notification: "Your rent payment of $1,500 is due soon.",
    notificationType: "Payment Reminder",
    date: "22 Mar 2025",
    status: "unread",
  },
  {
    notification: "Proposal #P-1003 is pending approval.",
    notificationType: "Proposal Update",
    date: "21 Mar 2025",
    status: "read",
  },
  {
    notification: "Your account password was changed successfully.",
    notificationType: "Security Alert",
    date: "20 Mar 2025",
    status: "read",
  },
];

export { tableStyles, notificationData };
