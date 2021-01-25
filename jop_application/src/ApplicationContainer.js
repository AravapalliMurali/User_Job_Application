import React,{useState} from 'react'
import AddData from './AddData'

export default function ApplicationContainer(props){
    const [data , setData] = useState([])

    const addItems=(details)=>{
        const result = [...data ,details]
        setData(result)
    }

    return(
        <div>
            <AddData addItems = {addItems}/>
        </div>
    )
}