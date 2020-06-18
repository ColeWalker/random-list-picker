import React, { useState, useEffect } from "react"
import styled from "styled-components"
// twitch user glEnd2
const Wrapper = styled.div`
  height: 1em;
  display: flex;
  align-items: flex-end;
  overflow-y: hidden;
  font-size: 45px;
  font-weight: 300;
  color: #000;
  line-height: 0.95em;
`

const TextBlock = styled.div`
  height: 1em;
  line-height: 0.95em;
  font-family: Red Hat Display;
`

export default function TextReel({ stop }) {
  const [selected, setSelected] = useState(0)
  const [nextUpdate, setNextUpdate] = useState(1)
  let start

  const animateCaller = () => {
    requestAnimationFrame(step)
  }

  const iterate = num => {
    const timer = setTimeout(() => {
      setSelected(num)
    }, 20)
    clearTimeout(timer)
  }

  const step = timestamp => {
    if (start === undefined) start = timestamp
    const elapsed = timestamp - start

    if (nextUpdate < 3) {
      setSelected(nextUpdate)
      setNextUpdate(nextUpdate + 1)
    } else {
      setSelected(nextUpdate % 3)
      setNextUpdate((nextUpdate + 1) % 3)
    }

    if (elapsed < 5000 && selected != stop) {
      // Stop the animation after 2 seconds
      requestAnimationFrame(step)
    }
  }

  useEffect(() => {
    requestAnimationFrame(step)

    return () => setSelected(0)
  }, [])

  return (
    <>
      <Wrapper>
        <div
          style={{
            transform: `translate(0, ${selected}em)`,
            transitionDuration: `700ms`,
            transitionDelay: `0ms`,
          }}
        >
          <TextBlock>Bobby {selected}</TextBlock>
          <TextBlock>Hello {selected}</TextBlock>
          <TextBlock>World {selected}</TextBlock>
        </div>
      </Wrapper>
      <button onClick={animateCaller}>animate</button>
    </>
  )
}
