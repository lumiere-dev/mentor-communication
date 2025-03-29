const tableStyles = {
  table: {
    style: {
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
    },
  },
  headRow: {
    style: {
      backgroundColor: '#f8fafc',
      borderBottom: 'none',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
      paddingTop: '12px',
      paddingBottom: '12px',
    },
  },
  headCells: {
    style: {
      fontSize: '13px',
      fontWeight: '600',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      color: '#64748b',
      borderBottom: 'none !important',
      padding: '16px',
    },
  },
  rows: {
    style: {
      background: '#ffffff',
      minHeight: '60px',
      transition: 'all 0.2s ease',
      backgroundColor: 'transparent',
      borderBottomStyle: 'solid !important',
      borderBottomWidth: '1px',
      borderBottomColor: '#f1f5f9',
      '&:hover': {
        backgroundColor: '#f8fafc',
        transform: 'translateY(-1px)',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
      },
    },
    highlightOnHoverStyle: {
      backgroundColor: '#f1f5f9',
      cursor: 'pointer',
    },
  },
  cells: {
    style: {
      color: '#1e293b',
      fontSize: '14px',
      padding: '16px',
      fontWeight: '400',
    },
  },
  pagination: {
    style: {
      border: 'none',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f1f5f9',
      padding: '16px',
    },
    pageButtonsStyle: {
      color: '#64748b',
      fill: '#64748b',
      borderRadius: '6px',
      backgroundColor: 'transparent',
      '&:hover:not(:disabled)': {
        backgroundColor: '#f1f5f9',
      },
      '&:focus': {
        outline: 'none',
        backgroundColor: '#e2e8f0',
      },
    },
  },
  noData: {
    style: {
      padding: '40px',
      color: '#64748b',
      backgroundColor: '#ffffff',
    },
  },
  progress: {
    style: {
      color: '#3B82F6',
      backgroundColor: '#ffffff',
      padding: '30px',
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