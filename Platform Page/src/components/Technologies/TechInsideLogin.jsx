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
    axios.get(`http://localhost:8000/api/technologies/${id}`)
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

  const tabsArray = [
    { label: 'General Detils', value: 'generalDetails', desc: challengeData.generalDetails },
    { label: 'Impact', value: 'impact', desc: challengeData.impact },
    { label: 'Resources', value: 'resources', desc: challengeData.resources },
    { label: 'Web Artciles', value: 'webArticles', desc: challengeData.webArticles },
  ];

  return (
    <>
      
      <div className='back-img'>
        <h3 className='page-heading'>{challengeData.provider}</h3>
      </div>
      
      

      
      
      

      <div className='flex flex-wrap items-center justify-between mb-10 mt-10 mr-10 ml-10'>
        <div><b>Website:</b> {challengeData.webArticlesURL}</div><br />
        <div><b>Affiliated:</b> {challengeData.affiliated}</div>
        <div><b>Location:</b> {challengeData.location}</div>
        <div><b>Sectors:</b> {challengeData.sector}</div>
        <div><b>Product Life Cycle:</b> {challengeData.projectLifeCycle}</div>
      </div>

      <div className='tabs-gc'>
        {tabsArray.length > 0 && (
          <Tabs id="custom-animation" value={id}>
            <TabsHeader>
            {tabsArray.map(({ label, value }) => (
              <Tab key={value} value={value}>
                {label}
              </Tab>
            ))}
            </TabsHeader>
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {tabsArray.map(({ value, desc }) => (
                <TabPanel key={value} value={value}>
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
          </Tabs>
        )}
      </div>
    </>
  );
}
