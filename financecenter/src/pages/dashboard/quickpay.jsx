import React from "react";
import { filter } from 'lodash';
import moment from 'moment';
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
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../context/usermodel";


function applySortFilter(array,query) {
   const stabilizedThis = array.map((el, index) => [el, index]);
  if (query) {
    return filter(array, (_user) => JSON.stringify(_user).toString().indexOf(query.toString()) !== -1);
  }
   return stabilizedThis.map((el) => el[0]);
}

export function Quickpay() {
  const {person,setperson}=useContext(userContext)
 const[user,setusers]=useState([]);
 const[selectedRows,setSelectedRows]=useState([]);
 const[amount,setAmount]=useState(0);
 const [filterName, setFilterName] = useState('');
 const[USERLIST,setuserlist]=useState([]);
 useEffect(()=>{
  axios.post("https://impossible-gold-shoulder-pads.cyclic.app/getquicklist",{})
  .then(res=>setusers(res.data))
  .catch();
 },[])
const navigate=useNavigate();
 const passdata=({userId,name,collections})=>{
  return navigate('/dashboard/book',
  {state:{userId,name,collections}})
 }

 const handleFilterByName = (event) => {
  setFilterName(event.target.value);
};

 const filteredUsers = applySortFilter(user, filterName);
//  useEffect(()=>{
//   console.log(user);
//  })

const paynow=()=>{
  selectedRows.forEach((obj)=>{
    console.log(obj.doc.s_no,obj.doc.instalment,obj.doc.saving,obj.userId,obj.name)
    pay(obj.doc.s_no,obj.doc.instalment,obj.doc.saving,obj.userId,obj.name);
  })
}
const config = {     
  headers: { 'content-type': 'multipart/form-data' }
}
const pay=(s_no,amount,savings,userId,name)=>{
  const formdata=new FormData();
  formdata.append("s_no",s_no);
  // formdata.append("date",Date);
  formdata.append("useri",userId);
  formdata.append("usern",name)
  formdata.append("who",person.name);
  formdata.append("amount",amount)
  formdata.append("savings",savings);
  axios.post("https://impossible-gold-shoulder-pads.cyclic.app/updatestatus",formdata,config)
  .then(res=>{
    alert("Success");
    navigate('/dashboard/users')
  })
  .catch()
}


 const handleRowSelection = (doc,name,userId) => {
  const index = selectedRows.findIndex(obk=> obk.userId==userId);
  if (index > -1) {
    console.log("suhhgadbsh")
      setSelectedRows(selectedRows.filter((ele) =>  ele.userId !== userId));
      setAmount(amount-doc.instalment-(doc.saving/doc.s_no))
  } else {
    setSelectedRows([...selectedRows, {doc,name,userId}]);
    setAmount(amount+doc.instalment+(doc.saving/doc.s_no))
  }
}
console.log(selectedRows);
console.log(amount);

  return (
    <div className="mt-12 m-30 mb-8 flex flex-col gap-19">
       <Card className="p-300 ">
        <CardHeader variant="gradient" color="blue" className="flex-col h-auto mb-8 flex  md:flex-row xl:flex-row  gap-12 p-6 ">
          <Typography variant="h6" color="white">
            <input className="appearance-none block w-50 bg-white-100 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="text" placeholder="Search user" name="filter" onChange={handleFilterByName} />
          </Typography>
          <Button className="w-36 border" onClick={paynow}>Pay All</Button>
          <Typography variant="h6" color="white">
₹{amount}
          </Typography>
        </CardHeader>
        
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {["","Id","Name", "Mobile", "Amount", "Installment", "city","Action"].map(
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
                  let docToSelect=collections.find(ele=>{
                    const formattedDateString = moment(ele.date, 'D/M/YYYY').format('M/D/YYYY');
                    return formattedDateString==`${new Date().toLocaleDateString()}`})

                  return (
                    <tr key={name}>
                          <td className={className}>
                                <input 
                                className="w-6 h-6"
                                type="checkbox"
                                onChange={() => handleRowSelection(docToSelect,name,userId)}
                                checked={selectedRows.some(ss=>ss.userId===userId)}
                                /></td>
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
              View 
            </Button>
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

export default Quickpay;
