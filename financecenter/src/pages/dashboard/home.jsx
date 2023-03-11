import React from "react";
import { useContext,useEffect } from "react";
import {
  BanknotesIcon,
  UserPlusIcon,
  UserIcon,
  ChartBarIcon,
  ReceiptRefundIcon
} from "@heroicons/react/24/solid";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "../../widgets/cards";
import { StatisticsChart } from "../../widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
} from "../../data";
import { userContext } from "../../context/usermodel";
import axios from "axios";
import { useState } from "react";

export function Home() {
  const {person,setperson}=useContext(userContext);
  const[val1,setval1]=useState(0);
  const[val2,setval2]=useState(0);
  const[val3,setval3]=useState(0);
  const[val4,setval4]=useState(0);
  const[val5,setval5]=useState(0);
  const options = {
    day: '2-digit',
    month: 'numeric',
    year: 'numeric',
  };
  useEffect(() => {
    async function updates() {
    await axios.post("https://impossible-gold-shoulder-pads.cyclic.app/getpaidlist",{date:new Date(Date.now()).toLocaleDateString()})
     .then(res=>{
      setval1(res.data.totalAmount)})
    await axios.post("https://impossible-gold-shoulder-pads.cyclic.app/getexpenditureamd",{date:new Date(Date.now()).toLocaleDateString()})
      .then(res=>{
       setval4(res.data.totalAmount)})
    await axios.post("https://impossible-gold-shoulder-pads.cyclic.app/todaysale",{date:new Date(Date.now()).toLocaleDateString()})
     .then(res=>setval2(res.data.ts))
    await axios.get("https://impossible-gold-shoulder-pads.cyclic.app/wallet",{})
     .then(res=>setval5(res.data.wallet))
    await  axios.post("https://impossible-gold-shoulder-pads.cyclic.app/todayuser",{date:new Date(Date.now()).toLocaleDateString()})
     .then(res=>setval3(res.data.todayuser))
    }
   updates();
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-12 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
      <Card >
      <CardHeader
        variant="gradient"
        color="blue"
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {React.createElement(BanknotesIcon, {
              className: "w-6 h-6 text-white",
            })}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
        Today collections
        </Typography>
        <Typography variant="h4" color="blue-gray">
        {val1}
        </Typography>
      </CardBody>
      
        <CardFooter className="border-t border-blue-gray-50 p-4">
        <Typography className="font-normal text-blue-gray-600">
                {/* <strong className="text-green-400">24</strong>
                &nbsp;jkasgbjfdb */}
                Today total Collection amount
              </Typography>
        </CardFooter>
      
    </Card>
    <Card>
      <CardHeader
        variant="gradient"
        color="amber"
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {React.createElement(UserIcon, {
              className: "w-6 h-6 text-white",
            })}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
        Today Sales
        </Typography>
        <Typography variant="h4" color="blue-gray">
        {val2}
        </Typography>
      </CardBody>
      
        <CardFooter className="border-t border-blue-gray-50 p-4">
        <Typography className="font-normal text-blue-gray-600">
                {/* <strong className="text-green-400">24</strong>
                &nbsp;jkasgbjfdb */}
                Today total Debt Amount
              </Typography>
        </CardFooter>
      
    </Card>
    <Card>
      <CardHeader
        variant="gradient"
        color="pink"
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {React.createElement(UserPlusIcon, {
              className: "w-6 h-6 text-white",
            })}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
        Today Users
        </Typography>
        <Typography variant="h4" color="blue-gray">
        {val3}
        </Typography>
      </CardBody>
      
        <CardFooter className="border-t border-blue-gray-50 p-4">
        <Typography className="font-normal text-blue-gray-600">
                {/* <strong className="text-green-400">24</strong>
                &nbsp;jkasgbjfdb */}
                Today joint new users
              </Typography>
        </CardFooter>
      
    </Card>
    
    {/* <Card>
      <CardHeader
        variant="gradient"
        color="red"
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {React.createElement(UserPlusIcon, {
              className: "w-6 h-6 text-white",
            })}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
        Users Savings Amount
        </Typography>
        <Typography variant="h4" color="blue-gray">
        {val3}
        </Typography>
      </CardBody>
      
        <CardFooter className="border-t border-blue-gray-50 p-4">
        <Typography className="font-normal text-blue-gray-600">
                Total users savings Amount
              </Typography>
        </CardFooter>    
    </Card> */}


    <Card>
      <CardHeader
        variant="gradient"
        color="green"
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {React.createElement(BanknotesIcon, {
              className: "w-6 h-6 text-white",
            })}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
        Wallet
        </Typography>
        <Typography variant="h4" color="blue-gray">
        {val5}
        </Typography>
      </CardBody>
        <CardFooter className="border-t border-blue-gray-50 p-4">
        <Typography className="font-normal text-blue-gray-600">
                {/* <strong className="text-green-400">24</strong>
                &nbsp;jkasgbjfdb */}
                Our Treasure
              </Typography>
        </CardFooter>    
    </Card>
    <Card>
      <CardHeader
        variant="gradient"
        color="red"
        className="absolute -mt-4 grid h-16 w-16 place-items-center"
      >
        {React.createElement(ReceiptRefundIcon, {
              className: "w-6 h-6 text-white",
            })}
      </CardHeader>
      <CardBody className="p-4 text-right">
        <Typography variant="small" className="font-normal text-blue-gray-600">
        Expenditure
        </Typography>
        <Typography variant="h4" color="blue-gray">
        {val4}
        </Typography>
      </CardBody>
        <CardFooter className="border-t border-blue-gray-50 p-4">
        <Typography className="font-normal text-blue-gray-600">
                {/* <strong className="text-green-400">24</strong>
                &nbsp;jkasgbjfdb */}
                Today Expenditure
              </Typography>
        </CardFooter>    
    </Card>
    

{/* 




        {statisticsCardsData.map(({ icon, title, footer, ...rest }) => (
          <StatisticsCard
            key={title}
            {...rest}
            value={val1}
            title={title}
            icon={React.createElement(icon, {
              className: "w-6 h-6 text-white",
            })}
            footer={
              <Typography className="font-normal text-blue-gray-600">
                <strong className={footer.color}>{footer.value}</strong>
                &nbsp;{footer.label}
              </Typography>
            }
          />
        ))} */}
      </div>
      {/* <div className="mb-6 grid grid-cols-1 gap-y-12 gap-x-6 md:grid-cols-2 xl:grid-cols-3">
        {statisticsChartsData.map((props) => (
          <StatisticsChart
            key={props.title}
            {...props}
            // footer={
            //   <Typography
            //     variant="small"
            //     className="flex items-center font-normal text-blue-gray-600"
            //   >
                
            //     <ClockIcon strokeWidth={2} className="h-4 w-4 text-inherit" />
            //     &nbsp;{props.footer}
            //   </Typography>
            // }
          />
        ))}
      </div> */}
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* <Card className="overflow-hidden xl:col-span-2">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-between p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Projects
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <CheckIcon strokeWidth={3} className="h-4 w-4 text-blue-500" />
                <strong>30 done</strong> this month
              </Typography>
            </div>
            <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["companies", "members", "budget", "completion"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            <Avatar src={img} alt={name} size="sm" />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            {budget}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="w-10/12">
                            <Typography
                              variant="small"
                              className="mb-1 block text-xs font-medium text-blue-gray-600"
                            >
                              {completion}%
                            </Typography>
                            <Progress
                              value={completion}
                              variant="gradient"
                              color={completion === 100 ? "green" : "blue"}
                              className="h-1"
                            />
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card> */}
        {/* <Card>
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 p-6"
          >
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Orders Overview
            </Typography>
            <Typography
              variant="small"
              className="flex items-center gap-1 font-normal text-blue-gray-600"
            >
              <ArrowUpIcon
                strokeWidth={3}
                className="h-3.5 w-3.5 text-green-500"
              />
              <strong>24%</strong> this month
            </Typography>
          </CardHeader>
          <CardBody className="pt-0">
            {ordersOverviewData.map(
              ({ icon, color, title, description }, key) => (
                <div key={title} className="flex items-start gap-4 py-3">
                  <div
                    className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                      key === ordersOverviewData.length - 1
                        ? "after:h-0"
                        : "after:h-4/6"
                    }`}
                  >
                    {React.createElement(icon, {
                      className: `!w-5 !h-5 ${color}`,
                    })}
                  </div>
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="block font-medium"
                    >
                      {title}
                    </Typography>
                    <Typography
                      as="span"
                      variant="small"
                      className="text-xs font-medium text-blue-gray-500"
                    >
                      {description}
                    </Typography>
                  </div>
                </div>
              )
            )}
          </CardBody>
        </Card> */}
      </div>
    </div>
  );
}

export default Home;
