import { FirebaseError } from '@firebase/util'

export const firebaseAuthErrorHandler: (
  firebaseError: FirebaseError
) => Error = (firebaseError: FirebaseError) => {
  switch (firebaseError.code) {
    case 'auth/user-not-found':
      return Error('ユーザーが見つかりません')
    case 'auth/wrong-password':
      return Error('パスワードが間違っています')
    case 'auth/email-already-in-use':
      return Error('既にこのメールアドレスは利用されています')
    case 'auth/network-request-failed':
      return Error('ネットワークに接続してください')
    case 'auth/invalid-email':
      return Error('メールアドレスのフォーマットが正しくありません')
    default:
      return firebaseError
  }
}
