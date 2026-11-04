// Import necessary packages and styles
import styles from '@/styles/Home.module.css'
import { getServerSession } from "next-auth/next"
import { useSession } from "next-auth/react"
import { useState } from 'react';
import { authOptions } from './api/auth/[...nextauth]'

// This function is used to check if the user has a valid session
export async function getServerSideProps( context ){
  // Use getServerSession to read the user's session directly on the server
  const session = await getServerSession( context.req, context.res, authOptions );
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


// This is the main function that is rendered on the home (index) page
export default function Home() {
  
  // Call the `useSession` hook to get the current user session data.
  const { data: session } = useSession()

  // Get the current user session data and set in a state
  const [user, setUser] = useState(
    { 
      name: session?.user?.name, 
      status: session?.user?.status
    })

  return (
    // The main content of the page is wrapped in a container with a class name defined in the styles file
    <main className={styles.pageContainer}>
      {/* Display a welcome message along with the user's name and status */}
      <h1>Welcome to your index page, {user.name} {user.status}!</h1>
      <p>
        This boilerplate is designed to help you quickly set up and learn
        Next.js with NextAuth and MongoDB for fullstack development.
      </p>
      <p>
        It includes all the necessary files and configurations, allowing you to
        focus on building your project. The boilerplate contains commented code
        for better understanding and easy modification.
      </p>
      <p>
        Explore the code and modify it as needed to create your own unique web
        application!
      </p>
    </main>
  );
}

