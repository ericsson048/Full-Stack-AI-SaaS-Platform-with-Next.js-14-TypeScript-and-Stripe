import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Welcome to AI SaaS Platform</h1>
      <p className="text-xl mb-8 text-center">
        Unlock the power of AI with our cutting-edge SaaS platform.
      </p>
      <div className="flex justify-center space-x-4">
        <Button asChild>
          <Link href="/dashboard">Get Started</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/pricing">View Pricing</Link>
        </Button>
      </div>
    </div>
  );
}