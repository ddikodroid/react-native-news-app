import { useEffect, useState } from 'react'

const Greeting = () => {
  const [hour, setHour] = useState()
  const [greeting, setGreeting] = useState()

  const date = new Date()
  useEffect(() => {
    const time = date.getHours()
    setHour(time)
  }, [])

  if (hour > 0 && hour < 12) {
    setGreeting('Good morning')
  } else if (hour === 12) {
    setGreeting('Good noon')
  } else if (hour > 12 && hour < 18) {
    setGreeting('Good afternoon')
  } else {
    setGreeting('Good night')
  }

  return greeting
}

export default Greeting
