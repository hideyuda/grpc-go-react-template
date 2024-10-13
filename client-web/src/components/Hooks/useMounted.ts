import { useEffect, useState } from 'react'

/**
 * ブラウザでの描画がされたかのフラグを管理
 * (`componentDidMount` 相当のタイミング)
 */
export function useMounted(): boolean {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}
