import React from "react";
import { Button } from "@/components/ui/button";

function Codepage (){
    return(
        <main className="h-full flex justify-center items-center flex-col ">
     <div>Codepage 😎
     </div>
     <button className="px-6 py-2 bg-orange-300 rounded  my-3  hover:bg-orange-700">Text button</button>
    
           <button variant="Code" size="sm">Shadcn button
          </button>
     </main>
    )
}

export default Codepage;