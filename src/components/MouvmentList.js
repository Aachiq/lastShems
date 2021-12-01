import {React,useState,useEffect} from 'react'
import axios from 'axios'
export default function MouvmentList() {
    const [mouvements, setMouvements] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:8000/getallmv")
         .then(x => setMouvements(x.data.mouvs))
        .catch((err)=> console.log(err))
    },[])
     return (
        <div style={{margin:30}}>
            <h2>Liste de Mouvements</h2>
              {JSON.stringify(mouvements)}  
        </div>
    )
}
