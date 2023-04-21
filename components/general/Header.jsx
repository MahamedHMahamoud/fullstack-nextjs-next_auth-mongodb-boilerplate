// Header.jsx
import { useSession, signOut } from "next-auth/react"
import styles from '@/styles/Home.module.css'

const Header = () => {
  const { data: session } = useSession()

  function handleSignOut() {
    signOut()
  }

  return (
    <div className={styles.headerContainer}>
      <h3>Logo</h3>
      {session ? (
        <div className="btnContainer">
          <button onClick={handleSignOut} className="signInBtn">
            Sign out
          </button>
        </div>
      ) : (
        <p>You are not signed in</p>
      )}
    </div>
  )
}

export default Header
