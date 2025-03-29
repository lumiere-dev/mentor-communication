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

  return (
    <div className="container mx-auto py-10 md:py-[75px] px-5 max-w-6xl">
      <div className="bg-white rounded-lg border shadow-lg overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold">
                {studentMentorPair ? `Communication Thread` : 'Email Thread'}
              </h2>
              <p className="text-blue-100 mt-1">{studentMentorPair || 'View conversation history'}</p>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={() => fetchThreadDetails()} 
                className="px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-50 transition-all duration-200 font-medium flex items-center space-x-2 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                <span>Refresh</span>
              </button>
              <button 
                onClick={() => navigate('/mentor-emails')} 
                className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-all duration-200 font-medium flex items-center space-x-2 shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span>Back</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-5 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Error Loading Thread</h3>
              <p>{error}</p>
              <button 
                onClick={() => navigate('/mentor-emails')} 
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Return to email list
              </button>
            </div>
          ) : emails.length === 0 ? (
            <div className="text-center py-16">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500 text-lg">No emails found in this thread</p>
              <button 
                onClick={() => navigate('/mentor-emails')} 
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Return to email list
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="border-b pb-3 mb-6">
                <h3 className="text-lg font-medium text-gray-700">
                  {emails.length} {emails.length === 1 ? 'Message' : 'Messages'} in Conversation
                </h3>
              </div>
              
              {emails.map((email, index) => (
                <div 
                  key={email._id || index} 
                  className={`border rounded-lg shadow-sm overflow-hidden ${index === emails.length-1 ? 'ring-2 ring-blue-500 ring-opacity-50' : ''}`}
                >
                  <div className={`px-5 py-3 ${email.sender === 'Student' ? 'bg-blue-50 border-blue-100' : 'bg-green-50 border-green-100'} border-b flex justify-between items-center`}>
                    <div className="flex items-center">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full ${email.sender === 'Student' ? 'bg-blue-500' : 'bg-green-500'} flex items-center justify-center text-white font-semibold mr-3`}>
                        {email.sender === 'Student' ? email.student_email.charAt(0).toUpperCase() : 'M'}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          {email.sender === 'Student' ? email.student_email : email.mentor_email}
                        </p>
                        <div className="flex items-center text-xs text-gray-500 mt-0.5">
                          <span>{email.sender}</span>
                          {email.recipient_type === 'CC' && (
                            <span className="ml-2 px-1.5 py-0.5 bg-gray-200 text-gray-700 rounded text-xs font-medium">
                              CC
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">
                        {formatDate(email.timestamp)}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="font-semibold text-lg mb-2">{email.subject_line}</h3>
                    <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-wrap">
                      {formatEmailContent(email.email_body)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThreadView;