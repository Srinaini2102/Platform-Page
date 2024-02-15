import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Select, Option } from "@material-tailwind/react";

import Tabs from '../Tabs/TabsInside'
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
export default function Signup() {
  const [value, setValue] = React.useState("react");
  const history = useNavigate();
  
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

        const response = await axios.post("https://backend-ijva.onrender.com/signup", {
            username,
            email,
            password
        });

        if (response.data === "exist") {
            console.log(response.data);
        } else if (response.data === "success") {
          history("/home", { state: { id: email } });
        }
}

  return (
    <>
    
    
    <div className='sign'>
      <div className='sign1'>SmartVillage.GENAI</div>
      <div className='sign2'>Smart Village Movement Platform is a dynamic digital space where academia, government and corporations, startups and multinationals, come together to Co-innovate to solve grand challenges of rural emerging economies.
It is this co-Innovation environment and a spirit of collaboration which accelerates problem finding and solving challenges in rural economies.</div><br /> 
      <div className='sign3'><br /><span>Be a Changemaker</span> <br />
<span>Join us to be a part of the solution.</span><br />
Sign up on UC Berkeley - Smart Village Movement Platform and participate
in understanding and solving real world problems.</div>
      </div>
      
      <div className='dropdown-select'>
      <div className='dropdown'>
      <div className='dropdown-issue'>
      <div className='mr-7'>
      <Select
        label="Select Persona"
        value={value}
        onChange={(val) => setValue(val)} 
      >
        <Option value="html">Business</Option>
        <Option value="react">University</Option>
        <Option value="vue">Government</Option>
        <Option value="angular">Volunteer</Option>
        <Option value="svelte">Non-Profit Organization</Option>
      </Select>
      </div>
      <div className='mr-10'>
      <Select
        label="Select Region"
        value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="html">Andhra Pradesh</Option>
        <Option value="react">Arunachal Pradesh</Option>
        <Option value="vue">Gujarat</Option>
        <Option value="angular">Meghalaya</Option>
        
      </Select>
      </div>
      <div className='mr-10'>
      <Select
        label="Select Sectors"
        value={value}
        onChange={(val) => setValue(val)}
      >
        <Option value="html">Agriculture</Option>
        <Option value="react">Healthcare</Option>
        <Option value="vue">Transportation</Option>
        <Option value="angular">Water and Sanitation</Option>
        <Option value="svelte">Connectivity</Option>
        <Option value="svelte">Education</Option>
        <Option value="svelte">Energy</Option>
        <Option value="svelte">Livelihood</Option>
      </Select>
      </div>
      </div>
      <Card color="transparent" shadow={false}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submit}>
        <div className="mb-1 flex flex-col gap-6">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Name
          </Typography>
          <Input
          type="username"
          onChange={(e) => setName(e.target.value)}
            size="lg"
            placeholder="username"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Your Email
          </Typography>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            size="lg"
            placeholder="email"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            Password
          </Typography>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
        </div>
        <Checkbox
          label={
            <Typography
              variant="small"
              color="gray"
              className="flex items-center font-normal"
            >
              I agree the
              <a
                href="#"
                className="font-medium transition-colors hover:text-gray-900"
              >
                &nbsp;Terms and Conditions
              </a>
            </Typography>
          }
          containerProps={{ className: "-ml-2.5" }}
        />
        <Button className="mt-6" fullWidth type="submit">
          Sign Up
        </Button>
        <Typography color="gray" className="mt-4 text-center font-normal">
          Already have an account?{" "}
          <a href="#" className="font-medium text-gray-900">
            Sign In
          </a>
        </Typography>
      </form>
    </Card>
      </div>
      
    </div>
      
    


    
    </>
  )
}
