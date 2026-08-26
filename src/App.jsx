'use client'

import { useState } from 'react'
import './App.css'
import { MdOutlineMenu } from 'react-icons/md'
import { IoIosCloseCircleOutline, IoMdHome, IoMdSettings } from 'react-icons/io'
import { FaAngleRight, FaBolt, FaCalendarAlt, FaChartBar, FaPlay, FaShieldAlt, FaUser } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'About Us', href: '#about' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'Contact', href: '#contact' },
]

function Icon({ type, className = 'w-5 h-5' }) {
  const icons = {
    
    menu: (
      <>
        <MdOutlineMenu />
      </>
    ),
    close: (
      <>
       <IoIosCloseCircleOutline />
      </>
    ),
    arrow: <FaAngleRight />,
    play: (
      <>
        <FaPlay className='mt-2' />
      </>
    ),
    bolt: <FaBolt />,
    users: (
      <>
      <FaUser />
      </>
    ),
    shield: <FaShieldAlt />,
    home: (
      <>
        <IoMdHome/>
      </>
    ),
    chart: <FaChartBar />,
    calendar: (
      <>
        <FaCalendarAlt />
      </>
    ),
    settings: (
      <>
       <IoMdSettings />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {icons[type]}
    </svg>
  )
}

const features = [
  {
    title: 'Fast Performance',
    description: 'Optimized for speed and efficiency',
    icon: 'bolt',
    color: 'text-violet-600 bg-violet-50',
  },
  {
    title: 'Team Collaboration',
    description: 'Work together seamlessly',
    icon: 'users',
    color: 'text-emerald-600 bg-emerald-50',
  },
  {
    title: 'Secure & Reliable',
    description: 'Your data is safe with us',
    icon: 'shield',
    color: 'text-amber-600 bg-amber-50',
  },
]

function Dashboard() {
  return (
    <div className="relative hidden lg:block">
   
      <div className="absolute -inset-12 rounded-full bg-violet-200/40 blur-3xl" />

      <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/50">
        <div className="flex min-h-[305px]">
     
          <aside className="flex w-12 flex-col items-center gap-5 border-r border-slate-100 py-4">
            <div className="rounded-lg bg-violet-100 p-2 text-violet-700">
              <div className="h-2.5 w-2.5 rounded-full bg-violet-600" />
            </div>
            <div className="rounded-lg bg-violet-100 p-2 text-violet-600">
              <Icon type="home" className="h-3.5 w-3.5" />
            </div>
            <Icon type="chart" className="h-4 w-4 text-slate-400" />
            <Icon type="users" className="h-4 w-4 text-slate-400" />
            <Icon type="calendar" className="h-4 w-4 text-slate-400" />
            <Icon type="settings" className="h-4 w-4 text-slate-400" />
          </aside>

          <div className="flex-1 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-bold text-slate-700">Dashboard</h3>
              <span className="text-slate-400">•••</span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {[
                ['Total Users', '12,540', '+12.5%'],
                ['Active Projects', '84', '+8.2%'],
                ['Tasks Completed', '1,250', '+15.3%'],
              ].map(([label, value, change]) => (
                <div
                  key={label}
                  className="rounded-md border border-slate-100 bg-slate-50/50 p-3"
                >
                  <p className="text-[7px] text-slate-400">{label}</p>
                  <p className="mt-1 text-sm font-bold text-slate-700">{value}</p>
                  <p className="text-[7px] text-emerald-500">{change}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-md border border-slate-100 p-3">
              <div className="flex justify-between">
                <p className="text-[8px] font-semibold text-slate-500">
                  Project Overview
                </p>
                <p className="text-[7px] text-slate-400">This Year⌄</p>
              </div>

              <svg
                viewBox="0 0 400 100"
                className="mt-3 h-20 w-full overflow-visible"
              >
                <path
                  d="M0 75 C30 65 40 45 70 55 S105 75 130 48 S165 20 195 48 S230 70 260 50 S295 30 325 45 S360 60 400 25"
                  fill="none"
                  stroke="#6d4bc3"
                  strokeWidth="2"
                />
                <path
                  d="M0 75 C30 65 40 45 70 55 S105 75 130 48 S165 20 195 48 S230 70 260 50 S295 30 325 45 S360 60 400 25 L400 100 L0 100 Z"
                  fill="url(#gradient)"
                  opacity=".2"
                />
                <defs>
                  <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <stop stopColor="#7c5ce0" />
                    <stop offset="1" stopColor="#fff" />
                  </linearGradient>
                </defs>
              </svg>

              <div className="flex justify-between text-[6px] text-slate-400">
                {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map(
                  (month) => (
                    <span key={month}>{month}</span>
                  )
                )}
              </div>
            </div>

            <div className="mt-3 rounded-md border border-slate-100 p-3">
              <p className="mb-2 text-[8px] font-semibold text-slate-500">
                Recent Activity
              </p>
              {[
                ['Design updated', '2 min ago', 'bg-violet-500'],
                ['New task added', '1 hour ago', 'bg-emerald-500'],
                ['Project deployed', '3 hours ago', 'bg-amber-500'],
              ].map(([name, time, color]) => (
                <div
                  key={name}
                  className="flex items-center justify-between py-1 text-[7px]"
                >
                  <div className="flex items-center gap-2">
                    <span className={`h-2 w-2 rounded-full ${color}`} />
                    <span className="text-slate-600">{name}</span>
                  </div>
                  <span className="text-slate-400">{time} ›</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f8fb] text-slate-800">
    
      <header className="relative z-50">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8">
          <a href="#home" className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center text-violet-700">
              <Icon type="logo" className="h-6 w-6" />
            </span>
            <span className="text-sm font-extrabold tracking-wide">NEXORA</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs font-medium text-slate-600 transition hover:text-violet-700"
              >
                {item.name}
              </a>
            ))}
          </div>

          <a
            href="#get-started"
            className="hidden rounded-md bg-violet-700 px-5 py-2.5 text-xs font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-800 md:block"
          >
            Get Started
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-md p-2 text-slate-700 md:hidden"
            aria-label="Toggle menu"
          >
            <Icon type={mobileMenuOpen ? 'close' : 'menu'} className="h-6 w-6" />
          </button>
        </nav>

        {mobileMenuOpen && (
          <div className="absolute left-4 right-4 top-20 rounded-xl border border-slate-100 bg-white p-5 shadow-xl md:hidden">
            <div className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-medium text-slate-700"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#get-started"
                className="rounded-md bg-violet-700 px-4 py-3 text-center text-sm font-semibold text-white"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </header>

      <section
        id="home"
        className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-10 lg:grid-cols-2 lg:px-8 lg:pb-28 lg:pt-16"
      >
        <div className="pointer-events-none absolute right-0 top-0 -z-0 h-[420px] w-[420px] rounded-full bg-violet-100/70 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-8 hidden h-48 w-48 bg-[radial-gradient(#c4b5fd_1px,transparent_1px)] bg-[size:14px_14px] opacity-40 lg:block" />

        <div className="relative z-10 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-3 py-2 text-[10px] text-slate-600">
            <span className="font-bold text-violet-600">NEW</span>
            <span>We just launched our new product</span>
            <Icon type="arrow" className="h-3 w-3" />
          </div>

          <h1 className="mt-7 text-4xl font-bold leading-tight tracking-tight text-slate-800 sm:text-5xl lg:text-[52px]">
            Build better products
            <br />
            faster, <span className="text-violet-700">together</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-6 text-slate-500 sm:text-base">
            Nexora is the all-in-one platform that helps teams plan, build and
            launch products people love.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              id="get-started"
              href="#features"
              className="rounded-md bg-violet-700 px-7 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:bg-violet-800"
            >
              Get Started
            </a>

            <button className="flex items-center justify-center gap-2 rounded-md border border-violet-200 bg-white px-7 py-3.5 text-sm font-semibold text-violet-700 transition hover:bg-violet-50">
              <Icon type="play" className="h-4 w-4" />
              Watch Demo
            </button>
          </div>

          <div
            id="features"
            className="mt-12 grid gap-5 sm:grid-cols-3 lg:mt-14"
          >
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-3">
                <div
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${feature.color}`}
                >
                  <Icon type={feature.icon} className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="text-[11px] font-bold text-slate-700">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-[10px] leading-4 text-slate-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 lg:pl-5">
          <Dashboard />
        </div>
      </section>
    </main>
  )
}