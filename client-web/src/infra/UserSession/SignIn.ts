import { FirebaseError } from '@firebase/util'
import * as firebaseAuth from 'firebase/auth'
import { firebaseAuthErrorHandler } from 'infra/lib/FirebaseAuthErrorHandler'
import { SignInRequest, User } from 'pb/user_pb'
import { UserServiceClient } from 'pb/UserServiceClientPb'
// Firebase
interface Params {
  email: string
  password: string
}

export const signInWithEmailAndPassword: ({
  email,
  password,
}: Params) => Promise<firebaseAuth.User | null> = async ({
  email,
  password,
}: Params) => {
    const auth = firebaseAuth.getAuth()
    return await firebaseAuth
      .signInWithEmailAndPassword(auth, email, password)
      .then((r) => r.user)
      .catch((e: FirebaseError) => Promise.reject(firebaseAuthErrorHandler(e)))
  }

// Server
export const signInToServer = async (token: string): Promise<User> => {
  const client = new UserServiceClient(process.env.REACT_APP_ENVOY_URL)
  const req = new SignInRequest()
  req.setToken(token)
  const res = await client.signIn(req, {})
  return res
}
