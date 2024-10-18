import Header from '../Layout/Header'
import Footer from '../Layout/Footer'

function Layout({children}) {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout