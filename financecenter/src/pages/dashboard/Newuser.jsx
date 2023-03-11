import {
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Avatar,
    Typography,
    Tabs,
    TabsHeader,
    Tab,
    Switch,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
  import axios from 'axios'
  import { PDFDownloadLink } from "@react-pdf/renderer";
  import Receipt from "../../widgets/receipt";
  import logo from '../../assets/logo.png'
  import {
    HomeIcon,
    ChatBubbleLeftEllipsisIcon,
    Cog6ToothIcon,
    PencilIcon,
  } from "@heroicons/react/24/solid";
  import { Link } from "react-router-dom";
  import { ProfileInfoCard, MessageCard } from "../../widgets/cards";
  import { platformSettingsData, conversationsData, projectsData } from "../../data";
import { useState } from "react";
  
  export function Newuser() {

    const[details,setDetails]=useState({userId:"",name:"",amount:0,center:"",weeks:0,startDate:"",savings:0,phone:0});

    const handleChange=(evnt)=>{  
        const newInput = (data)=>({...data, [evnt.target.name]:evnt.target.value})
      setDetails(newInput)
      console.log(details);
    }

    const submit=(e)=>{
        e.preventDefault();
        if(details.userId!=="" && details.name!=="" && details.amount!==0 && details.center!=="" && details.weeks!==0 && details.startDate!=="" && details.savings!==0 && details.phone!==0){
          axios.post("https://impossible-gold-shoulder-pads.cyclic.app/adduser",details)
          .then(res=>{

            alert("user registered successfully")
            setDetails({userId:" ",name:"",amount:0,center:"",weeks:0,startDate:"",savings:0,phone:0});
          })
          .catch(err=>console.log(err));
        }
        

    }
    const generateid=(e)=>{
        e.preventDefault();
        axios.get("https://impossible-gold-shoulder-pads.cyclic.app/generateid",{})
        .then(res=>setDetails(({...details, userId:res.data})))
        .catch();
    }

    return (
      <>
        <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
          <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
        </div>
        <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
          <CardBody className="p-4">
            <div className="mb-10 flex items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <Avatar
                 src={logo}
                 alt={logo}
                  size="xl"
                  className="rounded-lg shadow-lg shadow-blue-gray-500/40"
                />
                <div>
                  <Typography variant="h5" color="blue-gray" className="mb-1">
                   Sri Deiva Jothi Finance Yearly Investement
                  </Typography>
                 
                </div>
              </div>
             
            </div>
            <div className="grid ">
            <div className="gird-cols-1 md:grid-cols-2 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-2">
              <div className="w-100">
              <form className="w-full max-w-xlg w-100">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        User Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" value={details.name} id="grid-first-name" name="name" type="text" placeholder="Jane" onChange={handleChange}/>
      {details.name==""?<p className="text-sm text-red-800">please fill!</p>:<></>}
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Amount
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={details.amount} id="grid-last-name" name="amount" type="number" placeholder="Doe" onChange={handleChange}/>
      {details.amount==""?<p className="text-sm text-red-800">please fill!</p>:<></>}
    
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Savings
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={details.savings} id="grid-last-name" name="savings" type="number" placeholder="Doe" onChange={handleChange}/>
      {details.savings==""?<p className="text-sm text-red-800">please fill!</p>:<></>}
   
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        User Id
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" value={details.userId} type="text" name="userId" placeholder="Jane"  disabled onChange={handleChange}/>
      {details.userId==""?<p className="text-sm text-red-800">please fill!</p>:<></>}
     
    </div>
    <div className="w-full md:w-1/2 px-3">
    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        
      </label>
      <Button variant="gradient" fullWidth onClick={generateid}>
              generate id
            </Button>
         </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
        Mobile
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={details.phone} name="phone" id="grid-password" type="Number" placeholder="562752654" onChange={handleChange}/>
      {details.phone==""?<p className="text-sm text-red-800">please fill!</p>:<></>}
      
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-2">
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        Center
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={details.center} name="center" id="grid-city" type="text" placeholder="Albuquerque" onChange={handleChange}/>
      {details.center==""?<p className="text-sm text-red-800">please fill!</p>:<></>}
    
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        Instalments
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={details.weeks} name="weeks" id="grid-city" type="Number" placeholder="Albuquerque" onChange={handleChange}/>
      {details.weeks==""?<p className="text-sm text-red-800">please fill!</p>:<></>}
     
    </div>
    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
       Starting Date
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" value={details.startDate} name="startDate" id="grid-zip" type="date" placeholder="90210" onChange={handleChange}/>
      {details.startDate==""?<p className="text-sm text-red-800">please fill!</p>:<></>}
   
    </div>
  </div>
 {details.name!=""?<><Button><PDFDownloadLink document={<Receipt amd={details} />} fileName="somename.pdf">
  {({ blob, url, loading, error }) =>
    loading ? 'Loading document...' : 'Download now!'
  }
</PDFDownloadLink>
</Button></>:<></>}
  
  <Button variant="gradient" fullWidth onClick={submit}>
              Register
            </Button>
</form>
                </div>
              <div>
                <Typography variant="h6" color="blue-gray" className="mb-3">
                உறுப்பினர் உறுதிமொழி
                </Typography>
               
                <li>ஸ்ரீ தெய்வ ஜோதி எங்கள்  அமைப்பு</li>
                <li>இந்த அமைப்பில் கடன் பெறுவதன் மூலம் எங்கள் வாழ்வாதாரத்தினை மேம்படுத்துவோம்</li>
                <li>வாரம் தவறாமல் தவணை தொகையை செலுத்துவோம்</li>
                <Typography variant="h6" color="blue-gray" className="mb-3 mt-3">
                குறிக்கோள்
                </Typography>
                <p>ஒன்றிணைந்து சமுதாயத்தில் நிலையான பொருளாதாரத்தை அடைய செய்தல்</p>
                <Typography variant="h6" color="blue-gray" className="mb-3 mt-3">
                நோக்கம்
                </Typography>
                <p>சிறு கடன் திட்டத்தின் மூலம் கிராமப்புற மற்றும் நகர்ப்புற பெண்களின் குடும்ப முன்னேற்றம் மற்றும் தொழில் மேம்பாட்டினை பெற்றுத்தருதல்</p>
              </div>
            </div>
          
            </div>
          </CardBody>
        </Card>
      </>
    );
  }
  
  export default Newuser;
  
