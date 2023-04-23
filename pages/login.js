// Import necessary packages and functions
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '@/styles/Home.module.css'

// Define a component called Login
const Login = () => {
  // Use the useSession hook to check if the user is already authenticated
  const { status, loading } = useSession()

  // Use the useRouter hook to navigate to different pages
  const router = useRouter()

  // Define some state variables to hold the user's mobile number and password, as well as any error messages
  const [error, setError] = useState('Please enter Credentials')
  const [mobile, setMobile ]= useState('')
  const [password, setPassword] = useState('')

  // If the user is already authenticated, redirect them to the home page
  if (status === 'authenticated') {
    window.location.href = '/'
  }
  
  // Define a function to handle the login process
  const loginHandler = async (e) => {
    e.preventDefault()
    // Check that the user has entered their mobile number and password
    if (mobile.length > 0 && password.length > 0) {      
      // Use the signIn function from the next-auth/react package to sign the user in with their credentials
      const { error } = await signIn('credentials', {
        redirect: false,
        mobile: mobile,
        password: password,
        callbackUrl: '/',
      })
    } else {
      // If the user has not entered their credentials, display an error message
      setError('Please enter your credentials')
    }
    
    // If there is an error, display an error message
    if (error) setError('Something went wrong, please try again')
  }
  
  // Render the login form
  return (
    <>
      { status === 'unauthenticated' && (
        // The Login form consists of a container, a card container, a subtitle, a form, and input fields for the user's mobile number and password
        <div className={styles.pageContainer}>
          <div className={styles.cardContainer}>
            <h2 className={styles.subtitle} style={{ color: 'primary' }}>{error}</h2>
            <form onSubmit={(e) => loginHandler(e)}>
              <div className={styles.formContainer}>
                <input 
                  type="text" 
                  placeholder="Mobile" 
                  name="mobile" 
                  value={mobile} 
                  onChange={(e) => setMobile(e.target.value)}
                  className={styles.input}
                />
                <input 
                  type="password" 
                  placeholder="Password" 
                  name="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                />
                <button type="submit" className={styles.submitButton}>Login</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

// Export the Login component so it can be used elsewhere in the app
export default Login
