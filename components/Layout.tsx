import { ComponentProps, FC } from 'react'
import Navbar from './Navbar'
import NetworkWarning from './NetworkWarning'

type Props = ComponentProps<typeof Navbar>

const Layout: FC<Props> = ({ children, title, image }) => {
  return (
    <>
      <NetworkWarning />
      <main className="container mx-auto">
        <Navbar title={title} image={image} />
        {children}
      </main>
    </>
  )
}

export default Layout
