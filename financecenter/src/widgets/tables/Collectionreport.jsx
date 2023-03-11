import React from 'react'
import { useState } from 'react';
import {
    Typography,
    Avatar,
    Tooltip,
    Progress,
    Alert,
    Card,
    Select,
    Option,
    CardHeader,
    Button,
    CardBody,
  } from "@material-tailwind/react";
function Collectionreport(props) {
    const [user,setuser]=useState(props.data);
    console.log(user)
   

  return (
    <div> 
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {
               ["Date","UserName", "UserId", "Amount"].map(
                  (el) => (
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
                  )
                )}
              </tr>
            </thead>
            <tbody>
              {user.map(
                ({ userId,name,phone,amount,weeks,city,collections }, key) => {
                  const className = `py-3 px-5 ${
                    key === user.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;

                  return (
                    <tr key={name}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {userId}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                      <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {name}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {phone}
                        </Typography>
                      </td>
                      <td className={className}>
                        <div className="w-10/12">
                          <Typography
                            variant="small"
                            className="mb-1 block text-xs font-medium text-blue-gray-600"
                          >
                            {amount}
                          </Typography>
                         
                        </div>
                      </td>
                      <td className={className}>
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                        {weeks}
                        </Typography>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
      
</div>
  )
}

export default Collectionreport