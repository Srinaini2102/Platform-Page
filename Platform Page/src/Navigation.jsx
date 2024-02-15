import React from 'react'

export default function Navigation() {
  return (
    <>
    <nav className="navbar">
        
           <div id="Logo" className='navbar-content'>SmartVillage.GENAI</div>
        
        <div id="prj" className='navbar-content'><a href="/">Home</a></div>
        <div id="gc" className='navbar-content'><a href="/grand-challenges">Grand Challenges</a></div>
        
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="ml-0 mr-5 text-white hover:text-amber-500  focus:outline-none focus:ring-blue-300 font-large rounded-lg text-m px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Projects<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mr-10">
    <ul class="py-2 text-l text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      
      <li>
        <a href="/research-projects" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Research Projects</a>
      </li>
      <li>
        <a href="/university-projects" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">University Projects</a>
      </li>
      <li>
        <a href="/village-projects" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Village Projects</a>
      </li>
    </ul>
</div>

        <div id="tech" className='navbar-content'><a href="/technologies">Technologies</a></div>
        <div id="collab" className='navbar-content'><a href="/collaborate">Collaborate</a></div>
        <div id="dash" className='navbar-content'><a href="/dashboard">Dashboard</a></div>
        <div id="post" className='navbar-content'><a href="/post-challenges">Post a Challenge</a></div>
        <div className='search'>
          <input type="search" placeholder='Search' /></div>    
        
      <div id="login" className='logeen'><a href="/login">Login</a></div>
      
        
    </nav>
    </>
  )
}
