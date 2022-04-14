import { createElement } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import cx from 'classnames'

import { Disclosure, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

import Banner from '../images/banner.jpeg'
import BannerMobile from '../images/banner-m.jpeg'

import Map from '../images/map.png'
import About from '../images/about.jpeg'

import Clock from '../images/icons/Clock.svg'
import Pin from '../images/icons/Pin.svg'
import Micro from '../images/icons/Micro.svg'

const lightTextClass = 'text-base font-light'

const Home: NextPage = () => {
  const renderPerson = (person: any, index: number) => (
    <div className={cx('flex-1 bg-blue-04 px-2 py-4', person.c)} key={index}>
      <h3 className="h3">{person.n}</h3>
      <p className={`${lightTextClass} mt-2`}>{person.r}</p>
    </div>
  )
  const renderAgendaHeader = (item: any, iy: number) => (
    <th
      className="border-black border-2 lg:whitespace-pre-wrap py-2 pl-3 pr-1"
      key={iy}
    >
      {item.t}
    </th>
  )
  const renderAgendaBody = (item: any, ix: number) => {
    return (
      <>
        <tr className={item.cl ?? `bg-blue-04`} key={ix}>
          {item.r.map((item: any, iy: number) => (
            <td
              className={`border-black border-2 py-2 pl-2 pr-1 whitespace-pre-wrap align-top ${
                iy === 0 && 'whitespace-nowrap'
              }`}
              colSpan={item.cols ?? 1}
              key={iy}
            >
              {item.t}
            </td>
          ))}
        </tr>
      </>
    )
  }
  return (
    <div className="">
      <Head>
        <title>OG Council</title>
      </Head>

      <main className="min-h-screen flex-1 flex flex-col">
        <article className="w-full relative">
          <a href="https://ticketh.xyz/magicians/gathering/">
            <div className="hidden lg:block">
              <Image src={Banner} alt="" layout="responsive"></Image>
            </div>
            <div className="lg:hidden">
              <Image src={BannerMobile} alt="" layout="responsive"></Image>
            </div>
          </a>
        </article>
        <article className="container pt-12 lg:pt-32">
          <h2 className="h2 px-4 lg:px-24 mb-6 lg:mb-14">About</h2>
          <div className="bg-blue-04 text-blue-02 pl-4 lg:pl-24 grid grid-cols-6 lg:grid-cols-10 gap-8 lg:mr-24">
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
            <div className="hidden lg:block col-start-7 col-span-4 relative">
              <div className="absolute w-full -top-28 bottom-14 -right-24">
                <Image
                  src={About}
                  alt=""
                  layout="fill"
                  objectFit="contain"
                ></Image>
              </div>
            </div>
          </div>

          <div className={`${lightTextClass} py-12 px-4 lg:px-24`}>
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

        <article className="py-12 lg:py-20 lg:mt-20 text-center bg-blue-06">
          <div className="container ">
            <h2 className="h2 text-center">Leaders</h2>
            <div className="mt-24">
              <div className="">
                <Image src={Micro} alt=""></Image>
              </div>
              <h3 className="h3 text-blue-02 mb-4 mt-4">
                Day 1 - Saturday April 23rd
              </h3>
              <p className={lightTextClass}>
                Saturday will be focused on dApp layer EIPs and topic
                disccussions. NFT, DeFi related discussions are welcomed, we
                would like to look into standardisation of DeFi and NFT
                protocols.
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10">
                {[
                  {
                    n: 'James Hancok',
                    r: 'Ex AllCoreDevs Coordinator',
                    c: 'col-span-1',
                  },
                  {
                    n: 'Anett',
                    r: 'NFT Standards - Author of NFTStandards.wtf documentation, Working Group leader',
                    c: 'lg:col-span-2',
                  },
                  {
                    n: 'Hadrien Croubois',
                    r: 'ERC-4626 - Author of ERC-4626 Open Zeppelin implementation',
                    c: 'lg:col-span-2',
                  },
                  {
                    n: 'Alex Stokes',
                    r: 'Co- Author of EIP-4444',
                    c: 'col-span-1',
                  },
                ].map(renderPerson)}
              </div>
            </div>
            <div className="mt-24">
              <div className="">
                <Image src={Micro} alt=""></Image>
              </div>
              <h3 className="h3 text-blue-02 mb-4 mt-4">
                Day 2 - Sunday April 24th
              </h3>
              <p className={lightTextClass}>
                Sunday will be focused on protocol layer EIPs and discussions.
                This day be can be used for community discussions with Core Devs
                and protocol researchers
              </p>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 mt-10">
                {[
                  {
                    n: 'Piper Merriam',
                    r: 'Portal Network (ex Stateless Client)',
                    c: 'col-span-1',
                  },
                  {
                    n: 'ETH Staker Team',
                    r: 'Client UX',
                    c: 'col-span-1',
                  },
                  {
                    n: 'Marius Van Der Wijden',
                    r: 'Merge Testing',
                    c: 'col-span-1',
                  },
                ].map(renderPerson)}
              </div>
            </div>
            <p className={`${lightTextClass} mt-12`}>
              Both days the sessions will start at 10am with Opening Ceremony.
            </p>
          </div>
        </article>

        <article className="container py-8 lg:py-20">
          <h2 className="h2 mb-6 lg:mb-12 text-center">Tickets</h2>
          <div className="">
            <div className="">
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
            <div className="">
              <dl className="mt-6 space-y-4">
                {[
                  {
                    n: 'Wave 1 - Invite only claimable until March 17',
                    c: (
                      <>
                        <p>Tickets available: 250</p>
                        <p>Ticket type: FEM OG</p>
                        <p>Ticket distribution: via email</p>
                        <p>Groups eligible for first wave tickets:</p>
                        <ul className="list-disc list-inside pl-4">
                          <li>
                            Ethereum Magicians OGs - people that are actively
                            participating in discussions on a forum
                          </li>
                          <li>
                            EIP contributors - people that authored &
                            co-authored EIP/ERC, EIP editors,
                          </li>
                          <li>
                            Core Devs - people actively contributing to Ethereum
                            Core protocol database (this should be probably
                            better defined)
                          </li>
                        </ul>
                        <p>
                          Please notify us via forum or Discord if you haven’t
                          received email from us!
                        </p>
                      </>
                    ),
                  },
                  {
                    n: 'Wave 2 - March 18 claimable until March 25',
                    c: (
                      <>
                        <p>Tickets available: 200</p>
                        <p>Ticket type: Community</p>
                        <p>Publicly available tickets</p>
                        <p>
                          Ticket distribution: Publicly available on our website
                        </p>
                      </>
                    ),
                  },
                  {
                    n: 'Wave 3 - April 1 till sold out',
                    c: (
                      <>
                        <p>Tickets available: 150</p>
                        <p>Tickcet type: Last Chance</p>
                        <p>Publicly available tickets</p>
                        <p>
                          Ticket distribution: Publicly available on our website
                        </p>
                      </>
                    ),
                  },
                ].map((faq) => (
                  <Disclosure as="div" key={faq.n} className="">
                    {({ open }) => (
                      <>
                        <dt className="pt-4 pb-3 px-6 bg-blue-04 text-blue-02">
                          <Disclosure.Button className="text-left w-full flex justify-between items-start">
                            <span className="font-medium">{faq.n}</span>
                            <span className="ml-6 h-7 flex items-center">
                              <ChevronDownIcon
                                className={cx(
                                  open ? '-rotate-180' : 'rotate-0',
                                  'h-6 w-6 transform'
                                )}
                                aria-hidden="true"
                              />
                            </span>
                          </Disclosure.Button>
                        </dt>
                        <Transition
                          show={open}
                          enter="transition duration-100 ease-out"
                          enterFrom="transform -translate-y-4 opacity-0"
                          enterTo="transform translate-y-0 opacity-100"
                          leave="transition duration-75 ease-out"
                          leaveFrom="transform translate-y-0 opacity-100"
                          leaveTo="transform -translate-y-4 opacity-0"
                        >
                          <Disclosure.Panel
                            static
                            as="dd"
                            className="mt-2 py-3 px-6 bg-blue-06"
                          >
                            <div className="">{faq.c}</div>
                          </Disclosure.Panel>
                        </Transition>
                      </>
                    )}
                  </Disclosure>
                ))}
              </dl>
            </div>
          </div>
        </article>

        <article className="text-center bg-blue-06 mt-12">
          <div className="container py-12">
            <h2 className="h2 lg:mb-8">Community Partner</h2>
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
          <h2 className="h2 text-blue-02">AGENDA of SARTUDAY</h2>
          <div className="overflow-x-scroll">
            <table className="mt-6 ">
              <thead>
                <tr className="bg-blue-07 text-left">
                  {[
                    {
                      t: 'Room - Capacity',
                    },
                    {
                      t: 'Grote Zaal -\n244',
                    },
                    {
                      t: 'Ljzaal -\n50',
                    },
                    {
                      t: 'Studio -\n50',
                    },
                    {
                      t: 'Meeting room\n- 50',
                    },
                    {
                      t: 'Floyer Grote\nZaal - 20',
                    },
                  ].map(renderAgendaHeader)}
                </tr>
              </thead>
              <tbody className="text-blue-02">
                {[
                  {
                    r: [
                      {
                        t: '09:00 - 10:00 AM',
                      },
                      {
                        t: 'Registration',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '10:00 - 10:30 AM',
                      },
                      {
                        t: 'Ceremony',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '10:30 - 11:00 AM',
                      },
                      {
                        t: 'Topic voting',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '11:00 - 12:00 PM',
                      },
                      {
                        t: 'EIP-4626',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                    ],
                  },
                  {
                    cl: 'bg-blue-08',
                    r: [
                      {
                        t: '12:00 - 1:00 PM',
                      },
                      {
                        t: 'Lunch break',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '01:00 - 02:00 PM',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: 'NFT Standards',
                      },
                      {
                        t: 'EIP-4444',
                      },
                      {
                        t: '*OSFT',
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '02:00 - 03:00 PM',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: 'NFT Standards',
                      },
                      {
                        t: 'EIP-4444',
                      },
                      {
                        t: '*OSFT',
                      },
                    ],
                  },
                  {
                    cl: 'bg-blue-08',
                    r: [
                      {
                        t: '03:30 - 04:00 PM',
                      },
                      {
                        t: 'Coffee break',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '04:00 - 05:00 PM',
                      },
                      {
                        t: 'Council reunion',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '05:00 - 06:00 PM',
                      },
                      {
                        t: 'Networking',
                      },
                      {
                        t: 'Working Group',
                      },
                      {
                        t: 'Working Group',
                      },
                      {
                        t: 'Working Group',
                      },
                      {
                        t: 'Working Group',
                      },
                    ],
                  },

                  {
                    cl: 'bg-blue-08',
                    r: [
                      {
                        t: '06:00 - 06:30 PM',
                      },
                      {
                        t: 'Tear down',
                        cols: 5,
                      },
                    ],
                  },
                ].map(renderAgendaBody)}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-blue-02">*OSFT: Open slot for topic</p>

          <h2 className="h2 text-blue-02 mt-12">AGENDA of SUNDAY</h2>
          <div className="overflow-x-scroll">
            <table className="mt-6 ">
              <thead>
                <tr className="bg-blue-07 text-left">
                  {[
                    {
                      t: 'Room - Capacity',
                    },
                    {
                      t: 'Grote Zaal -\n244',
                    },
                    {
                      t: 'Ljzaal -\n50',
                    },
                    {
                      t: 'Studio -\n50',
                    },
                    {
                      t: 'Meeting room\n- 50',
                    },
                    {
                      t: 'Floyer Grote\nZaal - 20',
                    },
                  ].map(renderAgendaHeader)}
                </tr>
              </thead>
              <tbody className="text-blue-02">
                {[
                  {
                    r: [
                      {
                        t: '09:00 - 10:00 AM',
                      },
                      {
                        t: 'Registration',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '10:00 - 10:30 AM',
                      },
                      {
                        t: 'Ceremony',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '10:30 - 11:00 AM',
                      },
                      {
                        t: 'Governance forum',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '11:00 - 12:00 PM',
                      },
                      {
                        t: '',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    cl: 'bg-blue-08',
                    r: [
                      {
                        t: '12:00 - 1:00 PM',
                      },
                      {
                        t: 'Lunch break',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '01:00 - 02:00 PM',
                      },
                      {
                        t: 'Client UX',
                      },
                      {
                        t: 'Merge testing',
                      },
                      {
                        t: 'Portal Network',
                      },
                      {
                        t: 'EIP-4488',
                      },
                      {
                        t: '*OSFT',
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '02:00 - 03:00 PM',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                    ],
                  },
                  {
                    cl: 'bg-blue-08',
                    r: [
                      {
                        t: '03:30 - 04:00 PM',
                      },
                      {
                        t: 'Coffee break',
                        cols: 5,
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '04:00 - 05:00 PM',
                      },
                      {
                        t: 'Council reunion\n*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                      {
                        t: '*OSFT',
                      },
                    ],
                  },
                  {
                    r: [
                      {
                        t: '05:00 - 06:00 PM',
                      },
                      {
                        t: 'Networking',
                      },
                      {
                        t: 'Working Group',
                      },
                      {
                        t: 'Working Group',
                      },
                      {
                        t: 'Working Group',
                      },
                      {
                        t: 'Working Group',
                      },
                    ],
                  },

                  {
                    cl: 'bg-blue-08',
                    r: [
                      {
                        t: '06:00 - 06:30 PM',
                      },
                      {
                        t: 'Tear down',
                        cols: 5,
                      },
                    ],
                  },
                ].map(renderAgendaBody)}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-blue-02">*OSFT: Open slot for topic</p>

          <p className="mt-6">
            Discuss problems that has been discussed in the smaller groups with
            wider audience Optionally groups can regroup again and discuss &
            work together again
          </p>
        </article>

        <article className="bg-blue-06 pb-36 pt-12">
          <div className="container">
            <h2 className="h2 mb-22">Time & Place</h2>
            <div className="grid grid-cols-4 lg:grid-cols-10 lg:gap-9">
              <div className="col-span-4 mb-8 lg:mb-0">
                <div className="">
                  <Image
                    src={Map}
                    objectFit="contain"
                    alt="Map"
                    className=""
                  ></Image>
                </div>
              </div>
              <div className="col-span-6 lg:order-first">
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
                      Devconnect’s co-working space in Beurs van Berlage.turday
                      & Sunday)
                    </p>
                    <div className="mt-6">
                      <a
                        href="https://goo.gl/maps/pnHc6BQZ24k62ihb6"
                        className="inline-block bg-pink-04 cursor-pointer hover:opacity-95 text-blue-05 uppercase px-9 py-3 font-display"
                      >
                        Directions
                      </a>
                    </div>
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
