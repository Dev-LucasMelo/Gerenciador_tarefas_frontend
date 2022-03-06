import React from 'react';
import { FcCheckmark } from 'react-icons/fc'

import './finish.css'
const Finish = () => {
    return (
        <section className='finish-component'>

            <FcCheckmark className='finish-icon' />
            <h1 className='tittle-finish' >Your registration was successfully made !</h1>
            <div>
                <a className='submit' href="/">Login</a>
            </div>
        </section>
    );
}

export default Finish;