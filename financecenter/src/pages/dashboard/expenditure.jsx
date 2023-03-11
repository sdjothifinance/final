import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Textarea,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button,
} from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import { EllipsisVerticalIcon,RiDeleteBin5Fill } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "../../data";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { userContext } from "../../context/usermodel";




export function Expenditure() {
    const {person,setperson}=useContext(userContext);
  const[user,setuser]=useState([]);
  const[details,setDetails]=useState({who:person.name});

    const handleChange=(evnt)=>{  
        const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
        setDetails(newInput)
        console.log(details);
    }

    const submit=()=>{
        axios.post("https://impossible-gold-shoulder-pads.cyclic.app/addexpenditure",details)
        .then(res=>console.log(res))
        .catch()
        setDetails({amount:"",description:""})
        // setDetails({description:""})
    }

  useEffect(()=>{
    axios.get(" https://impossible-gold-shoulder-pads.cyclic.app/getexpenditure",{})
    .then(res=>setuser(res.data))
    .catch()
  },[])
  

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
     
       <Card className="mx-3 mt-6 mb-6 lg:mx-4">
       <CardBody className="p-4">
       <form className="w-full max-w-xlg w-100">
  <div className="flex flex-wrap -mx-3 mb-6">
  
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Amount
      </label>
      <input className="appearance-none block w-full bg-white-200 text-gray-700 border border-black-800 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={details.amount} id="grid-last-name" name="amount" type="Number" placeholder="Amount" onChange={handleChange}/>
      {details.amount=="0"?<p className="text-sm text-red-800">Please enter amount!</p>:<></>}
    </div>
  </div>
  <div className="w-97 mb-3">
      <Textarea label="Description" name="decription" value={details.description} onChange={handleChange}/>
    </div>
  <Button variant="gradient" fullWidth onClick={submit} >
              Submit
            </Button>
</form>
</CardBody>
       </Card>
      <Card>
       
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
           Old Expenditure
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Date" ,"Spender", "Amount", "Description"].map((el) => (
                  <th
                    key={el}
                    className="border-b border-blue-gray-50 py-3 px-5 text-left"
                  >
                    <Typography
                      variant="small"
                      className="text-[11px] font-bold uppercase text-blue-gray-400"
                    >
                      {el}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {user.map(
                ({ date,who,description,amount }, key) => {
                  const className = `py-3 px-5 ${
                    key === authorsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          {/* <Avatar src={img} alt={name} size="sm" /> */}
                          <div>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-semibold"
                            >
                              {date}
                            </Typography>
                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography> */}
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {who}
                        </Typography>
                       
                      </td>
                      {/* <td className={className}>
                        <Chip
                          variant="gradient"
                          color={online ? "green" : "blue-gray"}
                          value={online ? "online" : "offline"}
                          className="py-0.5 px-2 text-[11px] font-medium"
                        />
                      </td> */}
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {amount}
                        </Typography>
                      </td>
                      {/* <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                          {works}
                        </Typography>
                      </td> */}
                      <td className={className}>
                      <Typography className="text-xs font-semibold text-blue-gray-600">
                          {description}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      </Card>
      
         </div>
  );
}

export default Expenditure;
