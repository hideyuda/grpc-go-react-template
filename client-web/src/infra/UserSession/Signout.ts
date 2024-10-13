import Firebase from 'infra/Firebase'

export const signOut: () => Promise<void> = async () => {
  return await Firebase.instance.auth.signOut()
}
