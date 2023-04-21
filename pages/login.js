import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import styles from '@/styles/Home.module.css'

const Login = () => {
  const { status, loading } = useSession()
  const router = useRouter()
  const [error, setError] = useState('Please enter Credentials')
  const [mobile, setMobile ]= useState('')
  const [password, setPassword] = useState('')

  if (status === 'authenticated') {
    window.location.href = '/'
  }
  
  const loginHandler = async (e) => {
    e.preventDefault()
    if (mobile.length > 0 && password.length > 0) {      
      const { error } = await signIn('credentials', {
        redirect: false,
        mobile: mobile,
        password: password,
        callbackUrl: '/',
      })
    } else {
      setError('Please enter your credentials')
    }
    
    if (error) setError('Something went wrong, please try again')
  }
  
  return (
    <>
      { status === 'unauthenticated' && (
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

export default Login