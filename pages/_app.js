// Import necessary packages and styles
import '@/styles/globals.css'
import Layout from '../components/general/Layout'
import { SessionProvider } from "next-auth/react"

// This is the main function that is rendered for each page
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  // Use the SessionProvider from next-auth/react to provide the user's session to each component
  return (
    <SessionProvider session={session}>
      {/* Use the Layout component to wrap each page */}
      <Layout>
        {/* Render the component passed in as a prop with the pageProps */}
        <Component {...pageProps} />
      </Layout>      
    </SessionProvider>     
  )
}
