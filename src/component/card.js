import { useState } from 'react';
import logo from '../logo.svg';
import DataModal from './modal';

function DataCard({data}){

    const [modalOpen,setModalOpen] = useState(false);

    return(
        <>
            <div className=" shadow-md shadow-zinc-700 px-5 py-4 rounded-xl">
                <img src={data?.links?.mission_patch||logo} alt="" className='h-[200px] mx-auto'/>
                <h3 className='text-xl font-semibold pt-3'> {data?.mission_name||""} </h3>
                <h5 className='flex gap-3 pt-1.5'> Flight Number : <p className='text-indigo-800 font-semibold'>{data?.flight_number||""} </p> </h5>
                <h5 className='flex gap-3 pt-1.5'> Rocket Name : <p className='text-indigo-800 font-semibold'>{data?.rocket?.rocket_name||""} </p> </h5>
                <h5 className='flex gap-3 pt-1.5'> Launch Year : <p className='text-indigo-800 font-semibold'>{data?.launch_year||""} </p> </h5>
                <button className='bg-blue-600 text-white w-full text-base font-medium rounded-md py-1.5 px-2 mt-4' onClick={()=>{ setModalOpen(true) }} > View More </button>
                <DataModal modalOpen={modalOpen} setModalOpen={setModalOpen} data={data}/>
            </div>
        </>
    );
}

export default DataCard;