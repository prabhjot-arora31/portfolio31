'use client'
import React, { useState } from "react";
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
const Skills = () => {
  const [tabClick, setTabClick] = useState(1)
  const skills = [{
    icon:<i className="fa-brands fa-react"></i>,
    title:'React',
    desc:'I have been working on React for over 2.5 years. I have made many small and huge projects based on React.'
  },
{
  icon:<i className="fa-brands fa-js"></i>,
  title:'JavaScript',
  desc:'I have more than 3 years of experience in JavaScript. I have made many working and fun projects using HTML,CSS and Vanilla JavaScript.'
},{
  title:'Redux',
  icon:<i className="fa-solid fa-gear"></i>,
  desc:'I recently started learning Redux have have a clear understanding of its architecture. I made 1 major project which includes Redux as a state management library.'
},
{title:'Flutter',
  icon:<i className="fa-brands fa-flutter"></i>,
  desc:'I learned Flutter approximately 2 years ago. I have also done an internship in Flutter Development for 3 months.'
},
{
  title:'Node',
  icon:<i className="fa-brands fa-node-js"></i>,
  desc:'I also have experience in backend development using NodeJs and Express. I made 2 major projects in NodeJs.'
},
{
  icon:<i className="fa-solid fa-code"></i>
,
  title:'Programming languages',
  desc:'I learned the following programming languages , C,C++,Java,Python,C#,Dart and more.'
}
]
  return <div className="p-10">
    <h1 className="font-bold text-2xl mb-7 text-center">Skills</h1>
    
   <div className="w-full flex justify-center">
   <Tabs defaultValue="technical" className="w-[400px]">
    <TabsList className="grid w-full grid-cols-2" style={{backgroundColor:'#0895A1'}}>
    <TabsTrigger value="technical" onClick={()=>setTabClick(1)} style={{backgroundColor:`${tabClick == 1 ? "#20242D" : 'transparent'}`,color:`${tabClick == 1 ? "white" : 'black'}`}}>Technical</TabsTrigger>
    <TabsTrigger value="soft" style={{backgroundColor:`${tabClick == 2 ? "#20242D" : 'transparent'}`,color:`${tabClick == 2 ? "white" : 'black'}`}} onClick={()=>setTabClick(2)}>Soft</TabsTrigger> </TabsList>
    <TabsContent value="technical">
    <Card className="bg-[#0895A1]">
          <CardHeader>
            <CardTitle>Technical</CardTitle>
            <CardDescription>
            <div className="mt-5 flex space-x-4 flex-wrap space-y-2 justify-center items-center">
      {
        skills.map((ele,id)=>{
          return (<Drawer key={id}>
            <DrawerTrigger asChild>
              <Button variant='custom2'>{ele.title} &nbsp; {ele.icon}</Button>
            </DrawerTrigger>
            <DrawerContent style={{backgroundColor:'#0895A1'}}>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>{ele.title}</DrawerTitle>
                  <DrawerDescription className="font-bold text-black">{ele.desc}</DrawerDescription>
                </DrawerHeader>
              </div>
              <DrawerFooter>
                <DrawerClose asChild>
                  <Button style={{maxWidth:'120px' , margin:'0 auto'}}>Cancel</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>)
        })
      }
      </div>
            </CardDescription>
          </CardHeader>
          </Card>
    </TabsContent>
    <TabsContent value="soft">
    <Card className="bg-[#0895A1]">
          <CardHeader>
            <CardTitle>Soft</CardTitle>
            <CardDescription>
            <div className="mt-5 flex space-x-4 flex-wrap space-y-2 justify-center items-center">
      <Button variant='custom2'>Good listener</Button>
      <Button variant='custom2'>Keen Oberver</Button>
      <Button variant='custom2'>Problem Solver</Button>
    </div>
            </CardDescription>
          </CardHeader>
          </Card>
    </TabsContent>
    </Tabs>
   </div>
  </div>;
};

export default Skills;
