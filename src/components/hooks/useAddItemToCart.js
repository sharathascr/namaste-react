import axios from "axios";
import { useState } from "react"

export const useAddItemToCart=(item)=>{
    const [response, setResponse]=useState(null);
    try{
        axios.post("")

    }
    catch(error){
        console.log("Error in adding item to cart: ",error );
    }
}