import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-900'>
      <div className='bg-gray-800 p-8 rounded-lg shadow-lg w-full  max-w-md'>
        <h2 className='text-2xl font-bold text-center text-white mb-6'>Login to the Chat</h2>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-400 mb-2' htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              className='w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your Email'
            />
          </div>
          <div className='mb-6'>
            <label className='block text-gray-400 mb-2' htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              className='w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500'
              placeholder='Enter your password'
            />
          </div>
          <button
            type='submit'
            className='w-full p-3 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500'
          >
            Login
          </button>
        </form>
        <p className='text-gray-400 mt-4 text-center'>
          Don't have an Account? <Link to="/register" className='text-blue-500 hover:underline'>Create One</Link>
        </p>
      </div>
    </div>
  )
}

export default Login