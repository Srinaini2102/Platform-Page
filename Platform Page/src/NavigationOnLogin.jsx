import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  LifebuoyIcon,
  PowerIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";

// profile menu component
const profileMenuItems = [
  {
    label: "My Dashboard",
    icon: UserCircleIcon,
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

export default function NavigationOnLogin() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/");
    window.location.reload();
    closeMenu();
  };

  return (
    <>
    <nav className="navbar">
    <div id="Logo" className='navbar-content'>SmartVillage.GENAI</div>
        <div id="prj" className='navbar-content'><a href="/">Home</a></div>
        <div id="gc" className='navbar-content'><a href="/grand-challenges">Grand Challenges</a></div>
        
<button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="ml-0 mr-5 text-white hover:text-amber-500  focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Projects<svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
</svg>
</button>


<div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mr-10">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      
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
        
      
      {/*Code for Dropdown*/} 
      <div>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
              {profileMenuItems.map(({ label, icon }, key) => {
                const isLastItem = key === profileMenuItems.length - 1;
                return (
                  <MenuItem
                    key={label}
                    onClick={label === "Sign Out" ? handleSignOut : closeMenu}
                    className={`flex items-center gap-2 rounded ${
                      isLastItem
                        ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                        : ""
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                      strokeWidth: 2,
                    })}
                    <Typography
                      as="span"
                      variant="small"
                      className="font-normal"
                      color={isLastItem ? "red" : "inherit"}
                    >
                      {label}
                    </Typography>
                  </MenuItem>
                );
              })}
            </MenuList>

    </Menu>
      </div>
      
        
    </nav>
    </>
  )
}
