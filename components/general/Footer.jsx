// Import the `Home.module.css` styles module.
import styles from '@/styles/Home.module.css';

// Define a functional component called `Footer`.
const Footer = () => {
  // Return a `div` element with the `footerContainer` class from `Home.module.css`.
  // This will display the text "Footer" inside a styled container on the page.
  return (
    <div className={styles.footerContainer}>
      Next.js, NextAuth and MongoDB tutorial for beginners.
      Created by Mahamed H Mahamoud
    </div>
  )
}

// Export the `Footer` component so it can be used in other parts of the code.
export default Footer;
