import logo from './logo.svg';
import NoData from './No data-amico.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { AllLaunches, LatestLaunches, NextLaunches, PastLaunches, UpcomingLaunches } from './apis/launch';
import DataCard from './component/card';

function App() {

  const [data,setData] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(()=>{
    async function getData(){
      if(filter === "all"){
        const temp = await AllLaunches();
        if(temp !==false ){
          setData(temp);
        }
        else{
          setData([]);
        }
      }
      else if(filter === "past"){
        const temp = await PastLaunches();
        if(temp !==false ){
          setData(temp);
        }
        else{
          setData([]);
        }
      }
      else if(filter === "upcoming"){
        const temp = await UpcomingLaunches();
        if(temp !==false ){
          setData(temp);
        }
        else{
          setData([]);
        }
      }
      else if(filter === "latest"){
        const temp = await LatestLaunches();
        if(temp !==false ){
          setData(temp);
        }
        else{
          setData([]);
        }
      }
      else if(filter === "next"){
        const temp = await NextLaunches();
        if(temp !==false ){
          setData(temp);
        }
        else{
          setData([]);
        }
      }
    }
    getData();
  },[filter]);

  return (
    <div className="">
      <div className="flex justify-center gap-3 px-2 items-center shadow-lg shadow-black-500/60">
        <img src={logo} alt="" className='h-20 w-20'/>
        <h3 className='font-bold text-2xl text-indigo-400'> Space X Launch Data  </h3>
      </div>
      <div className='container mx-auto px-3 py-4'>
        <div className="flex flex-col md:flex-row justify-end gap-5 md:items-center">
          <div className=''>
            <h5 className=''> Filter </h5>
            <select className='border active:outline-none px-2 py-1' value={filter} onChange={(e)=>{setFilter(e.target.value);}}>
              <option className='' value="all"> All Launches </option>
              <option className='' value="past"> Past Launches </option>
              <option className='' value="upcoming"> Upcoming Launches </option>
              <option className='' value="latest"> Latest Launch </option>
              <option className='' value="next"> Next Launch </option>
            </select>
          </div>    
          <div className=''>
            <h5 className=''> Search </h5>
            <div className='flex gap-2'>
              <input className='border px-2 py-1' placeholder="Search" type="text"/>
              <button className='bg-blue-600 text-white rounded-md px-4 py-1'> Search </button>
            </div>
          </div>    
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-10">
          {data?.length>0?
            data.map((item,index)=>(
              <div key={index}>
                <DataCard data={item}/>
              </div>
            ))
          :
            <>
              <div className='flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-4'>
                <img src={NoData} alt="" className=""/>
              </div>
            </>
          }
        </div>
      </div>
      <div className=''></div>
    </div>
  );
}

export default App;
