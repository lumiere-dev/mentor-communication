import React, { useCallback, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { convert } from "html-to-text";

const ThreadView = () => {
  const { studentMentorPair } = useParams();
  const navigate = useNavigate();
  const [emails, setEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Format HTML content
  const formatEmailContent = (htmlContent) => {
    return convert(htmlContent, {
      wordwrap: false,
      ignoreImage: true,
      ignoreHref: true,
    });
  };

  // Format timestamp to readable date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  // Function to fetch thread details
  const fetchThreadDetails = useCallback(async () => {
    setLoading(true);
    try {
      const url = `${import.meta.env.VITE_REACT_APP_SERVER_URL}/thread/${encodeURIComponent(studentMentorPair)}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Failed to fetch thread details');
      }

      const data = await response.json();
      setEmails(data);
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [studentMentorPair]);

  useEffect(() => {
    fetchThreadDetails();
  }, [fetchThreadDetails]);

  // Function to determine message class based on sender
  const getMessageClass = (sender) => {
    return sender === 'Student' 
      ? 'bg-blue-100 border-blue-300' 
      : 'bg-green-100 border-green-300';
  };

  // Function to determine avatar letter based on sender
  const getAvatarLetter = (sender, email) => {
    if (sender === 'Student') {
      return email.charAt(0).toUpperCase();
    } else {
      return 'M'; // For Mentor
    }
  };

  // Function to get avatar background color
  const getAvatarBgColor = (sender) => {
    return sender === 'Student' ? 'bg-blue-500' : 'bg-green-500';
  };

  return (
    <div className="container mx-auto py-10 md:py-[75px] px-5">
      <div className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">
            {studentMentorPair ? `Communication Thread: ${studentMentorPair}` : 'Email Thread'}
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={() => fetchThreadDetails()} 
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Refresh
            </button>
            <button 
              onClick={() => navigate('/mentor-emails')} 
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300"
            >
              Back to All Threads
            </button>
          </div>
        </div>
        
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <p className="text-gray-500">Loading thread...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            <p>{error}</p>
            <p className="mt-2">
              <button 
                onClick={() => navigate('/mentor-emails')} 
                className="underline"
              >
                Return to email list
              </button>
            </p>
          </div>
        ) : emails.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No emails found in this thread.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {emails.map((email, index) => (
              <div 
                key={email._id || index} 
                className={`border rounded-lg p-4 ${getMessageClass(email.sender)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${getAvatarBgColor(email.sender)} flex items-center justify-center text-white font-semibold`}>
                    {getAvatarLetter(email.sender, email.student_email)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <div>
                        <p className="font-medium">
                          {email.sender === 'Student' ? email.student_email : email.mentor_email}
                        </p>
                        <p className="text-sm text-gray-500">
                          {formatDate(email.timestamp)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <h3 className="font-medium">{email.subject_line}</h3>
                      <div className="mt-2 text-sm whitespace-pre-wrap">
                        {formatEmailContent(email.email_body)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ThreadView;