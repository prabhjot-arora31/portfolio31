
import { Header } from "@/components/Header";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Hero from "@/components/ui/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{backgroundColor:'#0895A1' , margin:0 , padding:'10px' , minHeight:'100vh'}}>
      <Card className="container mt-5 card" style={{ backgroundColor:'#20242D',color:'white',borderColor:'black',boxShadow:'0px  0px 33px white'}}>
      <Header />
      <Hero />
      </Card>
      <Card className="container mt-10 card p-5" style={{ backgroundColor:'#20242D',color:'white',borderColor:'black',boxShadow:'0px  0px 33px white'}}>
        <Skills />
      </Card>
      <Card className="container mt-10 card p-5" style={{ backgroundColor:'#20242D',color:'white',borderColor:'black',boxShadow:'0px  0px 33px white'}}>
        <Projects />
</Card>
    </div>
  );
}
