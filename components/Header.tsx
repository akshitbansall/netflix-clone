import { BellIcon} from "@heroicons/react/solid"
import { BookmarkIcon } from "@heroicons/react/outline"
import Link from "next/link"
import { useEffect, useState } from "react"

function Header() {

// maine yeh wala smajhna hai ki kaise karna hai abhi thoda thoda thoda samajh laga hai

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && 'bg-[#141414]'}`}>
      <div className="flex items-center space-x-2 md:space-x-10">
      <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>


      <div className="flex items-center space-x-4 text-sm font-light">
        <BookmarkIcon className="hidden h-6 w6 sm:inline"/>
        <p className="hidden lg:inline">Kids</p>
        <BellIcon className="h-6 w6 "/>
        <Link href="https:/account">
        <img
            src="https://rb.gy/g1pwyx"
            alt=""
            className="cursor-pointer rounded"
          />
        </Link>
      </div>

    </header>
  )
}

export default Header