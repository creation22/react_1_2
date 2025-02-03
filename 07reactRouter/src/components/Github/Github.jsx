import React from 'react'
import { useEffect ,useState } from 'react'
import { useLoaderData } from 'react-router-dom' 
function Github() {
   const data = useLoaderData()

    // const [data , setdata] = useState([]) 
    // useEffect(() => {
    //     fetch('https://api.github.com/users/creation22')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setdata(data)

            
    //     } )

    // } ,[])
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>
      Github Followers :  {data.followers}..
      Public repos :  {data.public_repos}..
      <img src = {data.avatar_url} alt ="git pic " width = {300}  />
    </div>
  )
}

export default Github

export const githubinfoloader = async () => {
  const response = await  fetch('https://api.github.com/users/creation22')
  return response.json
}
