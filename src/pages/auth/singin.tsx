import React from 'react'
import Link from 'next/link'
import  InputBlock  from '../../components/auth/InputBlock'
import MailIcon from '../../components/icons/MailIcon'
import KeyIcon from '../../components/icons/KeyIcon'
import Branding from '../../components/auth/Branding'


const SingIn = () => {

    return (
        <div className='flex lg:flex-row flex-col min-h-screen w-full '>
         
            <Branding  />
            <div className='relative flex-grow flex lg:min-h-screen 
                 lg:justify-center justify-items-start lg:p-0 p-12 lg:items-center '>
              
              <div className='max-w-xl flex-grow'>
                <div className='mb-12'>
                    <h1 className=' font-bold text-2xl text-dark text-left mb-3'>Welcome !</h1>
                     <span className='text-xl text-gray-500'>Sign in to your account to continue</span>
                 </div>
               <form className='flex flex-col' action="">
                 {/* inputBlocks */}
                 <div className='space-y-12 mb-12ssssss'>
                 <InputBlock name="email" variant="md" color="primary" label="EMAIL ADDRESS"
                  placeholder="Enter your email" type="email" 
                  icon={<MailIcon className="w-6 h-6" />} />
                
                <InputBlock name="password" variant="md" color="primary" label="PASSWORD"
                  placeholder="Enter your password" type="password" 
                  icon={<KeyIcon className="w-6 h-6" />} />
                </div>
                <button type='submit' className='rounded-xl bg-slate-200 text-primary text-base font-bold py-4 px-8 '>
                    Singin
                </button>
                <div className='text-center mb-6 mt-4'>
                    <Link href="/auth/forgot_password">
                        <a className='text-gray-normal  text-center' >forgot password?</a>
                    </Link>
                </div>
                <Link href="auth/singup">
                    <a className='text-center rounded-xl text-text-light text-base font-bold py-4 px-8 bg-slate-600'> Create an account</a>
                </Link>
                  
                </form>
                </div>  
            </div>
        </div>
    )
}

export default SingIn