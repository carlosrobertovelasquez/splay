import React from 'react';
import Head from 'next/head'
import {useAuth} from '../lib/auth'
import Auth from '../pages/Auth'
import Wall from '../components/organims/wall/'
export default function Home() {
  const {user,loading} =useAuth();  
    
  return (
      <React.Fragment>
        <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
        />
        </Head>
        <div>
        {user ? (<Wall/>): (<Auth/>)}
        </div>
      
      </React.Fragment>
  )
}