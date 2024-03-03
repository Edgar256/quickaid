import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>QuickAid App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="cover-container-main">
          <div className="black-overlay">
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
              <header className="mb-auto">
                <div>
                  <h3 className="float-md-start mb-0 text-white">QuickAid</h3>
                  <nav className="nav nav-masthead justify-content-center float-md-end">
                    <Link
                      className="nav-link fw-bold py-1 px-0 active"
                      aria-current="page"
                      href="#"
                    >
                      Home
                    </Link>
                    <Link
                      className="nav-link fw-bold py-1 px-0"
                      href="/admin/signin"
                    >
                      Sign In
                    </Link>
                    <Link
                      className="nav-link fw-bold py-1 px-0"
                      href="/admin/signup"
                    >
                      Sign Up
                    </Link>
                  </nav>
                </div>
              </header>

              <div
                className="d-flex justify-content-center align-items-center text-center text-white"
                style={{ minHeight: '100vh' }}
              >
                <section className="px-3">
                  <h1>Welcome to QuickAid App</h1>
                  <p className="lead">
                    Introducing QuickAid, your one-stop app for swift medical
                    assistance in Kampala. Now, getting the help you need in a
                    medical emergency is just a tap away.
                  </p>
                  <p className="lead">
                    QuickAid connects you directly with Nsambya Hospital's
                    advanced ambulance and first-aid services. This innovative
                    app streamlines the response process, ensuring you receive
                    prompt and professional care when you need it most.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
