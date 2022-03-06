import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import Banner from '../images/banner.jpg'

import Map from '../images/map.png'
import About from '../images/about.jpg'

import P1 from '../images/p1.jpg'
import P2 from '../images/p2.jpg'
import P3 from '../images/p3.jpg'
import P4 from '../images/p4.jpg'
import P5 from '../images/p5.jpg'
import P6 from '../images/p6.jpg'

import Clock from '../images/icons/Clock.svg'
import Pin from '../images/icons/Pin.svg'
import Micro from '../images/icons/Micro.svg'

const linkClass = ''
const lightTextClass = 'text-gray-lightText text-base font-light'

const Home: NextPage = () => {
  const renderPerson = (person: any, index: number) => (
    <div className="flex-1" key={index}>
      <div>
        <Image src={person.i} alt={person.n}></Image>
      </div>
      <h3 className="h3 mt-6">{person.n}</h3>
      <p className={`${lightTextClass} mt-2`}>{person.r}</p>
    </div>
  )
  return (
    <div className="">
      <Head>
        <title>OG Council</title>
      </Head>

      <main className="min-h-screen flex-1 flex flex-col">
        <article
          className="w-full relative"
        >
          <Image src={Banner} alt="" layout="responsive"></Image>
        </article>
        <article className="container pt-32">
          <h1 className="h1 px-24 mb-14">About</h1>
          <div className="rounded-5xl bg-gray-bg pl-24 grid grid-cols-10 gap-8 mr-24">
            <div className="py-12 col-span-6">
              <p className="">
                Our aim is to host Ethereum Magicians Council, similar as what
                our OG Community is used to - fish bowl / circle discussions,
                topic voting, group discussions.
              </p>
              <p className="mt-4">
                We are going to host a few session leaders that will help us
                lead sessions and encourage people to talk about the issues we
                are facing in the Ethereum Ecosystem.
              </p>
            </div>
            <div className="col-start-7 col-span-4 relative">
              <div className="absolute w-full -top-20 bottom-6 -right-24">
                <Image
                  src={About}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                  className="rounded-4xl"
                ></Image>
              </div>
            </div>
          </div>

          <div className={`${lightTextClass} text-gray-03 py-12 px-24`}>
            <p>
              Council is a big gathering of Ethereum enthusiasts with aim to
              discuss and solve issues we are facing in the Ethereum core
              ecosystem.
            </p>
            <p className="mt-3">
              We are going to host 250 people over the period of two days with
              the aim to provide place for people to discuss issues on Ethereum.
              We are going to do Council with voting process at the venue
            </p>
          </div>
        </article>

        <article className="container mt-48 text-center">
          <h1 className="h1 text-center">Sessions & Session Leaders</h1>
          <div className="mt-24">
            <div className="">
              <Image src={Micro} alt=""></Image>
            </div>
            <h3 className="h3 mb-4 mt-10">Day 1 - Saturday April 23rd</h3>
            <p className="text-gray-subText">
              Saturday will be focused on dApp layer EIPs and topic
              disccussions. NFT, DeFi related discussions are welcomed, we would
              like to look into standardisation of DeFi and NFT protocols.
            </p>
            <div className="grid grid-cols-3 gap-7 mt-10">
              {[
                { i: P1, n: 'James Hacock', r: 'Ex AllCoreDevs Coordinator ' },
                {
                  i: P2,
                  n: 'Anett',
                  r: 'NFT Standards - Author of NFTStandards.wtf documentation, Working Group leader ',
                },
                {
                  i: P3,
                  n: 'Hadrien',
                  r: 'ERC-4626 - Author of ERC-4626 Open Zeppelin implementation',
                },
              ].map(renderPerson)}
            </div>
          </div>
          <div className="mt-24">
            <div className="">
              <Image src={Micro} alt=""></Image>
            </div>
            <h3 className="h3 mb-4 mt-10">Day 2 - Sunday April 24th</h3>
            <p className="text-gray-subText">
              Sunday will be focused on protocol layer EIPs and discussions.
              This day be can be used for community discussions with Core Devs
              and protocol researchers
            </p>
            <div className="grid grid-cols-3 gap-7 mt-10">
              {[
                {
                  i: P4,
                  n: 'Piper Merriam',
                  r: 'Portal Network (ex Stateless Client)',
                },
                {
                  i: P5,
                  n: 'ETH Staker Team',
                  r: 'Client UX',
                },
                {
                  i: P6,
                  n: 'Marius Van Der Wijden',
                  r: 'Merge Testing',
                },
              ].map(renderPerson)}
            </div>
          </div>
          <p className={`${lightTextClass} mt-12`}>
            Both days the sessions will start at 10am with Opening Ceremony.
          </p>
        </article>

        <article className="container py-12 mt-48">
          <h1 className="h1 mb-8">Tickets</h1>
          <div className="grid grid-cols-8 gap-x-8">
            <div className="col-span-5">
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
              <div className={`${lightTextClass} mt-6`}>
                <p>
                  The second and third wave tickets will be publicly available
                  to Ethereum Community (everyone) on our OG Council Website.All
                  tickets will have the same value & permissions to the event
                </p>
                <p>
                  First two ticket waves will have 7 days time period to claim
                  their ticket
                </p>
              </div>
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
          <p className={`${lightTextClass} mt-12`}>
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
          <p className={`${lightTextClass} mt-4`}>
            The venue has no closing time so we can use it as long as we need -
            if session leaders would like to work on propoosal after 6pm
          </p>
        </article>

        <article className="container mb-36 py-12">
          <h1 className="h1 text-center mb-22">Time & Place</h1>
          <div className="grid grid-cols-10 gap-9">
            <div className="col-span-4">
              <div className="">
                <Image
                  src={Map}
                  objectFit="contain"
                  alt="Map"
                  className="rounded-3xl"
                ></Image>
              </div>
            </div>
            <div className="col-span-6">
              <div className="flex">
                <div className="mr-5 flex-shrink-0">
                  <Image src={Clock} alt=""></Image>
                </div>
                <div>
                  <h3 className="h3 mb-2">Time</h3>
                  <p>23 & 24 April (Saturday & Sunday)</p>
                </div>
              </div>
              <div className="mt-9 flex">
                <div className="mr-5 flex-shrink-0">
                  <Image src={Pin} alt=""></Image>
                </div>
                <div>
                  <h3 className="h3 mb-2">Place</h3>
                  <p>
                    23 & 24 April (SaPakhuis de Zwijger is a famous old
                    warehouse and located at ‘IJ’, the main river crossing
                    Amsterdam. Public transport is in front of the venue and
                    it’s a 26 minutes walk and 7 minutes bike ride away from
                    Devconnect’s co-working space in Beurs van Berlage.turday &
                    Sunday)
                  </p>
                  <div className="mt-6">
                    <a
                      href="https://maps.google.com"
                      className="inline-block bg-gray-link cursor-pointer hover:bg-gray-linkHover uppercase px-5 py-3 rounded-full"
                    >
                      Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <footer></footer>
    </div>
  )
}

export default Home
