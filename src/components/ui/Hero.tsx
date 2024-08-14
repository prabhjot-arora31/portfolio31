'use client'
import React from 'react'
import { Button } from './button'
import { DownloadIcon } from 'lucide-react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='flex px-10 pb-5 justify-center space-x-14 flex-wrap space-y-10 items-center'>
        <div>
            <Image alt='profile image' width={350} style={{borderRadius:'50%'}} src={require('../../profile.png')}/>
        </div>
        <div>
            <h3 className='font-bold text-xl leading-4'>Hey there! It&rsquo;s me </h3>
            <h1 className='text-4xl leading-tight'><b>Prabhjot Arora</b></h1>
            <h2 className='font-bold text-xl'>And I am a <span style={{color:'#0895A1'}}>Full Stack Developer</span></h2>
            <p className='mt-10 text-md mb-7'>I am an MCA Student. I love designing and developing web and mobile applications. </p>
            <div className='mb-5 flex space-x-4'>
                <Button className='hover:bg-[#0895A1] hover:text-[#20242D] text-[#0895A1]' style={{borderRadius:"50%",border:'1px solid #0895A1',width:'40px',height:'40px'}}><i className="fa-brands fa-linkedin-in"  ></i></Button>
                <Button className='hover:bg-[#0895A1] hover:text-[#20242D] text-[#0895A1]' style={{borderRadius:"50%",border:'1px solid #0895A1',width:'40px',height:'40px'}}><i className="fa-brands fa-instagram"  ></i></Button>
                <Button className='hover:bg-[#0895A1] hover:text-[#20242D] text-[#0895A1]' style={{borderRadius:"50%",border:'1px solid #0895A1',width:'40px',height:'40px'}}><i className="fa-brands fa-github"  ></i></Button>
                </div>
            <Button style={{backgroundColor:"#0895A1",color:'black',boxShadow:'3px 3px 20px #0895A1'}}>Download Resume  &nbsp;  <DownloadIcon /></Button>
        </div>
        
    </div>
  )
}

export default Hero