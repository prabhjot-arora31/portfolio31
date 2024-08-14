'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader } from './ui/card'
import Link from 'next/link'
import { Button } from './ui/button'
import Image from 'next/image'

const Projects = () => {
    const projects = [{
        title:'iNotes [Web App]',
        img:'inotes.png',
        desc:'React + Node + MongoDb',
        url:'https://notes-9931.netlify.app'
    },
{
    title:'Socio App [Web App]',
    img:'socio-app.png',
    desc:'Node + MongoDb + EJS',
    url:'https://socio-app-y5og.onrender.com'
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
                    return <Card style={{maxWidth:'400px',marginRight:"0.89rem" , marginBottom:'0.89rem' }} key={id}>
                        <Image alt='project image' src={require(`../${ele.img}`)} style={{overflow:'hidden',borderRadius:"10px"}}/>
                        <CardHeader className='font-bold text-xl'>{ele.title}</CardHeader>
                        <CardContent>
                            <CardDescription>{ele.desc}</CardDescription>
                         <Button size={'sm'} style={{marginTop:'0.7rem',backgroundColor:'#0895A1',color:'white'}} onClick={()=>{
                            window.open(ele.url,'_blank')
                         }}>
                             Live URL
                            </Button> 
                        </CardContent>
                    </Card>
                })
            }
        </div>
    </div>
  )
}

export default Projects