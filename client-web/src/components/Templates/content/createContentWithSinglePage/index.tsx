

import { useContext, useEffect, useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";


import CustomBox from "components/Atomics/CustomBox";
import CustomButton from "components/Atomics/CustomButton";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI examples components
import DashboardLayout from "components/Molecules/LayoutContainers/DashboardLayout";
import DashboardNavbar from "components/Molecules/Navbars/DashboardNavbar";
import Footer from "components/Molecules/Footer";

// CreateContentWithSinglePage page components
import ContentInfo from "./components/ContentInfo";
import { useRecoilValue } from "recoil";
import { authrizedUserAtom } from "context/userAtom";
import { ContentServiceClient } from "pb/ContentServiceClientPb";
import { Content, ContentCategory, ContentSubCategory, ContentTool } from "pb/content_pb";
import { useNavigate } from "react-router-dom";
import { SnackbarContext } from "utils/SnackbarContext";
import { LoadingContext } from "utils/LoadingContext";

function getSteps(): string[] {
  return ["Content Info"];
}

function getStepContent(
  stepIndex: number,
  setTitle: (title: string) => void,
  setDescription: (description: string) => void,
  setToolList: (toolList: number[]) => void,
  setCategoryList: (categoryList: number[]) => void,
  // setSubCategoryList: (subCategoryList: number[]) => void,

  // detail
  setPrompt: (prompt: string) => void,
  setPromptInstruction: (promptInstruction: string) => void,
  setMedia: (media: File[]) => void,
  setUrl: (url: string) => void,

  // price
  setPrice: (price: number) => void,
  // setCurrency: (currency: number) => void,
  setAspRate: (aspRate: number) => void
): JSX.Element {
  switch (stepIndex) {
    case 0:
      return <ContentInfo
        setTitle={setTitle}
        setDescription={setDescription}
        setToolList={setToolList}
        setCategoryList={setCategoryList}
        // setSubCategoryList={setSubCategoryList}
        setPrice={setPrice}
        // setCurrency={setCurrency}
        setAspRate={setAspRate}
        setPrompt={setPrompt}
        setPromptInstruction={setPromptInstruction}
        setMedia={setMedia}
        setUrl={setUrl}
      />;
    // case 1:
    //   return <Media
    //     setPrompt={setPrompt}
    //     setPromptInstruction={setPromptInstruction}
    //     setMedia={setMedia}
    //     setUrl={setUrl}
    // />;
    // case 2:
    //   return <Pricing
    //     setPrice={setPrice}
    //     setCurrency={setCurrency}
    //     setAspRate={setAspRate}
    //   />;
    default:
      return null;
  }
}

function CreateContentWithSinglePage(): JSX.Element {
  // snackbar and loading
  const { setSnackbarMessage, setType } = useContext(SnackbarContext)
  const loading = useContext(LoadingContext)

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
  const [promptInstruction, setPromptInstruction] = useState<string>("");
  const [media, setMedia] = useState<File[]>([]);
  const [url, setUrl] = useState<string>("");

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
    loading.setIsShow(true)
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
    // request.setCurrency(currency);
    request.setAspRate(aspRate);

    // for (const file of media) {
    //   const media = new ContentMedia();
    //   media.setMedia(file);
    //   request.addMedias(media);
    // }

    // request.setPrompt(prompt);
    // request.setPromptInstruction(promptInstruction);
    // request.setUrl(url);

    client.create(request, {}, (err, res) => {
      if (err) {
        loading.setIsShow(false)
        setType("error");
        setSnackbarMessage("登録に失敗しました。再度お試しください。");
      } else {
        setType("success");
        if (request.getIsOpen()) {
          loading.setIsShow(false)
          setSnackbarMessage("出品申請が完了しました。申請が承認されるまでお待ちください。");
        } else {
          loading.setIsShow(false)
          setSnackbarMessage("登録が完了しました。");
        }
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
                {/* <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper> */}
              </CustomBox>
              <CustomBox p={2}>
                <CustomBox>
                  {getStepContent(
                    activeStep,
                    setTitle,
                    setDescription,
                    setToolList,
                    setCategoryList,
                    // setSubCategoryList,

                    //detail
                    setPrompt,
                    setPromptInstruction,
                    setMedia,
                    setUrl,

                    // price
                    setPrice,
                    // setCurrency,
                    setAspRate,
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
                          下書き保存
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
                      {isLastStep ? "申請" : "next"}
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

export default CreateContentWithSinglePage;
