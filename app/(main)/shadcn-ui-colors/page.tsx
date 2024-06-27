import { cn } from '@/lib/utils'
import React from 'react'

export default function Page() {
  return (
    <div className="flex justify-center space-x-8 bg-green-100">
      <div>
        <h2 className="font-bold text-3xl">Light</h2>
        <Box color="bg-border" />
        <Box color="bg-input" />
        <Box color="bg-ring" />
        <Box color="bg-background" />
        <Box color="bg-foreground" />
        <Box color="bg-primary" />
        <Box color="bg-primary-foreground" />
        <Box color="bg-secondary" />
        <Box color="bg-secondary-foreground" />
        <Box color="bg-destructive" />
        <Box color="bg-destructive-foreground" />
        <Box color="bg-muted" />
        <Box color="bg-muted-foreground" />
        <Box color="bg-accent" />
        <Box color="bg-accent-foreground" />
        <Box color="bg-popover" />
        <Box color="bg-popover-foreground" />
        <Box color="bg-card" />
        <Box color="bg-card-foreground" />
      </div>

      <div className="dark">
        <h2 className="font-bold text-3xl">Dark</h2>
        <Box color="bg-border" />
        <Box color="bg-input" />
        <Box color="bg-ring" />
        <Box color="bg-background" />
        <Box color="bg-foreground" />
        <Box color="bg-primary" />
        <Box color="bg-primary-foreground" />
        <Box color="bg-secondary" />
        <Box color="bg-secondary-foreground" />
        <Box color="bg-destructive" />
        <Box color="bg-destructive-foreground" />
        <Box color="bg-muted" />
        <Box color="bg-muted-foreground" />
        <Box color="bg-accent" />
        <Box color="bg-accent-foreground" />
        <Box color="bg-popover" />
        <Box color="bg-popover-foreground" />
        <Box color="bg-card" />
        <Box color="bg-card-foreground" />
      </div>
    </div>
  )
}

function Box({ color }: { color: string }) {
  return (
    <div>
      <h2 className="font-bold text-xl">{color}</h2>
      <div className={cn('size-16', color)}></div>
    </div>
  )
}
