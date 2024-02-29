"use client";

import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { useEffect } from 'react'
import axios from 'axios'

 
const page = () => {

  const api = async () => {
    const res = await axios.get('http://fypnest.eastus.cloudapp.azure.com:5000/api/user/findApplicantDetails/1')
    // const data = await res.json()
    // console.log(data)
  }

  // useEffect(() => {
  //   api();
  // }, [])

    return (
        <div>
            <button onClick={api}>api</button>
            <h1>Page</h1>
        </div>
    )
}

export default page;