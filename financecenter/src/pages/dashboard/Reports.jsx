import React from "react";
import { filter } from 'lodash';
import { find } from "lodash";
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
// import Collectionreport from "../../widgets/tables/Collectionreport";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "../../data";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {CSVLink} from "react-csv"


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


export function Reports() {
  let bbb="";
 const[user,setusers]=useState([{}]);
 const[user1,setusers1]=useState([{}]);
 const[user2,setusers2]=useState([{}]);
 const[amt1,setamt1]=useState(0);
 const [filterName, setFilterName] = useState('');
 const[USERLIST,setuserlist]=useState([]);
 const[filter,setfilter]=useState({
    type:"",
    fromdate:new Date().toISOString().slice(0, 10),
    enddate: new Date().toISOString().slice(0, 10),
 })
 const[d,setd]=useState();




 const headers = [
  { label: "Date", key: "Date" },
  { label: "amount", key: "amount" },
  { label: "userName", key: "userName" },
  { label: "userId", key: "userId" },
  {label:"collectionerName",key:"collectionerName"},
  {label:"savingamount",key:"savingamount"},
  {label:"totalamount",key:"totalamount"}
];

const header=[
  { label: "Date", key: "Date" },
  { label: "dept_amount", key: "dept_amount" },
  { label: "userName", key: "userName" },
  { label: "userId", key: "userId" },
  {label:"totalamount",key:"totalamount"}
]
// let csvReport;
  
//  csvReport = {
//   data: [...user2,{totalamount:"dbjh"}],
//   headers: headers,
//   filename: `${new Date(filter.fromdate)}.csv`
// };

 useEffect(()=>{

    if(filter.type==="Sales report"){
        axios.post("https://impossible-gold-shoulder-pads.cyclic.app/getdebtlist",filter)
        .then(res=>setusers(res.data))
        .catch();
    }
    else if(filter.type==="Pending report"){
        axios.post("https://impossible-gold-shoulder-pads.cyclic.app/getpendinglist",filter)
        .then(res=>setusers1(res.data))
        .catch();
      
    }
    else if(filter.type==="Collection report"){
        axios.post("https://impossible-gold-shoulder-pads.cyclic.app/getpaidlist2",filter)
        .then(res=>setusers2(res.data))
        .catch();
    }
console.log(user2)
console.log(user)
// console.log(amt)
 },[filter])


const navigate=useNavigate();


 const handleFilterByName = (event) => {
  setFilterName(event.target.value);
};
let amt=0;
// useEffect(()=>{
// // amt=0;
// user.map((map)=>{
//   amt+=map.amount;
// })
// })
//  const filteredUsers = applySortFilter(user, filterName);
//  const filteredUsers1 = applySortFilter(user1, filterName);
//  const filteredUsers2 = applySortFilter(user2, filterName);



 useEffect(()=>{
  bbb=new Date(filter.fromdate).toLocaleDateString();
const bb = bbb.split("/");
let temp=bb[0];
bb[0]=bb[1];
bb[1]=temp;
bbb=bb.join("/");
setd(bbb);
console.log(bbb);
 })

 const hh=(a)=>{
    console.log((a))
 }

 const handleChange=(evnt)=>{
    const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
    setfilter(newInput)
    console.log(filter)
 }

  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
        <div className="mt-12 mb-8 flex lg:flex-row md:flex-col sm:flex-col gap-12">
        
        
        <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        Filter:
                      </Typography> 
                      <div className="w-1/6">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
       Report type
      </label>
      <Select
      label="report type"
  name="type"
  value={filter.type}
  onChange={e=>setfilter({...filter,type:e})}
>
  <Option value="Collection report">Collection report</Option>
  <Option value="Sales report">Sales report</Option>
  <Option value="Pending report">Pending report</Option>
</Select>
      </div>
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
       From Date
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  defaultValue={filter.fromdate}  name="fromdate" id="grid-zip" type="date" placeholder="90210" onChange={handleChange}/>
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
       End Date
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={filter.enddate}  name="enddate" id="grid-zip" type="date" placeholder="90210" onChange={handleChange}/>
    </div>
    {/* <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
       center
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"  defaultValue={filter.center}  name="center" id="grid-zip" type="text" placeholder="anjac" onChange={handleChange}/>
    </div> */}
        </div>
        {filter.type==="Collection report"?<Card>
        <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            {filter.type}
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
          <table className="w-full min-w-[640px] table-auto">
            <thead>
              <tr>
                {
               ["Date","UserName", "UserId", "Amount","collector"].map(
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
              {user2.map(
                ({
                    Date,userId,userName,collectionerName,amount,_id}, key) => {
                      amt+=amount;
                      
                  const className = `py-3 px-5 ${
                    key === projectsTableData.length - 1
                      ? ""
                      : "border-b border-blue-gray-50"
                  }`;
                  
                  return (
                    <tr key={_id}>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {Date}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                      <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {userName}
                        </Typography>
                      </td>
                      <td className={className}>
                        <Typography
                          variant="small"
                          className="text-xs font-medium text-blue-gray-600"
                        >
                          {userId}
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
                        {collectionerName}
                        </Typography>
                      </td>
                    </tr>
                    
                  );
                }
              )}
               <td >
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                        Total amount:{amt}
                        
                        </Typography>
                      </td>
        <Button>  <CSVLink className="btn btn-primary" data={[...user2,{totalamount:amt}]} headers={headers} filename={`${new Date(filter.fromdate)}.csv`}>Export to CSV</CSVLink></Button>

            </tbody>
          </table>
        </CardBody>
      </Card>
      
    :
    filter.type==="Sales report"?
    <Card>
    <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
    <Typography variant="h6" color="white">
            {filter.type}
          </Typography>
    </CardHeader>
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
            ({ userId,userName,dept_amount,Date }, key) => {
              amt+=dept_amount;
              const className = `py-3 px-5 ${
                key === projectsTableData.length - 1
                  ? ""
                  : "border-b border-blue-gray-50"
              }`;

              return (
                <tr key={userId}>
                  <td className={className}>
                    <div className="flex items-center gap-4">
                      
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {Date}
                      </Typography>
                    </div>
                  </td>
                  <td className={className}>
                  <Typography
                      variant="small"
                      className="text-xs font-medium text-blue-gray-600"
                    >
                      {userName}
                    </Typography>
                  </td>
                  <td className={className}>
                    <Typography
                      variant="small"
                      className="text-xs font-medium text-blue-gray-600"
                    >
                      {userId}
                    </Typography>
                  </td>
                  <td className={className}>
                    <div className="w-10/12">
                      <Typography
                        variant="small"
                        className="mb-1 block text-xs font-medium text-blue-gray-600"
                      >
                        {dept_amount}
                      </Typography>
                     
                    </div>
                  </td>
                 
                </tr>
              );
            }
          )}
              <td >
                        <Typography
                          as="a"
                          href="#"
                          className="text-xs font-semibold text-blue-gray-600"
                        >
                        Total amount:   {amt}
                        {console.log(amt)}
                        </Typography>
                      </td>
                      <Button>  <CSVLink className="btn btn-primary" data={[...user,{totalamount:amt}]} headers={header} filename={`${new Date(filter.fromdate)}.csv`}>Export to CSV</CSVLink></Button>

        </tbody>
      </table>
    </CardBody>
  </Card>
  :
  <Card>
  <CardHeader variant="gradient" color="blue" className="mb-8 p-6">
  <Typography variant="h6" color="white">
            {filter.type}
          </Typography>
  </CardHeader>
  <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
    <table className="w-full min-w-[640px] table-auto">
      <thead>
        <tr>
          {
         ["Date","UserName", "UserId", "Amount","center"].map(
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
        {user1.map(
          ({ userId,name,phone,collections,center }, key) => {
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
                    {d}
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
                    {userId}
                  </Typography>
                </td>
                <td className={className}>
                  <div className="w-10/12">
                    <Typography
                      variant="small"
                      className="mb-1 block text-xs font-medium text-blue-gray-600"
                    >
                      {(collections)?(collections.map(record => record.date==d?record.instalment:"")):console.log(d)}
             </Typography>
                  </div>
                </td>
                <td className={className}>
                  <Typography
                    variant="small"
                    className="text-xs font-medium text-blue-gray-600"
                  >
                    {center}
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
    }
       

    </div>
  );
}

export default Reports;
