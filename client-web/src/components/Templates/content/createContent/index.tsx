

import { useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Card from "@mui/material/Card";


import CustomBox from "components/Atomics/CustomBox";
import CustomButton from "components/Atomics/CustomButton";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";

// CreateContent page components
import ContentInfo from "./components/ContentInfo";
import { useRecoilValue } from "recoil";
import { authrizedUserAtom } from "context/userAtom";
import { ContentServiceClient } from "pb/ContentServiceClientPb";
import { Content, ContentCategory, ContentSubCategory, ContentTool } from "pb/content_pb";
import { useNavigate } from "react-router-dom";
import Detail from "./components/Detail";

function getSteps(): string[] {
  return ["1. Content Info", "2. Prompt"];
}

function getStepContent(
  stepIndex: number,
  title: string,
  setTitle: (title: string) => void,
  description: string,
  setDescription: (description: string) => void,
  toolList: number[],
  setToolList: (toolList: number[]) => void,
  categoryList: number[],
  setCategoryList: (categoryList: number[]) => void,
  subCategoryList: number[],
  // setSubCategoryList: (subCategoryList: number[]) => void,

  // detail
  prompt: string,
  setPrompt: (prompt: string) => void,
  testingPrompt: string,
  setTestingPrompt: (testingPrompt: string) => void,
  promptInstruction: string,
  setPromptInstruction: (promptInstruction: string) => void,
  media: File[],
  setMedia: (media: File[]) => void,
  url: string,
  setUrl: (url: string) => void,

  // price
  price: number,
  setPrice: (price: number) => void,
  // currency: number,
  // setCurrency: (currency: number) => void,
  aspRate: number,
  setAspRate: (aspRate: number) => void,

  // gpt
  gptEngine: string,
  setGptEngine: (gptEngine: string) => void,

  // stableDiffusion
  stableDiffusionModel: number,
  setStableDiffusionModel: (stableDiffusionModel: number) => void,
  stableDiffusionSampler: number,
  setStableDiffusionSampler: (stableDiffusionSampler: number) => void,
  imageWidth: number,
  setImageWidth: (imageWidth: number) => void,
  imageHeight: number,
  setImageHeight: (imageHeight: number) => void,
  cfgScale: number,
  setCfgScale: (cfgScale: number) => void,
  stableDiffusionSteps: number,
  setStableDiffusionSteps: (stableDiffusionSteps: number) => void,
  seed: string,
  setSeed: (seed: string) => void,
  clipGuidence: boolean,
  setClipGuidence: (clipGuidence: boolean) => void,
  nagativePrompt: string,
  setNagativePrompt: (nagativePrompt: string) => void,

  // preview
  previewInput: string,
  setPreviewInput: (previewInput: string) => void,
  previewOutput: string,
  setPreviewOutput: (previewOutput: string) => void,

  // testingPrompt: string,
): JSX.Element {
  if (stepIndex === 0) {
      return <ContentInfo
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        toolList={toolList}
        setToolList={setToolList}
        categoryList={categoryList}
        setCategoryList={setCategoryList}
        // subCategoryList={subCategoryList}
        // setSubCategoryList={setSubCategoryList}
        price={price}
        setPrice={setPrice}
        // currency={currency}
        // setCurrency={setCurrency}
        aspRate={aspRate}
        setAspRate={setAspRate}
      />;
  } else if (stepIndex === 1) {
    // for (let i = 0; i < toolList.length; i++) {
    //   if (toolList[i] === ContentTool.Tool.CHATGPT) {
        return <Detail
          prompt={prompt}
          setPrompt={setPrompt}
          testingPrompt={testingPrompt}
          setTestingPrompt={setTestingPrompt}
          promptInstruction={promptInstruction}
          setPromptInstruction={setPromptInstruction}
          media={media}
          setMedia={setMedia}
          url={url}
          setUrl={setUrl}

          // gpt
          gptEngine={gptEngine}
          setGptEngine={setGptEngine}

          // preview
          previewInput={previewInput}
          setPreviewInput={setPreviewInput}
          previewOutput={previewOutput}
          setPreviewOutput={setPreviewOutput}

          // toolList
          // toolList={toolList}
        />;
    //   } else if (toolList[i] === ContentTool.Tool.STABLE_DIFFUSION) {
    //     return <DetailForStableDiffusion
    //       prompt={prompt}
    //       setPrompt={setPrompt}
    //       testingPrompt={testingPrompt}
    //       setTestingPrompt={setTestingPrompt}
    //       promptInstruction={promptInstruction}
    //       setPromptInstruction={setPromptInstruction}
    //       media={media}
    //       setMedia={setMedia}
    //       url={url}
    //       setUrl={setUrl}

    //       // stableDiffusion
    //       stableDiffusionModel={stableDiffusionModel}
    //       setStableDiffusionModel={setStableDiffusionModel}
    //       stableDiffusionSampler={stableDiffusionSampler}
    //       setStableDiffusionSampler={setStableDiffusionSampler}
    //       imageWidth={imageWidth}
    //       setImageWidth={setImageWidth}
    //       imageHeight={imageHeight}
    //       setImageHeight={setImageHeight}
    //       cfgScale={cfgScale}
    //       setCfgScale={setCfgScale}
    //       stableDiffusionSteps={stableDiffusionSteps}

    //       setStableDiffusionSteps={setStableDiffusionSteps}
    //       seed={seed}
    //       setSeed={setSeed}
    //       clipGuidence={clipGuidence}
    //       setClipGuidence={setClipGuidence}
    //       nagativePrompt={nagativePrompt}
    //       setNagativePrompt={setNagativePrompt}

    //       // preview
    //       previewInput={previewInput}
    //       setPreviewInput={setPreviewInput}
    //       previewOutput={previewOutput}
    //       setPreviewOutput={setPreviewOutput}
    //     />;
    //   }
    // }

    // case 2:
    //   return <Pricing
    //     setPrice={setPrice}
    //     setCurrency={setCurrency}
    //     setAspRate={setAspRate}
    //   />;
  }
}

function CreateContent(): JSX.Element {
  // user
  const user = useRecoilValue(authrizedUserAtom)

  // navigation
  const navigate = useNavigate();

  // form
  // info
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [toolList, setToolList] = useState<number[]>([]);
  const [categoryList, setCategoryList] = useState<number[]>([]);
  const [subCategoryList, setSubCategoryList] = useState<number[]>([]);

  // detail
  const [prompt, setPrompt] = useState<string>("");
  const [testingPrompt, setTestingPrompt] = useState<string>("");
  const [promptInstruction, setPromptInstruction] = useState<string>("");
  const [media, setMedia] = useState<File[]>([]);
  const [url, setUrl] = useState<string>("");

  // gpt
  const [gptEngine, setGptEngine] = useState<string>("");

  // stableDiffusion
  const [stableDiffusionModel, setStableDiffusionModel] = useState<number>(0);
  const [stableDiffusionSampler, setStableDiffusionSampler] = useState<number>(0);
  const [imageWidth, setImageWidth] = useState<number>(0);
  const [imageHeight, setImageHeight] = useState<number>(0);
  const [cfgScale, setCfgScale] = useState<number>(0);
  const [stableDiffusionSteps, setStableDiffusionSteps] = useState<number>(0);
  const [seed, setSeed] = useState<string>("");
  const [clipGuidence, setClipGuidence] = useState<boolean>(false);
  const [nagativePrompt, setNagativePrompt] = useState<string>("");

  // preview
  const [previewInput, setPreviewInput] = useState<string>("");
  const [previewOutput, setPreviewOutput] = useState<string>("");

  // pricing
  const [price, setPrice] = useState<number>(0);
  const [currency, setCurrency] = useState<number>(0);
  const [aspRate, setAspRate] = useState<number>(0);

  useEffect(() => {
    console.log(
      "title is ", title, "description is ", description, "toolList is ",
      toolList, "categoryList is ", categoryList, "subCategoryList is ", subCategoryList,
      "price is ", price, "currency is ", currency, "aspRate is ", aspRate,
      "file is ", media, "url is ", url, "prompt is ", prompt, "promptInstruction is ", promptInstruction
    );
  }, [title, description, toolList, categoryList, subCategoryList, price, currency, aspRate, media, url, prompt, promptInstruction]);

  // stepper
  const [activeStep, setActiveStep] = useState<number>(0);
  const steps = getSteps();
  const isLastStep: boolean = activeStep === steps.length - 1;

  const handleNext = () => setActiveStep(activeStep + 1);
  const handleBack = () => setActiveStep(activeStep - 1);

  // submit
  const handleSubmit = (
    isOpen: boolean,
  ) => {
    const client = new ContentServiceClient(process.env.REACT_APP_ENVOY_URL);
    const request = new Content();

    request.setUserId(user?.id);
    request.setTitle(title);
    request.setDescription(description);

    // 公開設定
    if (isOpen) {
      request.setIsOpen(true);
    } else {
      request.setIsOpen(false);
    }

    for (const toolNum of toolList) {
      const tool = new ContentTool();
      tool.setTool(toolNum);
      request.addTools(tool);
    }

    for (const categoryNum of categoryList) {
      const category = new ContentCategory();
      category.setCategory(categoryNum);
      request.addCategories(category);
    }

    for (const subCategoryNum of subCategoryList) {
      const subCategory = new ContentSubCategory();
      subCategory.setSubCategory(subCategoryNum);
      request.addSubCategories(subCategory);
    }

    request.setPrice(price);
    request.setCurrency(currency);
    request.setAspRate(aspRate);

    client.create(request, {}, (err, res) => {
      if (err) {
        console.log("err is ", err);
      } else {
        console.log("response is ", res);
        navigate("/");
      }
    });

  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <CustomBox mt={5} mb={9}>
        <Grid container justifyContent="center">
          <Grid item xs={12} lg={8}>
            <CustomBox mt={6} mb={8} textAlign="center">
              <CustomBox mb={1}>
                <CustomTypography variant="h3" fontWeight="bold">
                  Add New Content
                </CustomTypography>
              </CustomBox>
              <CustomTypography variant="h5" fontWeight="regular" color="secondary">
                This information will describe more about the product.
              </CustomTypography>
            </CustomBox>
            <Card>
              <CustomBox mt={-3} mb={3} mx={2}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
              </CustomBox>
              <CustomBox p={2}>
                <CustomBox>
                  {getStepContent(
                    activeStep,
                    title,
                    setTitle,
                    description,
                    setDescription,
                    toolList,
                    setToolList,
                    categoryList,
                    setCategoryList,
                    subCategoryList,
                    // setSubCategoryList,

                    //detail
                    prompt,
                    setPrompt,
                    testingPrompt,
                    setTestingPrompt,
                    promptInstruction,
                    setPromptInstruction,
                    media,
                    setMedia,
                    url,
                    setUrl,

                    // price
                    price,
                    setPrice,
                    // currency,
                    // setCurrency,
                    aspRate,
                    setAspRate,

                    // gpt
                    gptEngine,
                    setGptEngine,

                    // stableDiffusion
                    stableDiffusionModel,
                    setStableDiffusionModel,
                    stableDiffusionSampler,
                    setStableDiffusionSampler,
                    imageWidth,
                    setImageWidth,
                    imageHeight,
                    setImageHeight,
                    cfgScale,
                    setCfgScale,
                    stableDiffusionSteps,
                    setStableDiffusionSteps,
                    seed,
                    setSeed,
                    clipGuidence,
                    setClipGuidence,
                    nagativePrompt,
                    setNagativePrompt,

                    // preview
                    previewInput,
                    setPreviewInput,
                    previewOutput,
                    setPreviewOutput,
                  )}
                  <CustomBox mt={3} width="100%" display="flex" justifyContent="space-between">
                    {activeStep === 0 ? (
                      <CustomBox />
                    ) : (
                      <CustomButton variant="gradient" color="light" onClick={handleBack}>
                        back
                      </CustomButton>
                    )}
                    {
                      isLastStep ? (
                        <CustomButton variant="gradient" color="dark" onClick={() => handleSubmit(false)}>
                          save as draft
                        </CustomButton>
                      ) : (
                        null
                      )
                    }
                    <CustomButton
                      variant="gradient"
                      color="dark"
                      onClick={!isLastStep ? handleNext : () => handleSubmit(true)}
                    >
                      {isLastStep ? "send" : "next"}
                    </CustomButton>
                  </CustomBox>
                </CustomBox>
              </CustomBox>
            </Card>
          </Grid>
        </Grid>
      </CustomBox>
      <Footer />
    </DashboardLayout >
  );
}

export default CreateContent;
