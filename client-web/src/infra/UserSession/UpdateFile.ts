import * as firebaseStorage from 'firebase/storage'
import { getDownloadURL, uploadBytesResumable } from 'firebase/storage'

interface Params {
  file: File
  fileName: string
  fileType: string
  uuid: string
}

export const createUploadTask: ({
  file,
  fileName,
  fileType,
  uuid,
}: Params) => firebaseStorage.UploadTask | null = ({
  file,
  fileName,
  uuid,
}: Params) => {
    const extension = file.name.split('.').pop()

  const refPath = makeUploadRefPath(fileName, extension, uuid)

    if (refPath === null) return null

    const storageRef = firebaseStorage.ref(firebaseStorage.getStorage(), refPath)

    return uploadBytesResumable(storageRef, file)
  }

export const uploadFile: (
  uploadTask: firebaseStorage.UploadTask
) => Promise<string | null> = async (
  uploadTask: firebaseStorage.UploadTask
) => {
    const ref = (await uploadTask).ref

    const fileUrl = await getDownloadURL(ref)
      .then((url) => url)
      .catch(() => Promise.reject(Error('アップロードに失敗しました')))

    return fileUrl
  }

function makeUploadRefPath(
  fileName: string,
  extension: string | undefined,
  uuid: string
): string | null | undefined {
  // ここで、ファイル名によって、アップロード先のパスを変える
  if (
    fileName === 'thumbnail'
  ) {
    return `contents/thumbnails/${uuid}/${fileName}.${extension}`
  } else if (
    fileName == 'content'
  ) {
    return `contents/details/${uuid}/${fileName}.${extension}`
  } else if (
    fileName == 'userPhotoUrl'
  ) {
    return `users/photoUrls/${uuid}/${fileName}.${extension}`
  }
}
