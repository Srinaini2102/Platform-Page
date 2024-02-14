import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Footer from './Footer';
import GC from './pages/GC';
import ResearchProjects from './pages/ResearchProjects';
import UniversityProjects from './pages/UniversityProjects';
import VillageProjects from './pages/VillageProjects';
import Technologies from './pages/Technologies';
import Collaborate from './pages/Collaborate';
import GCInsideNoLogin from './components/Grand Challenges/GCInsideNoLogin';
import GCInsideLogin from './components/Grand Challenges/GCPageInsideLogin';
import TechInsideLogin from './components/Technologies/TechInsideLogin';
import InsideCollab from './components/Collaborate/InsideCollab';
import Chal from './pages/Chal';
import Home from './pages/Home';
import Navigation from './Navigation';
import NavigationOnLogin from './NavigationOnLogin';
import Signup from './components/Signup/Signup';
import Login from './components/Login/my';
import ChallengeAccept from './components/ChallengeAccept/ChallengeAccept';
import VP from './components/Value Proposition/VP';
import ResearchProject from './components/Projects/ResearchProject';
import ResearchProjectComp from './components/Projects/ResearchProjectComponent';

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
