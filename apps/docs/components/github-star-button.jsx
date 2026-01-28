'use client'

import { useState, useEffect } from 'react'

export function GitHubStarButton() {
  const [stars, setStars] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchStars() {
      try {
        const res = await fetch('https://api.github.com/repos/soloshun/opendsa')
        if (res.ok) {
          const data = await res.json()
          setStars(data.stargazers_count)
        }
      } catch (error) {
        console.error('Failed to fetch stars:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchStars()
  }, [])

  const formatStars = (count) => {
    if (count >= 1000) {
      return (count / 1000).toFixed(1) + 'k'
    }
    return count?.toString() || '0'
  }

  return (
    <a
      href="https://github.com/soloshun/opendsa"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        // padding: '6px 12px',
        borderRadius: '9999px',
        // backgroundColor: 'rgba(255, 255, 255, 0.05)',
        // border: '1px solid rgba(255, 255, 255, 0.1)',
        fontSize: '14px',
        fontWeight: 400,
        color: 'inherit',
        textDecoration: 'none',
        transition: 'all 0.2s',
        marginLeft: '8px',
      }}

    >
      {/* star icon */}
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>
      <span>Stars</span>
      {!loading && stars !== null && (
        <span
          style={{
            padding: '2px 6px',
            borderRadius: '9999px',
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontSize: '13px',
            fontWeight: 400,
          }}
        >
          {formatStars(stars)}
        </span>
      )}
    </a>
  )
}
