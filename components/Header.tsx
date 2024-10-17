"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/mode-toggle';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          AI SaaS
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li>
              <Link href="/dashboard" className={pathname === '/dashboard' ? 'font-bold' : ''}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/pricing" className={pathname === '/pricing' ? 'font-bold' : ''}>
                Pricing
              </Link>
            </li>
            <li>
              <Button asChild variant="ghost">
                <Link href="/login">Login</Link>
              </Button>
            </li>
            <li>
              <Button asChild>
                <Link href="/signup">Sign Up</Link>
              </Button>
            </li>
            <li>
              <ModeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}