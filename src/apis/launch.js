import axios from "axios";

export async function AllLaunches(){
    const result = await axios.get("https://api.spacexdata.com/v3/launches")
                    .then((res)=>{
                        if(res.data.length){
                            return res.data;
                        }else{
                            return [res.data];
                        }
                    })
                    .catch((err)=>{
                        return false;
                    });
    return result;
}

export async function PastLaunches(){
    const result = await axios.get("https://api.spacexdata.com/v3/launches/past")
                    .then((res)=>{
                        if(res.data.length){
                            return res.data;
                        }else{
                            return [res.data];
                        }
                    })
                    .catch((err)=>{
                        return false;
                    });
    return result;
}

export async function UpcomingLaunches(){
    const result = await axios.get("https://api.spacexdata.com/v3/launches/upcoming")
                    .then((res)=>{
                        if(res.data.length){
                            return res.data;
                        }else{
                            return [res.data];
                        }
                    })
                    .catch((err)=>{
                        return false;
                    });
    return result;
}

export async function LatestLaunches(){
    const result = await axios.get("https://api.spacexdata.com/v3/launches/latest")
                    .then((res)=>{
                        if(res.data.length){
                            return res.data;
                        }else{
                            return [res.data];
                        }
                    })
                    .catch((err)=>{
                        return false;
                    });
    return result;
}

export async function NextLaunches(){
    const result = await axios.get("https://api.spacexdata.com/v3/launches/next")
                    .then((res)=>{
                        if(res.data.length){
                            return res.data;
                        }else{
                            return [res.data];
                        }
                    })
                    .catch((err)=>{
                        return false;
                    });
    return result;
}