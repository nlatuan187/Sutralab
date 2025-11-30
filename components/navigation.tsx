import Link from "next/link"
import Image from "next/image"

export function Navigation() {
  return (
    <nav className="w-full bg-transparent absolute top-0 left-0 right-0 z-50">
      <div className="max-w-[1680px] mx-auto px-6 pt-16 pb-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Circle Logo" width={150} height={37} className="h-8 w-auto" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
