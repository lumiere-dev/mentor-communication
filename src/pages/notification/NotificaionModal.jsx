const NotificationModal = ({ children }) => {
  return (
    <div className="modal bg-[#000000c5] fixed top-0 left-0 inset-0 z-[99] p-6 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg overflow-y-auto p-6 w-[300px] md:w-[500px]">
        {children}
      </div>
    </div>
  );
};

export default NotificationModal;
