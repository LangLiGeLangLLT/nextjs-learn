'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Page() {
  return (
    <div className="space-y-8">
      <Form />
      <Form2 />
    </div>
  )
}

function Form() {
  const ref = React.useRef<HTMLInputElement>(null)

  function handleClick() {
    ref.current?.focus()
  }

  return (
    <form className="space-y-4">
      <MyInput label="Enter your name:" ref={ref} />
      <Button type="button" onClick={handleClick}>
        Edit
      </Button>
    </form>
  )
}

const MyInput = React.forwardRef(function MyInput(
  props: { label: string },
  ref: React.Ref<HTMLInputElement>
) {
  const { label, ...otherProps } = props

  return (
    <label className="space-y-4">
      <div>{props.label}</div>
      <Input {...otherProps} ref={ref} />
    </label>
  )
})

function Form2() {
  const ref = React.useRef<HTMLInputElement>(null)

  function handleClick() {
    if (!ref.current) return

    ref.current.focus()
    // 这行代码不起作用，因为 DOM 节点没有被暴露出来：
    // ref.current.style.opacity = '0.5'
  }

  return (
    <form>
      <MyInput2 placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button>
    </form>
  )
}

const MyInput2 = React.forwardRef(function MyInput2(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref
) {
  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useImperativeHandle(
    ref,
    () => {
      return {
        focus() {
          inputRef.current?.focus()
        },
        scrollIntoView() {
          inputRef.current?.scrollIntoView()
        },
      }
    },
    []
  )

  return <Input {...props} ref={inputRef} />
})
