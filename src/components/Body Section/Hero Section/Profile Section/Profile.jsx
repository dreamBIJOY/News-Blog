import React from 'react'
import ProfileImg from '../../../../assets/image/Category Icon/Profile Image.webp'

function Profile() {
  return (
    <div className='w-[20%] rounded-b-2xl shadow-lg'>

      <div className='px-4 py-5'>


        <div className='flex justify-center'>
        <img className='rounded-full border-4 border-gray-300' src={ProfileImg} alt="" />
        </div>

        <div className='text-center mt-4'>
          <h1 className='text-xl font-Inter font-semibold text-gray-700'>@dreamSTUDIO</h1>
          <h4 className='text-lg font-Inter'>We become what we think about!</h4>
          <button className='btn py-4 px-6 rounded-3xl bg-white border-2 border-gray-400 text-lg text-base-content font-Inter mt-3'>Follow Me</button>
        </div>

      </div>

    </div>
  )
}

export default Profile