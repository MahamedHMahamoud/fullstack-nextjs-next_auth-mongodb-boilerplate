// Import necessary packages and styles
import styles from '@/styles/Home.module.css'
import { getSession, useSession } from "next-auth/react"
import axios from 'axios';

// This function is used to check if the user has a valid session
export async function getServerSideProps( context ){
  // Use the getSession function from next-auth/react to get the user's session
  const session = await getSession( context );
  // If there is no session, redirect the user to the login page
  if( !session ){
    return {
        redirect:{
            destination:`/login`,
            permanent: false,
        }
    }    
  } else  {        
    // If the user has a valid session, return the session object as a prop
    return {      
        props:{
            session
        }
    }
  }
}

// This is the main function that is rendered on the home page
export default function Home({ session }) {  
  return (
    // The main content of the page is wrapped in a container with a class name defined in the styles file
    <main className={styles.pageContainer}>
        Index
    </main>   
  )
}
