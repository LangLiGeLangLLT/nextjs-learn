import { Button } from '@/components/ui/button'
import React from 'react'

export default function Page() {
  return (
    <div className="flex flex-col space-y-16">
      <Card title="Changing animation delay">
        <Button className="animate-bounce delay-150 duration-300">
          Button
        </Button>
        <Button className="animate-bounce delay-300 duration-300">
          Button
        </Button>
        <Button className="animate-bounce delay-700 duration-300">
          Button
        </Button>
      </Card>
      <Card title="Changing animation direction">
        <Button className="animate-bounce direction-normal">Button</Button>
        <Button className="animate-bounce direction-reverse">Button</Button>
        <Button className="animate-bounce direction-alternate">Button</Button>
        <Button className="animate-bounce direction-alternate-reverse">
          Button
        </Button>
      </Card>
      <Card title="Changing animation duration">
        <Button className="animate-bounce duration-150">Button</Button>
        <Button className="animate-bounce duration-300">Button</Button>
        <Button className="animate-bounce duration-700">Button</Button>
      </Card>
      <Card title="Changing animation fill mode">
        <Button className="animate-bounce fill-mode-none">Button</Button>
        <Button className="animate-bounce fill-mode-forwards">Button</Button>
        <Button className="animate-bounce fill-mode-backwards">Button</Button>
        <Button className="animate-bounce fill-mode-both">Button</Button>
      </Card>
      <Card title="Changing animation iteration count">
        <Button className="animate-bounce repeat-0">Button</Button>
        <Button className="animate-bounce repeat-1">Button</Button>
        <Button className="animate-bounce repeat-infinite">Button</Button>
      </Card>
      <Card title="Changing animation play state">
        <Button className="animate-bounce running">Button</Button>
        <Button className="animate-bounce paused">Button</Button>
      </Card>
      <Card title="Changing animation timing function">
        <Button className="animate-bounce ease-linear">Button</Button>
        <Button className="animate-bounce ease-in">Button</Button>
        <Button className="animate-bounce ease-out">Button</Button>
        <Button className="animate-bounce ease-in-out">Button</Button>
      </Card>
      <Card title="Prefers-reduced-motion">
        <Button className="motion-safe:animate-bounce">Button</Button>
      </Card>
      <Card title="Adding enter animations">
        <Button className="animate-in fade-in">Button</Button>
        <Button className="animate-in spin-in">Button</Button>
        <Button className="animate-in zoom-in">Button</Button>
        <Button className="animate-in slide-in-from-top">Button</Button>
        <Button className="animate-in slide-in-from-left">Button</Button>
      </Card>
    </div>
  )
}

function Card({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-xl font-bold">{title}</h2>
      <div className="space-x-4">{children}</div>
    </div>
  )
}
