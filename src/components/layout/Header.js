
'use client';
import Link from "next/link";
import {signOut, useSession} from "next-auth/react";

export default function Header() {
  const session = useSession();
  const status = session.status;
  return (
    <header className="flex items-center justify-between">
      <nav className="flex gap-8 items-center text-gray-500 font-semibold">
      <Link className="text-primary font-semibold text-2xl" href="/">
          Kubo Pizza
      </Link>

      <Link href={''}>Home</Link>
      <Link href={''}>Menu</Link>
      <Link href={''}>About</Link>
      <Link href={''}>Contact</Link>
      </nav>
      <nav className="flex items-center gap-4 text-gray-500 font-semibold">
        {status === 'authenticated' && (
          <button className="bg-primary text-white rounded-full px-6 py-2" onClick={() => signOut()}>
          Logout
        </button>
        )}

        {status !== 'authenticated' && (
          <>
            <Link href={'/login'}>Login</Link>
            <Link href={'/register'} className="bg-primary text-white rounded-full px-6 py-2">
              Register
            </Link>
          </>
        )}
      
      </nav>
    </header>
  )
  }
  