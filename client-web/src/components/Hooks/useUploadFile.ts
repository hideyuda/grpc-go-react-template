import { useState, useCallback } from 'react'
import { createUploadTask, uploadFile } from 'infra/UserSession/UpdateFile'

const uploadFileMaxSize = 50 * 1024 * 1024 // 50MB

export type FileType =
  | 'thumbnail'
  | 'content'
  | 'userPhotoUrl'
  | 'userBackgroundUrl'


export const useUploadFile = (): [
  uploadFileData: (
    file: File,
    fileType: FileType,
    fileName: string,
    uuid: string
  ) => Promise<string>,
  fileSizeCheck: (file: File) => boolean,
  progress: number | null,
  isProgress: boolean,
  progressFile: FileType | null
] => {
  const [progressFile, setProgressFile] = useState<FileType | null>(null)
  const [progress, setProgress] = useState<number | null>(null)

  const fileSizeCheck = useCallback((file: File) => {
    console.log('ファイルサイズ', file.size)
    console.log('限度サイズ', uploadFileMaxSize)

    if (file.size > uploadFileMaxSize) {
      alert('容量が大きいため、こちらのファイルはアップロードできません')
      return false
    }
    return true
  }, [])

  const uploadFileData = useCallback(
    async (file: File, fileType: FileType, fileName: string, uuid: string) => {
      const uploadTask = createUploadTask({
        file,
        fileName,
        fileType,
        uuid,
      })

      if (uploadTask == null) {
        return Promise.reject(Error('アップロードに失敗しました'))
      }

      setProgressFile(fileType)
      uploadTask.on('state_changed', (snapshot) => {
        const progressCheck =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        setProgress(progressCheck)
      })

      const url = await uploadFile(uploadTask).catch((e: Error) => {
        setProgressFile(null)
        setProgress(null)
        return Promise.reject(e)
      })

      setProgressFile(null)
      setProgress(null)

      if (url == null) {
        return Promise.reject(Error('アップロードに失敗しました'))
      }

      return Promise.resolve(url)
    },
    []
  )

  return [
    uploadFileData,
    fileSizeCheck,
    progress,
    progress != null,
    progressFile,
  ]
}
