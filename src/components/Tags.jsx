import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Spinner } from './Spinner';

// const API_KEY=process.env.Api_key;
export const Tags = () => {
    const [Tag,setTag]=useState('');
    const [gif,setgif]=useState('');
    const [loader,setloader]=useState(false);
    async function fetchData(){
        setloader(true);
        const url=`https://api.giphy.com/v1/gifs/search?api_key=UqEQAajnbi1H2jotXK8F5z53MyR2Sxe9&q=${Tag}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
        const output=await axios.get(url);
        console.log(output);
        const imgsource=output.data.data[0].images.fixed_height.url;
        console.log(imgsource);
        setgif(imgsource);
        setloader(false);
    }
    function clickHandler(){
        fetchData();
    }
    function changeHandler(event){
        setTag(event.target.value)
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div className='bg-blue-300 w-1/2 pb-[20px] rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
            <h1 className='text-2xl font-semibold'>Random {Tag} Gif</h1>
            {
                loader?(<Spinner/>):(<img src={gif} alt=""/>)
            }
            <input
            onChange={changeHandler}
            value={Tag}
            className='w-11/12 rounded-lg text-lg py-2 text-center'/>
            <button onClick={clickHandler} className='w-11/12 bg-green-500 rounded-lg text-lg py-2'>Generate</button>
        </div>
    )
}
