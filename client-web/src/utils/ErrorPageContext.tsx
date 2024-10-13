import { createContext, useState } from 'react'

type Props = {
  isShow?: boolean
  setIsShow: (type?: boolean) => void
  status?: number
  setStatus: (status?: number) => void
}

export const ErrorPageContext = createContext<Props>({
  setIsShow: () => { },
  setStatus: () => { },
})

export const useErrorPageContext = (): Props => {
  const [isShow, setIsShow] = useState<boolean | undefined>(undefined)
  const [status, setStatus] = useState<number | undefined>(undefined)

  return {
    isShow,
    setIsShow,
    status,
    setStatus,
  }
}
