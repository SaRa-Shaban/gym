import React, { useRef } from 'react'
import './Join.css'
import '../../App.css'
import emailjs from '@emailjs/browser'

export default function Join() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_8f1pdhl', 'template_691zgzb', form.current, 'Rd-LrL5zOItqncGEA')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <div className="join">
                <div className="leftJoin">

                    <hr />

                    <span>
                        <span className='strokeText'>READY TO </span>
                        <span>LEVEL UP</span>
                    </span>

                    <span>
                        <span>YOUR BODY </span>
                        <span className='strokeText'>WITH US?</span>
                    </span>
                </div>

                <div className="rightJoin">
                    <form ref={form} action="" onSubmit={sendEmail}>
                        <input type="email" name="from_name" id="" placeholder='Enter your email address' />
                        <button className='btn btnJoin'>Join Now</button>
                    </form>
                </div>
            </div>
        </>
    )
}
