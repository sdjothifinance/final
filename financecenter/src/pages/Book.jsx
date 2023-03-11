import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import { IconButton } from "@material-tailwind/react";
  import { Cog6ToothIcon } from "@heroicons/react/24/solid";
  import {
    Sidenav,
    DashboardNavbar,
    Configurator,
    Footer,
  } from "../widgets/layout";
  import routes from "../routes";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { userContext } from "../context/usermodel";
import { whoContext } from "../context/whocontext";
import axios from "axios";
import Receipt2 from "../widgets/receipt2";
import { PDFDownloadLink } from "@react-pdf/renderer";

  
  export function Book() {
    const{who,setwho}=useContext(whoContext);
    const{person,setperson}=useContext(userContext)
    const state=useLocation();
   const [details,setDetails]=useState([]);
   const[id,setid]=useState();
   const [total,settotal]=useState({});
    // console.log(state);


   
    
    useEffect(()=>{
      async function fetchdata(){
      console.log(person)
      console.log(who)
      }
     fetchdata();
    });

 useEffect(()=>{
if(who.w=="user"  || who.w==" "){

  axios.post("https://impossible-gold-shoulder-pads.cyclic.app/getoneuser",person)
  .then(res=>setDetails(res.data.collections))
  .catch();

}else{
setDetails(state.state.collections);
}
},[])
const config = {     
  headers: { 'content-type': 'multipart/form-data' }
}
const navigate=useNavigate();

let int=0,prin=0,inst=0;

const pay=(s_no,Date,amount,savings)=>{
  const formdata=new FormData();
  formdata.append("s_no",s_no);
  formdata.append("date",Date);
  formdata.append("useri",state.state.userId);
  formdata.append("usern",state.state.name)
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



const checkdate=(dd)=>{
  const today = new Date(Date.now());
  const selecteddate = new Date(dd);
  return selecteddate > today || selecteddate == today;
}

    return (
      <div className="mt-12 mb-8 flex flex-col gap-12">
         <Sidenav
        routes={routes}
        brandImg={
           "/img/logo-ct-dark.png"
        }
      />

      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        <Configurator />
        <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton>
       
        <Card>
        {/* <PDFDownloadLink document={<Receipt am={56} />} fileName="somename.pdf">
  {({ blob, url, loading, error }) =>
    loading ? 'Loading document...' : 'Download now!'
  }
</PDFDownloadLink> */}
      
      
          <CardHeader variant="gradient" color="blue" className="mb-8 mt-9 p-6">
          {(who.w=="user" || who.w==" " )?
            <Typography variant="h6" color="white" className="justifyContent-space-between">
            Name: {person.name} Id: {person.userId}
            </Typography>
            :
            <Typography variant="h6" color="white" className="justifyContent-space-between">
            Name :{state.state.name} Id:{state.state.userId}
            </Typography>}  
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["No" ,"Date", "Instalment", "Interest","Principal", "Outstanding","savings","Status","collector","Action"].map((el) => (
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
                {
                  
                details.map(
                  ({date,instalment,interest,principle,collector,outstanding,s_no,status,saving}, key) => {
                    int+=interest;
                    prin+=principle;
                    inst+=instalment;
                    // const dd=new Date(date);
                    // console.log(dd);
                    // console.log(new Date(ff).valueOf())
                    const className = `py-3 px-5 ${
                      key === details.length - 1
                        ? ""
                        :  "border-b border-blue-gray-50"
                    }`;
  
                    return (
                      <tr key={s_no}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                           
                            <div>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {s_no}
                              </Typography>
                             
                            </div>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {date}
                          </Typography>
                       
                        </td>
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {instalment}
                          </Typography>
                        
                        </td>
                   
                        <td className={className}>
                          <Typography className="text-xs font-semibold text-blue-gray-600">
                            {interest}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            {principle}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            {outstanding}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            {saving}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            {status}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            as="a"
                            href="#"
                            className="text-xs font-semibold text-blue-gray-600"
                          >
                            {collector}
                          </Typography>
                        </td>
                        <td className={className}>
                          {status=="paid"?<>
                          {who.w=="user"?
                          <><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-6 h-6">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        <PDFDownloadLink document={<Receipt2  date={date} ins={instalment} sav={saving}  name={person.name} who={collector} id={person.userId} />} fileName="somename.pdf">
                          {({ blob, url, loading, error }) =>
                            loading ? 'Loading document...' :   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
                            </svg>
                          }
                        </PDFDownloadLink>
                        
                          </>:
                          <>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="blue" className="w-6 h-6">
                          <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>
                        </>
                        }
                          
                          </>                 
:
         <> {who.w=="user"?
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6" >
             <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
             </svg>
            :
           <>
           {status=="paid"?<>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z" />
           </svg>
         
             </>
           :
           <Button className={ checkdate(date) ? "bg-green-800" : "bg-red-800"} onClick={e=>pay(s_no,Date,instalment,saving)}>Pay</Button>
          }
           </>
           } 
           </> 
}
               
                        
                        </td>

                      </tr>
                      
                    );
                  }
                )}
                  
              </tbody>
           
            </table>
            <th className="border-b border-blue-gray-50 py-3 px-5 text-left" >
                      <Typography
                        variant="small"
                        className="text-[11px] font-bold uppercase text-blue-gray-400"
                      >
                        Principal:{prin} Intrest:{int} Total instalment:{inst}
                      </Typography>
                    </th>
          </CardBody>
        </Card>
        </div>
           </div>
    );
  }
  
  export default Book;
  