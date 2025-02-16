import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
} from "@material-tailwind/react";
import axios from "axios";

export function Editprofile() {
  const[details,setDetails]=useState({});
const navigate=useNavigate();
  const handleChange=(evnt)=>{  
      const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setDetails(newInput)
    console.log(details);
  }
  const submit=(e)=>{
e.preventDefault();
axios.post(" https://impossible-gold-shoulder-pads.cyclic.app/updateprofile",details)
.then(res=>{
  alert("updated successfully")
  navigate('/dashboard/home')
})
.catch()
  }
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
        className="absolute inset-0 z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 z-0 h-full w-full bg-black/50" />
      <div className="container mx-auto p-4">
        <Card className="absolute top-2/4 left-2/4 w-full max-w-[24rem] -translate-y-2/4 -translate-x-2/4">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
             Update Profile
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Person Name" name="name" size="lg" onChange={handleChange} />
            <Input type="phone" label="Phone" name="phone" size="lg" onChange={handleChange}/>
            <Textarea type="address" label="address" name="address" size="lg" onChange={handleChange}/>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={submit}>
              Update now
            </Button>          
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Editprofile;
