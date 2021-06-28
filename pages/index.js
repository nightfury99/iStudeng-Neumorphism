import Head from 'next/head'
import Content from '../components/Content'
import Header from '../components/Header'
import SideBar from '../components/SideBar'

export default function Home() {
  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>iStudeng</title>
      </Head>
      
      {/* header */}
      <Header />

      <main className="flex">
        {/* Sidebar */}
        <SideBar />
        {/* Content */}
        <Content />
      </main>
    </div>
  )
}
