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
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from './ui/drawer'
const Projects = () => {
    const projects = [{
        title:'iNotes [Web App]',
        img:'inotes.png',
        desc:'React + Node + MongoDb',
        url:'https://notes-9931.netlify.app',
        detail:[
          "This project solves the problem of creating notes in traditional notebooks.",
          {
            TechnologiesUsed:`   i. Frontend: React.js, Redux, Bootstrap
  ii. Backend: Node.js, Express.js
  iii. Database: MongoDB
  iv. Authentication & Security: JWT for secure token based user authentication, bcrypt for
password encryption
  v. Additional Packages: Mongoose for data modeling, Axios for HTTP requests`
          },
          "User can create their notes using this online platform.",
          "This Web app provides features such as signup, login, authorization using JWT (Json Web Token), making notes shareable or private, unique links for shareable notes that can be accessed only by those who have created the account, editing and deleting of notes, updating profile and password.",
          "This project uses ReactJs state management library called Redux for managing states throughout the entire web application and Bootstrap for responsive UI.",
          {
            GitHubRepository: [
              {
                Frontend: "https://github.com/prabhjot-arora31/notes31-f"
              },
              {
                Backend: "https://github.com/prabhjot-arora31/Notes-App-Backend"
              }
            ]
          }
        ]
    },
{
    title:'Socio App [Web App]',
    img:'socio-app.png',
    desc:'Node + MongoDb + EJS',
    url:'https://socio-app-y5og.onrender.com',
    detail:['This web application is based on Nodejs.',`This web project demonstrates the normal Social media application where user can
create account, post anything he/she is interested in, send and accept connection
request and chat with there connections`,'The chats and posts are saved in real time in MongoDb Atlas',{
  GitHubRepository :'yes'
}]
},
{
    title:'Chat Web App',
    img:'chat-app.png',
    desc:'Node + Socket',
    detail:['This web app is a normal chat application for a quick chat','This project uses Node and socket for backend','User joins a Chat room with an ID , and if someone wants to join that same room , he/she must provide the same Room ID in order to join',{
      GitHubRepository:'yes'
    }],
    url:'https://main--chat-app-31.netlify.app/'
},
{
    title:'iNews Web App',
    img:'inews.png',
    desc:'Node + EJS + MongoDb',
    detail:['This project is based on Node and MongoDb','User can create account and see the news that Admin has posted.','Admin dashboard have an extra section to add the news, normal user will only the news posted by the Admin','News can be filtered by the category or on the basis of Date that news has been posted.',{
      GitHubRepository:'yes'
    }],
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
                            {/* <Dialog>
  <DialogTrigger style={{marginTop:'0.7rem',border:'2px solid #0895A1',boxShadow:'0 0 13px #0895A1',backgroundColor:'#20242D',color:'white' , paddingTop:'0.38rem' , paddingBottom:'0.38rem' }} className='ml-5 px-4 rounded' >Know more</DialogTrigger>
  <DialogContent className='bg-[#20242D] text-white' style={{maxWidth:'325px'}}>
    <DialogHeader>
      <DialogTitle>{ele.title}</DialogTitle>
      <DialogDescription className='text-white mt-4'>
       {ele.detail}
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog> */}
<Drawer>
            <DrawerTrigger asChild>
            <Button size={'sm'} style={{marginTop:'0.7rem', marginLeft:'29px', backgroundColor:'#0895A1',boxShadow:'0 0 13px #0895A1',color:'#20242D'}} >
                             Know more
                            </Button> 
            </DrawerTrigger>
            <DrawerContent style={{backgroundColor:'#20242D'}}>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle className='text-[#0895A1] font-bold'>{ele.title}</DrawerTitle>
                  <DrawerDescription className=" text-white">
                    <ul></ul>
                    {ele.detail.length > 0 && ele.detail.map((ele2,id)=>{
                    return <div key={id}>{typeof ele2 == "string" ? <li>{ele2}</li> : ele2.GitHubRepository && <li>
                      Github Respository:
                      <ol>
                        {ele.title != 'Socio App [Web App]' ? 'Frontend:' : 'Backend' } <li style={{textDecoration:'underline',cursor:'pointer'}}  onClick={()=>{
                          window.open(`${ele.title == 'iNotes [Web App]' ? 'https://github.com/prabhjot-arora31/notes31-f' : (ele.title == 'Socio App [Web App]' ? 'https://github.com/prabhjot-arora31/SOCIO_APP_BACKEND' : (ele.title == 'Chat Web App' ? 'https://github.com/prabhjot-arora31/chat-app-frontend' : 'https://github.com/prabhjot-arora31/news-portal'))}`,'_blank')
                        }}> {ele.title == 'iNotes [Web App]' ? 'https://github.com/prabhjot-arora31/notes31-f' : (ele.title == 'Socio App [Web App]' ? 'https://github.com/prabhjot-arora31/SOCIO_APP_BACKEND' : (ele.title == 'Chat Web App' ? 'https://github.com/prabhjot-arora31/chat-app-frontend' : (ele.title == 'iNews Web App') ? 'https://github.com/prabhjot-arora31/news-portal' : '')) }</li>
                      </ol>
                      <ol>
                        {(ele.title != 'Socio App [Web App]') && (ele.title != 'iNews Web App' ? 'Backend' : '')  } <li style={{textDecoration:'underline',cursor:'pointer'}}  onClick={()=>{
                          window.open('https://github.com/prabhjot-arora31/Notes-App-Backend','_blank')
                        }}> {ele.title == 'iNotes [Web App]' ? 'https://github.com/prabhjot-arora31/Notes-App-Backend' : ele.title == 'Chat Web App' ? 'https://github.com/prabhjot-arora31/chat-app-backend'  : ''}</li>
                      </ol>
                      </li>}</div>
                  })}</DrawerDescription>
                </DrawerHeader>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button style={{maxWidth:'120px' , margin:'0 auto'}}>
                  <i className="fa-solid fa-x"></i>
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>

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
