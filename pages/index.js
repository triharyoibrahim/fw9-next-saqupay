// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

// export default function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Create Next App</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.js</code>
//         </p>

//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }
import React from "react";
import { Button, Carousel } from "react-bootstrap";
import Head from "next/head"
import Image from "next/image"
import { FiLock, FiPhone, FiDownload } from "react-icons/fi";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    router.push("/auth/login");
  };

  const handleRegis = (e) => {
    e.preventDefault();
    router.push("/auth/register");
  };
    return (
<>
<Head><title>Welcome To Saqu Pay</title></Head>
      <header className="header-saqu">
        <nav className="nav">
          <div>
            <h2 className="blue">Saqu Pay</h2>
          </div>
          <div className="p-2">
       
              <Button variant="success" onClick={handleLogin}>Login</Button>
       
       
              <Button variant="success" onClick={handleRegis}>Sign Up</Button>{" "}
       
          </div>
        </nav>

        <div className="header-banner">
          <div className="banner-img">
            <Image src="/landingpage_png-phone.png" alt="banner phone" className="imgphone" width={350} height={650} />
          </div>
          <div className="banner-text">
            <h1>
              Awesome App for Saving <span className="blue">Time</span>
            </h1>
            <p>
              We bring you a mobile app for banking problems that oftenly
              wasting much of your times.
            </p>
            <div className="p-3">

                {" "}
                <Button variant="success" onClick={handleRegis}>Try it free</Button>

            </div>
            <p>available On :</p>
            <div className="">
              <Image src="/appstore.png" alt="appstore" width={50} height={50}/>
              <Image src="/gplay.png" alt="gplay" width={50} height={50} />
            </div>
          </div>
        </div>
      </header>

      <section>
        <div className="section-one">
          <Image src="/airbnb.png" className="fit-img" alt="airbnb" width={150} height={50} />
          <Image src="/canon.png" alt="canon" width={130} height={70} />
          <Image src="/dell.png" alt="dell" width={140} height={80} />
          <Image src="/dropbox.png" alt="dropbox" width={140} height={90} />
          <Image src="/hnm.png" alt="hnm" width={150} height={80}/>
          <Image src="/microsoft.png" className="fit-img" alt="microsoft" width={150} height={80}/>
        </div>
      </section>

      <section>
        <div className="section-two">
          <div className="section-two-text">
            <h1>
              <span className="blue">About</span> the Application
            </h1>
            <p>
              We have some great features from the application and it???s totally
              free to use by all users around the world.
            </p>
          </div>
          <div className="section-two-card">
            <div className="card">
            <FiPhone />
              <p>24/7 Support</p>
              <p className="sizing">
                We have 24/7 contact support so you can contact us whenever you
                want and we will respond it.
              </p>
            </div>
            <div className="card">
              <FiLock />
              <p>Data Privacy</p>
              <p className="sizing">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>
            <div className="card">
            <FiDownload />
              <p>Easy Download</p>
              <p className="sizing">
                We make sure your data is safe in our database and we will
                encrypt any data you submitted to us.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="section-three">
          <div className="section-three-img">
            <Image src="/landingpage_png-phone.png" alt="phone section three" width={350} height={650} />
          </div>
          <div className="section-three-text">
            <h1 className="sizing-h1">
              All The <span className="blue">Great</span> Saqu Pay Features.
            </h1>
            <p className="pstyle">
              <span className="sizing-font">1. </span>
              <span className="point">Small Fee</span>
              <br />
              We only charge 5% of every success transaction done in Saqu Pay
              app.
            </p>
            <p className="pstyle">
              <span className="sizing-font">2. </span>
              <span className="point">Data Secured</span>
              <br />
              All your data is secured properly in our system and it???s
              encrypted.
            </p>
            <p className="pstyle">
              <span className="sizing-font">3. </span>
              <span className="point">User Friendly</span>
              <br />
              Saqu Pay come up with modern and sleek design and not complicated.
            </p>
          </div>
        </div>
      </section>

      <Carousel className="sizing-carousel">
        <Carousel.Item>
          <Image src="/chaw.jpg"
            className="d-block w-100 img-fluid imgcard-carousel"
            alt="First slide"
            width={1300} height={800}
          />
          <Carousel.Caption className="">
            <h3>Jessica Mera</h3>
            <p>
              ???I use Saqu Pay to manage all financial needs. It???s super easy to
              use and it???s 100% free app???
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/mera.jpg"
            className="d-block w-100 img-fluid imgcard-carousel"
            alt="Second slide"
            width={1300} height={800}
          />

          <Carousel.Caption>
            <h3>Sherina Chaw</h3>
            <p>
              ???I use this app since 2 years ago and this is the best app that
              I???ve ever use in my entire life???
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src="/chandler.jpg"
            className="img-fluid imgcard-carousel"
            alt="Third slide"
            width={1300} height={800}
          />

          <Carousel.Caption>
            <h3>Robert Chandler</h3>
            <p>
              ???Since I???m using this app, I???m not going to move to another
              similar app. Thank you Saqu Pay!???
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <footer>
        <div className="zwfooter">
          <h3>Saqu Pay</h3>
          <p className="sizing.footer">
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </p>
          <hr />
          <div className="footer-contact">
            <div>
              <p>2022 Saqu Pay. All right reserved.</p>
            </div>
            <p>+62 5637 8882 9901</p>
            <p>contact@saqupay.com</p>
          </div>
        </div>
      </footer>
    </>
    ) 
  }

    export default Home;