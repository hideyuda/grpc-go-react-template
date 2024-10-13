

import { useCallback, useEffect, useMemo, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomInput from "components/Atomics/CustomInput";

// NewContent page components
import FormField from "components/Templates/content/createContentWithSinglePage/components/FormField";
import { TextField } from "@mui/material";
import { ContentCategory, ContentTool } from "pb/content_pb";
import { useUploadFile } from "components/Hooks/useUploadFile";
import CustomDropzone from "components/Atomics/CustomDropzone";

function ContentInfo(
  props: {
    setTitle: (title: string) => void;
    setDescription: (description: string) => void,
    setToolList: (toolList: number[]) => void,
    setCategoryList: (categoryList: number[]) => void;
    // setSubCategoryList: (subCategoryList: string[]) => void;
    setPrice: (price: number) => void;
    // setCurrency: (currency: number) => void;
    setAspRate: (aspRate: number) => void;
    setPrompt: (prompt: string) => void;
    setPromptInstruction: (promptInstruction: string) => void;
    setMedia: (media: File[]) => void;
    setUrl: (url: string) => void;
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

  // const [editorValue, setEditorValue] = useState<string>(
  //   "<p>Some initial <strong>bold</strong> text</p><br><br><br><br>"
  // );

  const [toolOptions, setToolOptions] = useState<{ label: string, value: string }[]>([]);
  const [categoryOptions, setCategoryOptions] = useState<{ label: string, value: string }[]>([]);
  // const [subCategoryOptions, setSubCategoryOptions] = useState<{ label: string, value: string }[]>([]);

  useEffect(() => {
    Object.entries(ContentTool.Tool).map((option) =>
      toolOptions.push({ label: option[0].toString(), value: option[1].toString() })
    );

    Object.entries(ContentCategory.Category).map((option) =>
      categoryOptions.push({ label: option[0].toString(), value: option[1].toString() })
    );

  }, []);

  return (
    <CustomBox>
      <CustomTypography variant="h5">Content Information</CustomTypography>
      <CustomBox mt={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label="Title"
              fullWidth
              onChange={(event: { preventDefault: () => void; target: { value: string; }; }) => {
                event.preventDefault();
                props.setTitle(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormField
              type="text"
              label="Price"
              fullWidth
              onChange={(e: { preventDefault: () => void; target: { value: string; }; }) => {
                e.preventDefault();
                e.target.value = e.target.value.replace(/[^0-9.]/g, "");
                props.setPrice(parseFloat(e.target.value));
              }}
            />
          </Grid>
        </Grid>
      </CustomBox>
      <CustomBox mt={2} mb={4}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomBox mb={1} ml={0.5} lineHeight={0} display="inline-block">
              <CustomTypography component="label" variant="button" fontWeight="regular" color="text">
                Description&nbsp;&nbsp;
                <CustomTypography variant="caption" color="text">
                  (optional)
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
                props.setDescription(event.target.value);
              }}
            >
            </TextField>
            {/* <CustomEditor value={editorValue} onChange={setEditorValue} /> */}
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomBox mb={3}>
              <CustomBox mb={3}>
                <CustomBox mb={2} display="inline-block">
                  <CustomTypography
                    component="label"
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    textTransform="capitalize"
                  >
                    Tool
                  </CustomTypography>
                </CustomBox>
                <Autocomplete
                  multiple
                  disableClearable={true}
                  defaultValue={[]}
                  options={toolOptions}
                  renderInput={(params) => <CustomInput {...params} variant="standard" />}
                  onChange={(event, value) => {
                    event.preventDefault();
                    props.setToolList(value.map((tool) => typeof tool === "string" ? parseInt(tool) : parseInt(tool.value)));
                  }}
                />
              </CustomBox>
              <CustomBox mb={3}>
                <CustomBox mb={2} display="inline-block">
                  <CustomTypography
                    multiple
                    component="label"
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    textTransform="capitalize"
                  >
                    Category
                  </CustomTypography>
                </CustomBox>
                <Autocomplete
                  multiple
                  disableClearable={true}
                  defaultValue={[]}
                  options={categoryOptions}
                  renderInput={(params) => <CustomInput{...params} variant="standard" />}
                  onChange={(event, value) => {
                    event.preventDefault();
                    props.setCategoryList(value.map((category) => typeof category === "string" ? parseInt(category) : parseInt(category.value)));
                  }}
                />
              </CustomBox>
              <CustomBox mb={2} display="inline-block">
                <CustomTypography
                  component="label"
                  variant="button"
                  fontWeight="regular"
                  color="text"
                  textTransform="capitalize"
                >
                  affiliate commission(%)
                </CustomTypography>
              </CustomBox>
              <Autocomplete
                defaultValue="50"
                options={["0", "10", "20", "30", "40", "50", "60", "70", "80", "90", "100"]}
                renderInput={(params) => <CustomInput {...params} variant="standard" />}
                onChange={(e, value) => {
                  e.preventDefault()
                  props.setAspRate(parseFloat(value))
                }
                }
              />
            </CustomBox>
            {/* <CustomBox mb={2} display="inline-block">
              <CustomTypography
                component="label"
                variant="button"
                fontWeight="regular"
                color="text"
                textTransform="capitalize"
              >
                SubCategory
              </CustomTypography>
            </CustomBox>
            <Autocomplete
              multiple
              // defaultValue={["Clothing"]}
              options={subCategoryOptions.map((option) => option.label)}
              renderInput={(params) => <CustomInput {...params} variant="standard" />}
            // onChange={handleSubCategoryChange}
            /> */}
          </Grid>
        </Grid>
      </CustomBox>
      <CustomTypography variant="h5">Prompt And Media</CustomTypography>
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
    </CustomBox >
  );
}

export default ContentInfo;
