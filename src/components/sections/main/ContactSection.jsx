import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

const ContactSection = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_PUBLIC_KEY
            )
            .then(
                (result) => {
                    alert('message sent successfully...');
                    console.log(result.text);
                    form.current.reset();
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <div>
            <form className='flex flex-col gap-y-4' ref={form} onSubmit={sendEmail}>
                <div className='flex gap-x-4'>
                    <input
                        type='text'
                        placeholder='first name'
                        name='user_fname'
                        className='w-full h-12 bg-transparent outline-none border-2 rounded-md  pl-2 border-teal-600 border-opacity-70 hover:border-teal-500 transition-all focus:border-teal-400'
                    />

                    <input
                        type='text'
                        placeholder='last name'
                        name='user_lname'
                        className='w-full h-12 bg-transparent outline-none border-2 rounded-md pl-2 border-teal-600 border-opacity-70 hover:border-teal-500 transition-all focus:border-teal-400'
                    />
                </div>
                <div>
                    <input
                        type='email'
                        placeholder='Email address'
                        name='user_email'
                        className='w-full h-12 bg-transparent outline-none border-2 rounded-md pl-2 border-teal-600 border-opacity-70 hover:border-teal-500 transition-all focus:border-teal-400'
                    />
                </div>
                <div className=''>
                    <textarea
                        name='message'
                        type='text'
                        placeholder='Message'
                        className='w-full h-32 bg-transparent outline-none border-2 rounded-md pl-2 border-teal-600 border-opacity-70 hover:border-teal-500 transition-all focus:border-teal-400'>

                    </textarea>
                </div>
                <div>
                    <button className='bg-transparent w-max p-2 px-4 border-2 border-teal-600 border-opacity-70 rounded-md text-teal-400 font-semibold hover:border-teal-400  hover:text-slate-200 transition-all'
                        type='submit'
                        id='input-submit'
                    >Submit</button>

                </div>

            </form>
        </div>
    )
}

export default ContactSection
