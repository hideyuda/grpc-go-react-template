
import { useCallback, useEffect, useMemo, useState } from "react";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomDropzone from "components/Atomics/CustomDropzone";
import { useUploadFile } from 'components/Hooks/useUploadFile'
import { TextField } from "@mui/material";
import FormField from "../FormField";

function Detail(
  props: {
    prompt: string;
    setPrompt: (prompt: string) => void;
    testingPrompt: string;
    setTestingPrompt: (testingPrompt: string) => void;
    promptInstruction: string;
    setPromptInstruction: (promptInstruction: string) => void;
    media: File[];
    setMedia: (media: File[]) => void;
    url: string;
    setUrl: (url: string) => void;

    // gpt
    gptEngine: string,
    setGptEngine: (gptEngine: string) => void,

    // preview
    previewInput: string,
    setPreviewInput: (previewInput: string) => void,
    previewOutput: string,
    setPreviewOutput: (previewOutput: string) => void,
  },
): JSX.Element {
  /*********************************************/
  // ファイル関連
  const [_fileSize, fileSizeCheck] = useUploadFile()

  const [_file, uploadFile] = useUploadFile()
  const [inputFile, setInputFile] = useState<File | null>(null)
  const [inputFiles, setInputFiles] = useState<File[]>([])
  const [fileType, setFileType] = useState('')

  const changeImageFile = useCallback((file: File) => {
    setInputFile(file)

    // 拡張子取得
    const t = file.name.split('.').pop()
    const type = t ? t : ''
    setFileType(type)
  }, [])

  const resetInputFile = useCallback(() => {
    setInputFile(null)
    const imageInput = document.getElementById('file') as HTMLInputElement
    imageInput.value = ''
  }, [])

  const acceptFileType =
    '.pdf,.xls,.xlsx,.doc,.docx,.gif,.png,.jpg,.jpeg,.jpe,.jfif,.pjpeg,.pjp'

  // const [preview, setPreview] = useState('')

  // useEffect(() => {
  //   if (
  //     inputFile != null &&
  //     (fileType == 'jpeg' ||
  //       fileType == 'jpg' ||
  //       fileType == 'png' ||
  //       fileType == 'jpe' ||
  //       fileType == 'jfif' ||
  //       fileType == 'pjpeg' ||
  //       fileType == 'pjp')
  //   ) {
  //     uploadFile(inputFile)
  //     // setPreview(window.URL.createObjectURL(inputFile))
  //   } else {
  //     // setPreview('')
  //   }
  // }, [inputFile])

  return (
    <CustomBox>
      <CustomTypography variant="h5">Prompt And Detail</CustomTypography>
      <CustomBox mt={3}>
        {/* <Grid item xs={12} sm={6}> */}
        <CustomBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <CustomTypography component="label" variant="button" fontWeight="regular" color="text">
            Prompt Text&nbsp;&nbsp;
            {/* <CustomTypography variant="caption" color="text">
                (optional)
              </CustomTypography> */}
          </CustomTypography>
        </CustomBox>
        <TextField
          fullWidth
          multiline
          rows={12}
          variant="outlined"
          onChange={(event: { preventDefault: () => void; target: { value: string; }; }) => {
            event.preventDefault();
            props.setPrompt(event.target.value);
          }}
        >
        </TextField>
        {/* <CustomEditor value={editorValue} onChange={setEditorValue} /> */}
        {/* </Grid> */}
        {/* <Grid item xs={12} sm={6}> */}
        <CustomBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <CustomTypography component="label" variant="button" fontWeight="regular" color="text">
            Instruction&nbsp;&nbsp;
            <CustomTypography variant="caption" color="text">
              extra tips for the user
            </CustomTypography>
          </CustomTypography>
        </CustomBox>
        <TextField
          fullWidth
          multiline
          rows={12}
          variant="outlined"
          onChange={(event: { preventDefault: () => void; target: { value: string; }; }) => {
            event.preventDefault();
            props.setPromptInstruction(event.target.value);
          }}
        >
        </TextField>
        {/* <CustomEditor value={editorValue} onChange={setEditorValue} /> */}
        {/* </Grid> */}
        <CustomBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
          <CustomTypography component="label" variant="button" fontWeight="regular" color="text">
            Product Image
          </CustomTypography>
        </CustomBox>
        {useMemo(
          () => (
            <CustomDropzone
              options={{
                addRemoveLinks: true,
                maxFiles: 5,
                // maxFilesize: 5,
                acceptedFiles: acceptFileType,
                init: function () {
                  this.on('addedfile', function (file: File) {
                    if (fileSizeCheck(file)) {
                      console.log('file', file)
                      changeImageFile(file)
                      setInputFiles(inputFiles => [...inputFiles, file])
                      props.setMedia([...inputFiles, file])
                    }
                  }
                  )
                }
              }
              }
            />
          ),
          []
        )}
        <FormField
          type="text"
          label="Url"
          fullWidth
          onChange={(event: { preventDefault: () => void; target: { value: string; }; }) => {
            event.preventDefault();
            props.setUrl(event.target.value);
          }}
        />
      </CustomBox>
    </CustomBox>
  );
}

export default Detail;
