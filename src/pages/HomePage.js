import React from 'react'
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
  return (
    <MainLayout>
        <div className='bg-light p-5 mt-4 rounded-3'>
            <h1>This project is a simple POS System for small Businesses</h1>
            <p>A project developed by Thaiya Waronja during Phase 2 Moringa</p>
            <p>If you want to chat with him, call 0719416804 </p>
            <Link to='/pos' className='btn btn-primary'>Click here to go to the POS </Link>
        </div>
    </MainLayout>
  )
}

export default HomePage