import { useEffect, useState } from "react"


function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/2405101200017-Nishit')
        .then( response => response.json() )
        .then( data => {
            console.log(data);
            setData(data)
            
        })

    }, [])
  return (
    <div className="text-center m-4 bg-gray-600">
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
        </div>
  )
}

export default Github

