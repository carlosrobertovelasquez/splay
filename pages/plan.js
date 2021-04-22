import React from 'react';
import Head from 'next/head'
import {useAuth} from '../lib/auth'
import Auth from '../pages/Auth'
import Plan from '../components/organims/plan/'

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
          <title>Plan de Compensación</title>
        
        </Head>
        <div>
          
        {user ? (<Plan/>): (<Auth/>)}
        </div>
      
      </React.Fragment>
  )
}