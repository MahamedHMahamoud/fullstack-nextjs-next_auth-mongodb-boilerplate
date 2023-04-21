import styles from '@/styles/Home.module.css'
import { getSession, useSession } from "next-auth/react"
import axios from 'axios';


export async function getServerSideProps( context ){
  const session = await getSession( context );
  if( !session ){
    return {
        redirect:{
            destination:`/login`,
            permanent: false,
        }
    }    
  } else  {        
    return {      
        props:{
            session
        }
    }
  }
}

export default function Home({ session }) {  
  return (
    <main className={styles.pageContainer}>
        Index
    </main>   
  )
}
