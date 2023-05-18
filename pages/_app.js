import '@/styles/globals.css'
import Sidebar from '@/components/Sidebar'
import Headers from '@/components/Headers'

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Headers/>
      <Component {...pageProps} />
    </Sidebar>
  )
}
