import { useEffect, useState } from 'react'

// Checks whether a PDF file really exists.
// Returns: 'checking' | 'found' | 'missing'
//
// Note: during `npm run dev`, Vite answers missing files with index.html (status 200),
// so we also confirm the response is actually a PDF before saying it exists.
export default function usePdfExists(path) {
  const [state, setState] = useState(path ? 'checking' : 'missing')

  useEffect(() => {
    if (!path) {
      setState('missing')
      return
    }

    let cancelled = false

    fetch(path, { method: 'HEAD' })
      .then((res) => {
        const type = res.headers.get('content-type') || ''
        const exists = res.ok && type.toLowerCase().includes('pdf')
        if (!cancelled) setState(exists ? 'found' : 'missing')
      })
      .catch(() => {
        if (!cancelled) setState('missing')
      })

    return () => {
      cancelled = true
    }
  }, [path])

  return state
}
