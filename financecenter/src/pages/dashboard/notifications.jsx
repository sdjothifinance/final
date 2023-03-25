import React from "react";
import { filter } from 'lodash';
import {
  Typography,
  Avatar,
  Tooltip,
  Progress,
  Alert,
  Card,
  CardHeader,
  Button,
  CardBody,
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


function applySortFilter(array,query) {
   const stabilizedThis = array.map((el, index) => [el, index]);
  // stabilizedThis.sort((a, b) => {
  //   const order = comparator(a[0], b[0]);
  //   if (order !== 0) return order;
  //   return a[1] - b[1];
  // });
  if (query) {
    return filter(array, (_user) => JSON.stringify(_user).toString().indexOf(query.toString()) !== -1);
  }
   return stabilizedThis.map((el) => el[0]);
}

export function Notifications() {
 const[user,setusers]=useState([]);
 const [filterName, setFilterName] = useState('');
 const[USERLIST,setuserlist]=useState([]);
 useEffect(()=>{
  axios.get("https://impossible-gold-shoulder-pads.cyclic.app/getallusers",{})
  .then(res=>setusers(res.data))
  .catch();
 },[])
  
  const deleteuser=(name)=>{
  const confirmBox = window.confirm(
    `Do you really want to delete this user(${name})?`
  )
  if(confirmBox===true){
    axios.post("https://impossible-gold-shoulder-pads.cyclic.app/deleteuser",{n:name})
    .then(res=>console.log(res))
    .catch()
  }
}
  
const navigate=useNavigate();
 const passdata=({userId,name,collections})=>{
  return navigate('/dashboard/book',
  {state:{userId,name,collections}})
 }

 const handleFilterByName = (event) => {
  setFilterName(event.target.value);
};
 const filteredUsers = applySortFilter(user, filterName);
 useEffect(()=>{
  console.log(filteredUsers);
 })

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
        <Link to='/dashboard/quickpay'><Button>Quick pay</Button></Link>
       <Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 flex flex-row gap-12 p-6">
          <Typography variant="h6" color="white">
            <input className="appearance-none block w-50 bg-white-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search user" name="filter" onChange={handleFilterByName} />
          </Typography>
        
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["Id","Name", "Mobile", "Amount", "Installment", "center","Action","Delete"].map(
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
              {filteredUsers.map(
                ({ userId,name,phone,amount,weeks,center,collections }, key) => {
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
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
                      <td className={className}>
                      <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {center}
                        </Typography>
                      </td>
                      <td className={className}>
                      <Button variant="gradient" fullWidth onClick={e=>passdata({ userId,name,collections })} >
              View and Pay
            </Button>
                      </td>
                    <td className={className}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" onClick={e=>deleteuser(userId)} style={{cursor:'pointer'}}>
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

export default Notifications;
