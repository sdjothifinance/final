import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
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
import { userContext } from "../../context/usermodel";
import { whoContext } from "../../context/whocontext";

export function SignIn() {
  const {who,setwho}=useContext(whoContext);
  const {person,setperson}=useContext(userContext);
  const[details,setDetails]=useState({user:"",pwd:""});
  const navigate=useNavigate();
    const handleChange=(evnt)=>{  
        const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
      setDetails(newInput)
      console.log(details);
    }

    useEffect(()=>{
      if(details.user && details.user.includes("admin")){
        setwho({w:"owner"})
        sessionStorage.setItem('w',JSON.stringify(who))
      }
      else if(details.user && details.user.includes("DJF")){
        setwho({w:"user"})
        sessionStorage.setItem('w',JSON.stringify(who))
      }
      else{
        setwho({w:"collector"})
        sessionStorage.setItem('w',JSON.stringify(who))
      }
      console.log(sessionStorage.getItem('w'))
    },[details])

    const submit=(e)=>{
  e.preventDefault();
 if(details.user!="" && details.pwd !="" && Object.keys(details).length >1){
  console.log(details)
  axios.post("https://impossible-gold-shoulder-pads.cyclic.app/login",details)
  .then(async(res)=>{
    if(Object.keys(res.data).length === 0)
      alert("user not found")
      
    else
            {sessionStorage.setItem('user',JSON.stringify(res.data));
            const bh=sessionStorage.getItem('user');
            const userObject = JSON.parse(bh);
            console.log(userObject); 
            await setperson(userObject);
          if(who.w=="owner")
            navigate('/dashboard/home')
          else if(who.w=="collector")
            navigate('/dashboard/users')
          else
              navigate('/dashboard/book')
        }
  })
  .catch()
 }
 console.log("bsh")
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
              Sign In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input type="username" label="User Id" name="user" size="lg" onChange={handleChange} />
            {details.user==""?<p className="text-sm text-red-800">Please enter username!</p>:<></>}
            <Input type="password" label="Password" name="pwd" size="lg" onChange={handleChange} />
            {details.pwd==""?<p className="text-sm text-red-800">Please enter password!</p>:<></>}

          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth onClick={submit}>
              Sign In
            </Button>
            {/* <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/auth/sign-up">
                <Typography
                  as="span"
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography> */}
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default SignIn;
