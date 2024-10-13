import { useEffect, useState } from 'react'
import Firebase from 'infra/Firebase'
import { signInToServer } from 'infra/UserSession/SignIn'
import { useRecoilState } from 'recoil'
import { authrizedUserAtom } from 'context/userAtom'

type State = {
  isAuthenticated: boolean
  isAuthLoading: boolean
}

// firebaseの認証がうまく機能していない時は一度admin側でユーザーを作成してから再度ログイン試す
export const useUserSession = (): [State] => {
  const [user, setUser] = useRecoilState(authrizedUserAtom)

  const [loadingAuthState, setLoadingAuthState] = useState(true)

  useEffect(() => {
    return Firebase.instance.auth.onAuthStateChanged(async (response) => {
      // Firebase上で、SignoutされてもUserはNUllにならないため強制的にnullに変更する
      if (response == null && user != null) {
        setUser(null)
      }
      // Note: ログイン状態をFirebaseで管理しているため、サーバーにTokenを送る前に画面が切り替わってしまう
      // そのためSignin時にサーバーにトークンを送る
      if (response !== null && user === null) {
        const token = await response.getIdToken(true)
        const res = await signInToServer(token)
        setUser(res.toObject())
      }
      setLoadingAuthState(false)
    })
  }, [setUser, user])

  return [
    {
      isAuthenticated: user !== null,
      isAuthLoading: loadingAuthState,
    },
  ]
}
