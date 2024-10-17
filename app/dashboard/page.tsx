"use client"

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

export default function DashboardPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login')
    }
  }, [status, router])

  if (status === 'loading') {
    return <div className="container mx-auto px-4 py-16">Loading...</div>
  }

  if (!session) {
    return null; // This will prevent rendering the dashboard content while redirecting
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI Text Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Generate high-quality text using our AI model.</p>
            <Button>Start Generating</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Image Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Analyze images using advanced AI algorithms.</p>
            <Button>Analyze Images</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sentiment Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Analyze sentiment in text using our AI model.</p>
            <Button>Analyze Sentiment</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}