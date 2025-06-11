import React from 'react';
import Navbar from '../common/Navbar';
import Contact from '@/app/pages/contactus/page'




export default function MainLayout({children}){
    return(
        <div>
            <Navbar/>
            {children}
        </div>
    )
}


