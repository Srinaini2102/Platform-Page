import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Footer from './src/Footer';
import GC from './src/pages/GC';
import ResearchProjects from './src/pages/ResearchProjects';
import UniversityProjects from './src/pages/UniversityProjects';
import VillageProjects from './src/pages/VillageProjects';
import Technologies from './src/pages/Technologies';
import Collaborate from './src/pages/Collaborate';
import GCInsideNoLogin from './src/components/Grand Challenges/GCInsideNoLogin';
import GCInsideLogin from './src/components/Grand Challenges/GCPageInsideLogin';
import TechInsideLogin from './src/components/Technologies/TechInsideLogin';
import InsideCollab from './src/components/Collaborate/InsideCollab';
import Chal from './src/pages/Chal';
import Home from './src/pages/Home';
import Navigation from './src/Navigation';
import NavigationOnLogin from './src/NavigationOnLogin';
import Signup from './src/components/Signup/Signup';
import Login from './src/components/Login/my';
import ChallengeAccept from './src/components/ChallengeAccept/ChallengeAccept';
import VP from './src/components/Value Proposition/VP';
import ResearchProject from './src/components/Projects/ResearchProject';
import ResearchProjectComp from './src/components/Projects/ResearchProjectComponent';
import VillageProjectComp from './src/components/Projects/VillageProjectComponent';
import VillageProject from './src/components/Projects/VillageProject';

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setAuthenticated(!!token);
    console.log("Token from localStorage:", token);
  }, []);
  


  return (
    <>
      <BrowserRouter>
        {authenticated ? <NavigationOnLogin /> : <Navigation />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/grand-challenges" element={<GC />} />
          <Route path="/research-projects" element={<ResearchProjects />} />
          <Route path="/university-projects" element={<UniversityProjects />} />
          <Route path="/village-projects" element={<VillageProjects />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/post-challenges" element={<Chal />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/challenge-post' element={<ChallengeAccept/>}/>
          <Route path='/value-proposition' element={<VP/>}/>
          <Route
            path="/details/:id"
            element={authenticated ? <GCInsideLogin /> : <GCInsideNoLogin />}
          />
          <Route
            path="/technologies/:id"
            element={<TechInsideLogin />}/>
          <Route
            path="/collab/:id"
            element={<InsideCollab />}/>
          
          <Route
            path="/research-project/:id"
            element={<ResearchProject />}/>
          <Route
            path="/research-project/comp/:id"
            element={<ResearchProjectComp />}/>
          <Route
            path="/village-project/:id"
            element={<VillageProject />}/>
          <Route
            path="/village/comp/:id"
            element={<VillageProjectComp />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
