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
import { useNavigate } from "react-router-dom";
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
import { useEffect, useState } from "react";
import axios from "axios";
export function Profile() {
  const [details,setDetails]=useState([{address:"sgd",name:"sdg",phone:"345"}]);
useEffect(()=>{
 const  bb=async()=>{
   await axios.get("https://impossible-gold-shoulder-pads.cyclic.app/getprofile",{})
    .then(res=>setDetails(res.data))
    .catch();
  }
  bb();
  bb();
  console.log(details);
},[]);
const navigate=useNavigate();

  
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
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-2">
           
           <ProfileInfoCard
              title="Profile Information"
              description={details[0].address}
              details={{
                "Name": `${details[0].name}`,
                mobile: `${details[0].phone}`,
                email: "sdjothifinance@gmail.com",
                location: "India",
                website: "www.sdjothifinance.com"
              }}
              action={
                <Tooltip content="Edit Profile" >
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" onClick={e=>navigate('/auth/editprofile')}/>
                </Tooltip>
              }
            />
            <div className="grid-cols-2">
              <Typography variant="h6" color="blue-gray" className="mb-3">
              உறுப்பினர் உறுதிமொழி
              </Typography>
              {/* <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <Button variant="text" size="sm">
                        reply
                      </Button>
                    }
                  />
                ))}
              </ul> */}
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
          {/* <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Projects
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Architects design houses
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
              {projectsData.map(
                ({ img, title, description, tag, route, members }) => (
                  <Card key={title} color="transparent" shadow={false}>
                    <CardHeader
                      floated={false}
                      color="gray"
                      className="mx-0 mt-0 mb-4 h-64 xl:h-40"
                    >
                      <img
                        src={img}
                        alt={title}
                        className="h-full w-full object-cover"
                      />
                    </CardHeader>
                    <CardBody className="py-0 px-1">
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {tag}
                      </Typography>
                      <Typography
                        variant="h5"
                        color="blue-gray"
                        className="mt-1 mb-2"
                      >
                        {title}
                      </Typography>
                      <Typography
                        variant="small"
                        className="font-normal text-blue-gray-500"
                      >
                        {description}
                      </Typography>
                    </CardBody>
                    <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                      <Link to={route}>
                        <Button variant="outlined" size="sm">
                          view project
                        </Button>
                      </Link>
                      <div>
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
                      </div>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div> */}
        </CardBody>
      </Card>
    </>
  );
}

export default Profile;
