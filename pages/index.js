import Apps from "@/components/Apps";
import CarSection from "@/components/CarSection";
import Navbar from "@/components/Navbar";
import Settings from "@/components/Settings";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>V2X</title>
        <meta
          name='description'
          content='V2X - Driving made fun and efficient'
        />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
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
