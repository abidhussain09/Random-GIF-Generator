import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Spinner } from './Spinner';

// const API_KEY=process.env.Api_key;
export const Random = () => {
    const [gif,setgif]=useState('');
    const [loader,setloader]=useState(false);
    async function fetchData(){
        setloader(true);
        const url=`https://api.giphy.com/v1/gifs/random?api_key=UqEQAajnbi1H2jotXK8F5z53MyR2Sxe9&tag=&rating=g`;
        const {data}=await axios.get(url);
        const imgsource=data.data.images.downsized_large.url;
        // console.log(imgsource);
        setgif(imgsource);
        setloader(false);
    }
    function clickHandler(){
        fetchData();
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div className='bg-yellow-300 w-1/2 pb-[20px] rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='text-2xl font-semibold'>A Random Gif</h1>
            {
                loader?(<Spinner/>):(<img src={gif} alt=""/>)
            }
            
            <button onClick={clickHandler} className='w-11/12 bg-green-500 rounded-lg text-lg py-2'>Generate</button>
        </div>
    )
}
