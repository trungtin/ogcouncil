import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>OG Council</title>
      </Head>

      <main className="min-h-screen flex-1 flex flex-col">
        <article className="container">
          <h1 className="h1">About</h1>
          <div>
            <p className="font-semibold text-xl leading-relaxed">
              Our aim is to host Ethereum Magicians Council, similar as what our
              OG Community is used to - fish bowl / circle discussions, topic
              voting, group discussions. We are going to host a few session
              leaders that will help us lead sessions and encourage people to
              talk about the issues we are facing in the Ethereum Ecosystem.
            </p>
          </div>

          <div className="font-light text-base leading-loose text-gray-03">
            <p>
              Council is a big gathering of Ethereum enthusiasts with aim to
              discuss and solve issues we are facing in the Ethereum core
              ecosystem.
            </p>
            <p>
              We are going to host 250 people over the period of two days with
              the aim to provide place for people to discuss issues on Ethereum.
              We are going to do Council with voting process at the venue
            </p>
          </div>
        </article>

        <article className="container">
          <h1 className="h1 text-center">Sessions & Session Leaders</h1>
          <div>
            <h3>Day 1 - Saturday April 23rd</h3>
            <p>
              Saturday will be focused on dApp layer EIPs and topic
              disccussions. NFT, DeFi related discussions are welcomed, we would
              like to look into standardisation of DeFi and NFT protocols.
            </p>
          </div>
          <div>
            <h3>Day 2 - Sunday April 24th</h3>
            <p>
              Sunday will be focused on protocol layer EIPs and discussions.
              This day be can be used for community discussions with Core Devs
              and protocol researchers
            </p>
          </div>
          <p>
            Both days the sessions will start at 10am with Opening Ceremony.
          </p>
        </article>

        <article className="container py-12 mt-12">
          <h1 className="h1 mb-8">Tickets</h1>
          <div className="grid grid-cols-8 gap-x-8">
            <div className="col-span-5 leading-relaxed">
              <p className="mb-4">
                We are going to give away tickets for FREE with optional
                donation. Tickets will be available in 3 waves. The first wave
                will start in next week or two (depending on when our landing
                page for the event will be ready).
              </p>
              <p>The first wave will be distributed by email to:</p>
              <ul className="list-disc list-inside pl-4">
                <li>
                  Ethereum Magicians OGs - people that are actively
                  participating in discussions on a forum
                </li>
                <li>
                  EIP contributors - people that authored & co-authored EIP/ERC,
                  EIP editors,
                </li>
                <li>
                  Core Devs - people actively contributing to Ethereum Core
                  protocol database (All Core Devs)
                </li>
              </ul>
              <p className="text-gray-lightText text-base font-light mt-6">
                The second and third wave tickets will be publicly available to
                Ethereum Community (everyone) on our OG Council Website.All
                tickets will have the same value & permissions to the event
                First two ticket waves will have 7 days time period to claim
                their ticket
              </p>
            </div>
            <div className="col-span-3"></div>
          </div>
        </article>

        <article className="text-center bg-gray-bg mt-12">
          <div className="container py-12">
            <h1 className="h1 lg:mb-8">Community Partner</h1>
            <p>
              We are partnering with The Graph as community partners for this
              event.
            </p>
            <p>
              The Graph has been sponsoring our previous events and their
              members has been long time Ethereum Magicians members and
              supporters.
            </p>
          </div>
        </article>

        <article className="container mt-12 py-12">
          <h1 className="h1">Agenda</h1>
          <p className="text-gray-lightText text-base font-light mt-12">
            Agenda will be very similar for both days
          </p>
          <div className="rounded-2xl bg-gray-bg px-6 py-2 mt-6">
            {[
              { t: 'Council Ceremony Intro', h: '10:00 - 10:30 AM', d: '....' },
              {
                t: 'Council\nKick off',
                h: '10:30 - 11:30 AM',
                d: 'Introduction about Ethereum Magicians, intro about Council, run through agenda of the day',
              },
              {
                t: 'Topic proposal/ voting',
                h: '12:00 - 03:00 PM',
                d: 'Group discussions',
              },
              {
                t: 'Council Reunion',
                h: '04:00 - 05:00 PM',
                d: 'Groups will divide into smaller groups with team leader and discuss topics, work on EIP and/or propose solution, lunch break as needed',
              },
            ].map((item, index) => (
              <>
                {index > 0 && <hr className="border-t border-gray-hr" />}
                <div className="py-8 grid grid-cols-10 gap-8" key={index}>
                  <div className="col-span-2 text-3xl font-bold whitespace-pre-wrap">
                    {item.t}
                  </div>
                  <div className="col-span-8">
                    <div className="mb-2 text-2xl font-bold">{item.h}</div>
                    <div>{item.d}</div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <p className="mt-6">
            Discuss problems that has been discussed in the smaller groups with
            wider audience Optionally groups can regroup again and discuss &
            work together again
          </p>
          <p className="text-gray-lightText text-base font-light mt-4">
            The venue has no closing time so we can use it as long as we need -
            if session leaders would like to work on propoosal after 6pm
          </p>
        </article>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
