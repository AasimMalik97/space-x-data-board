import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


function DataModal({modalOpen,setModalOpen,data}){

    return(
        <Modal
            isOpen={modalOpen}
            onRequestClose={()=>{ setModalOpen(false) }}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="w-[340px] md:w-[600px]">
                <h3 className='text-2xl font-extrabold border-b pb-1.5'> {data?.mission_name||""}'s Details  </h3>
                <div className=''>
                    <h5 className='flex gap-3 pt-1.5'> Flight Number : <p className='text-indigo-800 font-semibold'>{data?.flight_number||""} </p> </h5>
                    <h5 className='flex gap-3 pt-1.5'> Launch Year : <p className='text-indigo-800 font-semibold'>{data?.launch_year||""} </p> </h5>
                    <h5 className='flex gap-3 pt-1.5'> Launch Site Id : <p className='text-indigo-800 font-semibold'>{data?.launch_site?.site_id||""} </p> </h5>
                    <h5 className='flex gap-3 pt-1.5'> Launch Site Name : <p className='text-indigo-800 font-semibold'>{data?.launch_site?.site_name||""} </p> </h5>
                    <h5 className='flex gap-3 pt-1.5'> Launch Successful : <p className='text-indigo-800 font-semibold'>{data?.launch_success? "Yes":"No"} </p> </h5>
                    <h5 className='flex gap-3 pt-1.5'> Rocket Id : <p className='text-indigo-800 font-semibold'>{data?.rocket?.rocket_id||""} </p> </h5>
                    <h5 className='flex gap-3 pt-1.5'> Rocket Name : <p className='text-indigo-800 font-semibold'>{data?.rocket?.rocket_name||""} </p> </h5>
                    <h5 className='flex gap-3 pt-1.5'> Rocket Type : <p className='text-indigo-800 font-semibold'>{data?.rocket?.rocket_type||""} </p> </h5>
                    <h5 className='flex gap-3 pt-1.5'>
                        <p className='flex-none'> Mission Report : </p>
                        <p className='text-indigo-800 font-semibold'>{data?.details||" No Reason Found"} </p> 
                    </h5>
                    <h5 className='flex gap-3 pt-1.5'>
                        <p className='flex-none'> Article Link : </p>
                        <a href={data?.links?.article_link||""} className='text-indigo-800 font-semibold'>{data?.links?.article_link||" No Link"} </a> 
                    </h5>
                    <h5 className='flex gap-3 pt-1.5'>
                        <p className='flex-none'> Wikipedia Link : </p>
                        <a href={data?.links?.wikipedia||""} className='text-indigo-800 font-semibold'>{data?.links?.wikipedia||" No Link"} </a> 
                    </h5>
                    {data?.links?.youtube_id?
                        <>
                            <h5 className='py-2 font-semibold text-base'> Video of the Mission </h5>
                            <iframe width="400" height="250" src={"https://www.youtube.com/embed/" + data?.links?.youtube_id||""} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </>
                    :
                        <></>
                    }
                </div>
            </div>
        </Modal>
    )
}

export default DataModal;