// Import the `useSession` and `signOut` functions from the `next-auth/react` library.
import { useSession, signOut } from "next-auth/react"

// Import the `Home.module.css` styles module.
import styles from '@/styles/Home.module.css'

// Define a functional component called `Header`.
const Header = () => {
  // Call the `useSession` hook to get the current user session data.
  const { data: session } = useSession()

  // Define a function to handle signing out.
  function handleSignOut() {
    // Call the `signOut` function to sign the user out of their session.
    signOut()
  }

  // Return a `div` element with the `headerContainer` class from `Home.module.css`.
  // This will display the page header with a logo and a sign-out button or sign-in message.
  return (
    <div className={styles.headerContainer}>
      <h3>Logo</h3>
      {/*  Conditionally render either a sign-out button or a sign-in message
      depending on whether the `session` variable is truthy or falsy*/}
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

// Export the `Header` component so it can be used in other parts of the code.
export default Header
