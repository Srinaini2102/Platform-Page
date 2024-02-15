import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ResearchProjectMain() {
  const [details, setDetails] = useState({});
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Fetch data from the backend API
    axios.get(`https://backend-ijva.onrender.com/api/village-project/${id}`)
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  useEffect(() => {
    // Fetch data from the backend API (check the URL, it might need /api)
    axios.get(`https://backend-ijva.onrender.com/village-project/${id}`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const listItems = data.map(datum => (
    <li key={datum._id}>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mr-10 mb-10 mt-10">
        <div className="p-5">
          <Link to={`/village/comp/${datum._id}`}>
            {/* Use Link instead of 'a' tag */}
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{datum.name}</h5>
          </Link>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Activity Date: {datum.date}</p>
          <Link to={`/village/comp/${datum._id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </Link>
        </div>
      </div>
    </li>
  ));

  return (
    <>
      <div className='back-img'>
        <h3 className='page-heading'>Village Projects</h3>
      </div>
      <p><b>Companies:</b>{details.companies}</p>
      <p><b>Project Status:</b>{details.status}</p>
      <p><b>Team:</b>{details.team}</p>
      <p><b>About:</b>{details.about}</p>
      <div className="container mx-auto">
        <ul className='flex align-center justify-center flex-wrap w-15'>{listItems}</ul>
      </div>
    </>
  );
}
