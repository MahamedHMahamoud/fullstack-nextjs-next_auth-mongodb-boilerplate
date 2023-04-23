// Import the `Header` and `Footer` components from their respective files.
import Header from "./Header";
import Footer from "./Footer";

// Define a functional component called `Layout` that accepts `children` as a prop.
const Layout = ({ children }) => {
  // Return a `Fragment` containing the `Header`, `main`, and `Footer` components.
  // The `Header` and `Footer` components will be displayed on every page that uses this `Layout`.
  // The `main` element will contain the page-specific content passed in as `children`.
  return (
    <>
        <Header />
            <main>
                {children}
            </main>
        <Footer />
    </>
  );
}

// Export the `Layout` component so it can be used in other parts of the code.
export default Layout;
