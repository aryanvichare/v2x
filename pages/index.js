import Apps from "@/components/Apps";
import CarSection from "@/components/CarSection";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <div>
      <Toaster
        position='bottom-right'
        reverseOrder={false}
        toastOptions={{ duration: 3000 }}
      />
      <Head>
        <title>V2X</title>
        <meta
          name='description'
          content='V2X - Driving made fun and efficient'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='w-screen min-h-screen bg-white'>
        <Navbar />
        <CarSection />
        <section className='max-w-screen-xl mx-auto flex items-center justify-between pt-4 px-12 xl:px-0'>
          <div className='w-full grid grid-cols-12 gap-4'>
            <iframe
              className='col-span-12 lg:col-span-5'
              src='https://open.spotify.com/embed/playlist/37i9dQZEVXbLRQDuF5jeBp'
              width='100%'
              height='300px'
              frameBorder='0'
              allowtransparency='true'
              allow='encrypted-media'></iframe>
            <div className='col-span-12 lg:col-span-7'>
              <Settings />
            </div>
          </div>
        </section>
        <Apps />
      </div>
    </div>
  );
}
