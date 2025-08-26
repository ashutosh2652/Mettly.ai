"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");

  const handleSubmit= ()=>{
       authClient.signUp.email({
        email,
        password,
        name,
      }, {

          onSuccess: () => {
              window.alert("Form submitted successfully!")
          },
          onError: () => {
              window.alert("Something wents wrong!");
          },
  });
  }

  return (
   <div className="flex flex-col gap-2 p-4">
    <Input placeholder="name" type="text" value={name} onChange={(e)=>setname(e.target.value)}/>
    <Input placeholder="email" type="email" value={email} onChange={(e)=>setemail(e.target.value)} />
    <Input placeholder="password" type="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
    <Button onClick={handleSubmit}>Create User</Button>
   </div>
  );
}
