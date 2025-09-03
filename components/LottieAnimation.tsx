'use client'

import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'

interface LottieAnimationProps {
  animationUrl: string
  width?: number
  height?: number
  loop?: boolean
  autoplay?: boolean
  className?: string
}

export default function LottieAnimation({
  animationUrl,
  width = 200,
  height = 200,
  loop = true,
  autoplay = true,
  className = ''
}: LottieAnimationProps) {
  const [animationData, setAnimationData] = useState(null)

  useEffect(() => {
    fetch(animationUrl)
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.error('Error loading Lottie animation:', error))
  }, [animationUrl])

  if (!animationData) {
    return <div style={{ width, height }} className={className} />
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      autoplay={autoplay}
      style={{ width, height }}
      className={className}
    />
  )
}

// Predefined animations using Lottie Files free animations
export const LOTTIE_ANIMATIONS = {
  calendar: 'https://lottie.host/69c1e678-f734-4993-a96e-8a3b0e8e9b62/VKvxmZFhEF.json', // Calendar animation
  phone: 'https://lottie.host/8d2b5e5a-4e63-4c8d-b7a5-9b8e5c7a3d1f/PhoneRinging.json', // Phone ringing
  success: 'https://lottie.host/e4a9c9f4-6b8d-4e3a-9c5a-8b7d6c5e4f3a/Success.json', // Success checkmark
  arrow: 'https://lottie.host/f1c5d6b7-8a9e-4d3c-b7a6-9c8d7e6f5a4b/ArrowDown.json', // Arrow pointing down
  clock: 'https://lottie.host/a3b4c5d6-7e8f-9a1b-2c3d-4e5f6a7b8c9d/Clock.json', // Clock ticking
  shield: 'https://lottie.host/b4c5d6e7-8f9a-1b2c-3d4e-5f6a7b8c9d1e/Shield.json', // Shield protection
  heart: 'https://lottie.host/c5d6e7f8-9a1b-2c3d-4e5f-6a7b8c9d1e2f/Heart.json', // Heart beating
}

// Alternative: Direct JSON animations
export const INLINE_ANIMATIONS = {
  arrow: {
    "v": "5.7.4",
    "fr": 30,
    "ip": 0,
    "op": 60,
    "w": 100,
    "h": 100,
    "nm": "Arrow",
    "ddd": 0,
    "assets": [],
    "layers": [{
      "ddd": 0,
      "ind": 1,
      "ty": 4,
      "nm": "Arrow",
      "sr": 1,
      "ks": {
        "o": { "a": 0, "k": 100 },
        "r": { "a": 0, "k": 0 },
        "p": {
          "a": 1,
          "k": [{
            "i": { "x": 0.667, "y": 1 },
            "o": { "x": 0.333, "y": 0 },
            "t": 0,
            "s": [50, 30, 0],
            "to": [0, 6.667, 0],
            "ti": [0, -6.667, 0]
          }, {
            "t": 30,
            "s": [50, 70, 0]
          }]
        },
        "a": { "a": 0, "k": [0, 0, 0] },
        "s": { "a": 0, "k": [100, 100, 100] }
      },
      "ao": 0,
      "shapes": [{
        "ty": "gr",
        "it": [{
          "ty": "sh",
          "d": 1,
          "ks": {
            "a": 0,
            "k": {
              "i": [[0, 0], [0, 0], [0, 0]],
              "o": [[0, 0], [0, 0], [0, 0]],
              "v": [[-15, -15], [0, 0], [15, -15]],
              "c": false
            }
          }
        }, {
          "ty": "st",
          "c": { "a": 0, "k": [0.322, 0.157, 0.518, 1] },
          "o": { "a": 0, "k": 100 },
          "w": { "a": 0, "k": 4 },
          "lc": 2,
          "lj": 2,
          "ml": 4
        }],
        "nm": "Arrow",
        "np": 2,
        "cix": 2,
        "bm": 0
      }],
      "ip": 0,
      "op": 60,
      "st": 0,
      "bm": 0
    }]
  }
}