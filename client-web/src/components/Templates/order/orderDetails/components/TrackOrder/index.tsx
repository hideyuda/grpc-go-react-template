

import CustomBox from "components/Atomics/CustomBox";
import CustomTypography from "components/Atomics/CustomTypography";

// MUI examples components
import TimelineItem from "components/Molecules/Timeline/TimelineItem";

function OrdersOverview(): JSX.Element {
  return (
    <>
      <CustomTypography variant="h6" fontWeight="medium">
        Track order
      </CustomTypography>
      <CustomBox mt={2}>
        <TimelineItem
          color="secondary"
          icon="notifications"
          title="Order received"
          dateTime="22 DEC 7:20 PM"
        />
        <TimelineItem
          color="secondary"
          icon="inventory_2"
          title="Generate order id #1832412"
          dateTime="22 DEC 7:21 AM"
        />
        <TimelineItem
          color="secondary"
          icon="shopping_cart"
          title="Order transmited to courier"
          dateTime="22 DEC 8:10 AM"
        />
        <TimelineItem
          color="success"
          icon="done"
          title="Order delivered"
          dateTime="22 DEC 4:54 PM"
          lastItem
        />
      </CustomBox>
    </>
  );
}

export default OrdersOverview;
