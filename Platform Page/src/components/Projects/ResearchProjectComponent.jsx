import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {
  Tabs,
  TabsBody,
  Tab,
  TabPanel,
  TabsHeader,
} from "@material-tailwind/react";

export default function TechInsideLogin() {
  const { id } = useParams();
  const [challengeData, setChallengeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data for the specific challenge based on the id parameter
    axios.get(`http://localhost:8000/api/research-project/comp/${id}`)
      .then(response => {
        setChallengeData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching challenge data:', error);
        setError(error.message || 'Error loading challenge data');
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className='flex items-center justify-center h-20 font-bold '>
        <h5>{challengeData.name}</h5>
      </div>
      <img className="rounded-t-lg" src={challengeData.imageUrl} alt="image" />

      <div className='flex flex-wrap items-center justify-between mb-16 mr-10 ml-10'>
        <div><b>Category:</b> {challengeData.category}</div>
        <div><b>Project Type:</b> {challengeData.projectType}</div>
        <div><b>Status :</b> {challengeData.status}</div>
        <div><b>Content:</b> {challengeData.content}</div>
      </div>
    </>
  );
}
