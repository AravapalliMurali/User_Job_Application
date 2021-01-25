import React from 'react'
import axios from 'axios'
import ApplicationForm from './ApplicationForm'

export default function AddData(props){
    const {addItems} = props

    const formSubmission = (data)=>{
        axios.post('http://dct-application-form.herokuapp.com/users/application-forms' , data)
            .then((response)=>{
                //console.log(response.data)
                addItems(response.data)
            })
            .catch((err)=>{
                console.log(err.message)
            })
    }

    return(
        <div>
            <ApplicationForm formSubmission = {formSubmission}/>
        </div>
    )
}