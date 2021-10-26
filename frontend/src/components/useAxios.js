import React, { useEffect, useState } from 'react';
import axios from "axios";

const useAxios = (url) => {
    const baseurl = "http://localhost/learn-well/backend/"  + url;
    // const [res, setRes] = useState(null)
    // const check = () => {
    //     const baseurl = "http://localhost/learn-well/backend/" + url;
    //     setRes(baseurl)
    // }

    // useEffect(() => {
    //     check()
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, [])
 
    // const url = "GetClient";
   
    return baseurl
    
}

export default useAxios
