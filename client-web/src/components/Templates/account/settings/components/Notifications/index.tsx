
// @mui material components
import Card from "@mui/material/Card";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Switch from "@mui/material/Switch";


import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// Setting pages components
import TableCell from "components/Templates/account/settings/components/TableCell";

function Notifications(): JSX.Element {
  return (
    <Card id="notifications">
      <CustomBox p={3} lineHeight={1}>
        <CustomBox mb={1}>
          <CustomTypography variant="h5">Notifications</CustomTypography>
        </CustomBox>
        <CustomTypography variant="button" color="text">
          Choose how you receive notifications. These notification settings apply to the things
          you’re watching.
        </CustomTypography>
      </CustomBox>
      <CustomBox pb={3} px={3}>
        <CustomBox minWidth="auto" sx={{ overflow: "scroll" }}>
          <Table sx={{ minWidth: "36rem" }}>
            <CustomBox component="thead">
              <TableRow>
                <TableCell width="100%" padding={[1.5, 3, 1.5, 0.5]}>
                  Activity
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  Email
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  Push
                </TableCell>
                <TableCell align="center" padding={[1.5, 6, 1.5, 6]}>
                  SMS
                </TableCell>
              </TableRow>
            </CustomBox>
            <TableBody>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <CustomBox lineHeight={1.4}>
                    <CustomTypography display="block" variant="button" fontWeight="regular">
                      Mentions
                    </CustomTypography>
                    <CustomTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user mentions you in a comment
                    </CustomTypography>
                  </CustomBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <CustomBox lineHeight={1.4}>
                    <CustomTypography display="block" variant="button" fontWeight="regular">
                      Comments
                    </CustomTypography>
                    <CustomTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user comments your item.
                    </CustomTypography>
                  </CustomBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]}>
                  <CustomBox lineHeight={1.4}>
                    <CustomTypography display="block" variant="button" fontWeight="regular">
                      Follows
                    </CustomTypography>
                    <CustomTypography variant="caption" color="text" fontWeight="regular">
                      Notify when another user follows you.
                    </CustomTypography>
                  </CustomBox>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]}>
                  <Switch />
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell padding={[1, 1, 1, 0.5]} noBorder>
                  <CustomTypography display="block" variant="button" color="text">
                    Log in from a new device
                  </CustomTypography>
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
                <TableCell align="center" padding={[1, 1, 1, 0.5]} noBorder>
                  <Switch defaultChecked />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CustomBox>
      </CustomBox>
    </Card>
  );
}

export default Notifications;
