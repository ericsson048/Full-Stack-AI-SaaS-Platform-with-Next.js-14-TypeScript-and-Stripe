import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'

export default function PricingPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Basic</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-4">$9.99/mo</p>
            <ul className="list-disc list-inside mb-4">
              <li>100 AI generations per month</li>
              <li>Basic support</li>
              <li>1 user</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Plan</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Pro</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-4">$29.99/mo</p>
            <ul className="list-disc list-inside mb-4">
              <li>1000 AI generations per month</li>
              <li>Priority support</li>
              <li>5 users</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Choose Plan</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Enterprise</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold mb-4">Custom</p>
            <ul className="list-disc list-inside mb-4">
              <li>Unlimited AI generations</li>
              <li>24/7 dedicated support</li>
              <li>Unlimited users</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Contact Sales</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}