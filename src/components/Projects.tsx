'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from './ui/card'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
const Projects = () => {
    const projects = [{
        title:'iNotes [Web App]',
        img:'inotes.png',
        desc:'React + Node + MongoDb',
        url:'https://notes-9931.netlify.app',
        detail:`1. This project solves the problem of creating notes in a traditional notebooks. 
2. Technologies Used:
   i. Frontend: React.js, Redux, Bootstrap
  ii. Backend: Node.js, Express.js
  iii. Database: MongoDB
  iv. Authentication & Security: JWT for secure token based user authentication, bcrypt for
password encryption
  v. Additional Packages: Mongoose for data modeling, Axios for HTTP requests
3. User can create there notes using this online platform. 
4. This Web app provides the features such as signup, login, authorization using
JWT(Json Web Token), making notes shareable or private, unique links for shareable
notes that can be accessed by only who has created the account, editing and deleting of
notes, updating profile and password. 
5. This project uses ReactJs state management library called Redux for managing states
throughout the entire web application and bootstrap for responsive UI. 
6. GitHub Repository: 
   i. Frontend: https://github.com/prabhjot-arora31/notes31-f
  ii. Backend: https://github.com/prabhjot-arora31/Notes-App-Backend`
    },
{
    title:'Socio App [Web App]',
    img:'socio-app.png',
    desc:'Node + MongoDb + EJS',
    url:'https://socio-app-y5og.onrender.com',
    detail:`1. This web application is based on Nodejs. 
2. Technologies Used:
  i. Backend: Node.js, Express.js
  ii. Frontend: EJS (Embedding JavaScript Templating), CSS
  iii. Database: MongoDB
  iv. Security: bcrypt for password hashing.
   v. Real-time Communication:
Socket.io for live chat functionality
3. This web project demonstrates the normal Social media application where user can
create account, post anything he/she is interested in, send and accept connection
request and chat with there connections. 
4. The chats and posts are saved in real time in MongoDb Atlas.
5. GitHub Repository:
https://github.com/prabhjot-arora31/SOCIO_APP_BACKEND`
},
{
    title:'Chat Web App',
    img:'chat-app.png',
    desc:'Node + Socket',
    url:'https://main--chat-app-31.netlify.app/'
},
{
    title:'iNews Web App',
    img:'inews.png',
    desc:'Node + EJS + MongoDb',
    url:'https://news-portal-zeta-eight.vercel.app/'
}
]
  return (
    <div>
    <h1 className="font-bold text-2xl mb-7 text-center">Projects</h1>
        <div className='flex justify-center    flex-wrap items-center'>
            {
                projects.map((ele,id)=>{
                    return <Card style={{maxWidth:'400px',marginRight:"0.89rem" ,  marginBottom:'0.89rem' , backgroundColor:'#20242D' , border:'2px solid #0895A1'  , paddingBottom:'0.6rem'}} key={id}>
                        <Image alt='project image' src={require(`../${ele.img}`)} style={{overflow:'hidden',borderRadius:"10px"}}/>
                        <CardHeader className='font-bold text-xl text-white' >{ele.title}</CardHeader>
                        <CardContent>
                            <CardDescription style={{color:'white'}}>{ele.desc}</CardDescription>
                         <div><Button size={'sm'} style={{marginTop:'0.7rem',backgroundColor:'#0895A1',boxShadow:'0 0 13px #0895A1',color:'#20242D'}} onClick={()=>{
                            window.open(ele.url,'_blank')
                         }}>
                             Live URL
                            </Button> 
                            <Dialog>
  <DialogTrigger style={{marginTop:'0.7rem',border:'2px solid #0895A1',boxShadow:'0 0 13px #0895A1',backgroundColor:'#20242D',color:'white' , paddingTop:'0.38rem' , paddingBottom:'0.38rem' }} className='ml-5 px-4 rounded' >Know more</DialogTrigger>
  <DialogContent className='bg-[#20242D] text-white' style={{maxWidth:'300px'}}>
    <DialogHeader>
      <DialogTitle>{ele.title}</DialogTitle>
      <DialogDescription>
       {ele.detail}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

                            </div>
                        </CardContent>
                    </Card>
                })
            }
        </div>
    </div>
  )
}

export default Projects
