'use client'

import { Button } from '@/components/ui/button'
import { delay } from 'lodash'
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
      <Card title="Adding exit animations">
        <Button className="animate-out fade-out">Button</Button>
        <Button className="animate-out spin-out">Button</Button>
        <Button className="animate-out zoom-out">Button</Button>
        <Button className="animate-out slide-out-to-top">Button</Button>
        <Button className="animate-out slide-out-to-left">Button</Button>
      </Card>
      <Card title="Changing enter animation starting opacity">
        <Button className="animate-in fade-in">Button</Button>
        <Button className="animate-in fade-in-25">Button</Button>
        <Button className="animate-in fade-in-50">Button</Button>
        <Button className="animate-in fade-in-70">Button</Button>
      </Card>
      <Card title="Changing enter animation starting rotation">
        <Button className="animate-in spin-in-1">Button</Button>
        <Button className="animate-in spin-in-6">Button</Button>
        <Button className="animate-in spin-in-[75deg]">Button</Button>
        <Button className="animate-in spin-in-[95deg]">Button</Button>
      </Card>
      <Card title="Changing enter animation starting translate">
        <Button className="animate-in slide-in-from-top">Button</Button>
        <Button className="animate-in slide-in-from-bottom-48">Button</Button>
        <Button className="animate-in slide-in-from-left-72">Button</Button>
        <Button className="animate-in slide-in-from-right-96">Button</Button>
      </Card>
      <Card title="Changing exit animation ending opacity">
        <Button className="animate-out fade-out">Button</Button>
        <Button className="animate-out fade-out-25">Button</Button>
        <Button className="animate-out fade-out-50">Button</Button>
        <Button className="animate-out fade-out-75">Button</Button>
      </Card>
      <Card title="Changing exit animation ending rotation">
        <Button className="animate-out spin-out-1">Button</Button>
        <Button className="animate-out spin-out-6">Button</Button>
        <Button className="animate-out spin-out-[75deg]">Button</Button>
        <Button className="animate-out spin-out-[90deg]">Button</Button>
      </Card>
      <Card title="Changing exit animation ending scale">
        <Button className="animate-out zoom-out">Button</Button>
        <Button className="animate-out zoom-out-50">Button</Button>
        <Button className="animate-out zoom-out-75">Button</Button>
        <Button className="animate-out zoom-out-90">Button</Button>
      </Card>
      <Card title="Changing exit animation ending translate">
        <Button className="animate-out slide-out-to-top">Button</Button>
        <Button className="animate-out slide-out-to-bottom-48">Button</Button>
        <Button className="animate-out slide-out-to-left-72">Button</Button>
        <Button className="animate-out slide-out-to-right-96">Button</Button>
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
  const [isShow, setIsShow] = React.useState(true)

  function handleReload() {
    setIsShow(false)
    delay(() => {
      setIsShow(true)
    }, 100)
  }

  return (
    <div className="flex flex-col space-y-8">
      <h2 className="text-xl font-bold">
        {title}
        <Button variant="link" onClick={handleReload}>
          Reload
        </Button>
      </h2>
      <div className="space-x-4 h-12">{isShow && <>{children}</>}</div>
    </div>
  )
}
