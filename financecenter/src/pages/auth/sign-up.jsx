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
} from "@material-tailwind/react";
import axios from "axios";

export function SignUp() {
  const[details,setDetails]=useState({});
const navigate=useNavigate();
  const handleChange=(evnt)=>{  
      const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setDetails(newInput)
    console.log(details);
  }
  const submit=(e)=>{
e.preventDefault();
axios.post(" https://impossible-gold-shoulder-pads.cyclic.app/addcollector",details)
.then(res=>{
  alert("collector created successfully")
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
              New Collector
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Name" name="name" size="lg" onChange={handleChange} />
            <Input type="phone" label="Phone" name="phone" size="lg" onChange={handleChange}/>
            <Input type="password" label="Password" name="password" size="lg" onChange={handleChange}/>
            {/* <div className="-ml-2.5">
              <Checkbox label="I agree the Terms and Conditions" />
            </div> */}
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={submit}>
              Register
            </Button>
            {/* <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account?
              <Link to="/auth/sign-in">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign in
                </Typography>
              </Link>
            </Typography> */}
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignUp;
