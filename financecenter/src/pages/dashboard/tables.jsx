import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
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



export function Tables() {
  const[user,setuser]=useState([]);
  useEffect(()=>{
    axios.get(" https://impossible-gold-shoulder-pads.cyclic.app/getcollector",{})
    .then(res=>setuser(res.data))
    .catch()
  },[])
  const deleteuser=(name)=>{
    axios.post("https://impossible-gold-shoulder-pads.cyclic.app/deletecollector",{n:name})
    .then(res=>console.log(res))
    .catch()
  }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Link to='/auth/sign-up'>
       <Button className="flex w-1/8" variant="gradient" color="blue" >Add collector  +</Button>
       </Link>
      <Card>
       
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Collectioner's
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Name" ,"phone", "password", "Action"].map((el) => (
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
                ({ name ,phone, password,works }, key) => {
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
                              {name}
                            </Typography>
                            {/* <Typography className="text-xs font-normal text-blue-gray-500">
                              {email}
                            </Typography> */}
                          </div>
                        </div>
                      </td>
                      <td className={className}>
                        <Typography className="text-xs font-semibold text-blue-gray-600">
                          {phone}
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
                          {password}
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
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={e=>deleteuser(name)}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>

            
                      
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

export default Tables;
