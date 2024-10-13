
// @mui material components
import Card from "@mui/material/Card";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";
import CustomButton from "components/Atomics/CustomButton";

// Images
import productImage from "assets/images/products/product-11.jpg";

function ContentImage(): JSX.Element {
  return (
    <Card
      sx={{
        "&:hover .card-header": {
          transform: "translate3d(0, -50px, 0)",
        },
      }}
    >
      <CustomBox
        position="relative"
        borderRadius="lg"
        mt={-3}
        mx={2}
        className="card-header"
        sx={{ transition: "transform 300ms cubic-bezier(0.34, 1.61, 0.7, 1)" }}
      >
        <CustomBox
          component="img"
          src={productImage}
          alt="Content Image"
          borderRadius="lg"
          shadow="sm"
          width="100%"
          height="100%"
          position="relative"
          zIndex={10}
          mb={2}
        />
      </CustomBox>
      <CustomBox textAlign="center" pt={2} pb={3} px={3}>
        <CustomBox
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={-11}
          position="relative"
          zIndex={1}
        >
          <CustomBox mr={1}>
            <CustomButton variant="gradient" color="info" size="small">
              edit
            </CustomButton>
          </CustomBox>
          <CustomButton variant="outlined" color="dark" size="small">
            remove
          </CustomButton>
        </CustomBox>
        <CustomTypography variant="h5" fontWeight="regular" sx={{ mt: 4 }}>
          Content Image
        </CustomTypography>
        <CustomTypography variant="body2" color="text" sx={{ mt: 1.5, mb: 1 }}>
          The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to
          &#8220;Naviglio&#8221; where you can enjoy the main night life in Barcelona.
        </CustomTypography>
      </CustomBox>
    </Card>
  );
}

export default ContentImage;
