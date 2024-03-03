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
                  <h3 className="float-md-start mb-0">QuickAid</h3>
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
                    Your go-to solution for instant ambulance dispatch and first
                    aid guidance. Seamlessly request emergency assistance and
                    track nearby ambulances in real-time. With QuickApp, access
                    life-saving resources and expert guidance at your
                    fingertips.
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
