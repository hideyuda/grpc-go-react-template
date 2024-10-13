// MUI layouts
import ProfileOverview from "components/Templates/profile/profileOverview";
import Settings from "components/Templates/account/settings";
import Billing from "components/Templates/account/billing";
import Invoice from "components/Templates/account/invoice";
import EditContent from "components/Templates/content/editContent";
import OrderDetails from "components/Templates/order/orderDetails";
import OnsaleList from "components/Templates/contentList/onsaleList";
import CreateContent from "components/Templates/content/createContent";
import ContentPage from "components/Templates/content/contentPage";
import OrderContent from "components/Templates/order/orderContent";
import SignInWithGoogle from "components/Templates/authentication/signIn/google";
import SignUpWithGoogle from "components/Templates/authentication/signUp/google";
import ContentDetail from "components/Templates/content/contentDetail";
import LikedList from "components/Templates/contentList/likedList";
import PurchasedList from "components/Templates/contentList/purchasedList";
import SoldList from "components/Templates/contentList/soldList";
import MyProfile from "components/Templates/profile/myProfile";

// @mui icons
import Icon from "@mui/material/Icon";

// Images

const routes = [
  {
    type: "collapse",
    name: "OnsaleList",
    key: "OnsaleList",
    icon: <Icon fontSize="medium">listAlt</Icon>,
    route: "/",
    component: <OnsaleList />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "favorite Content",
    key: "favorite-content",
    auth: "authOnly",
    icon: <Icon fontSize="medium">favorite</Icon>,
    route: "/content/favorite",
    noCollapse: true,
    component: <LikedList />,
  },
  {
    type: "collapse",
    name: "purchased Content",
    key: "purchased-content",
    auth: "authOnly",
    icon: <Icon fontSize="medium">listAlt</Icon>,
    route: "/content/purchased",
    noCollapse: true,
    component: <PurchasedList />,
  },
  {
    type: "collapse",
    name: "CreateContent",
    key: "CreateContent",
    auth: "authOnly",
    icon: <Icon fontSize="medium">create</Icon>,
    route: "/content/create",
    component: <CreateContent />,
    noCollapse: true,
  },
  {
    type: "collapse",
    name: "sold Content",
    key: "sold-content",
    auth: "authOnly",
    icon: <Icon fontSize="medium">listAlt</Icon>,
    route: "/content/sold",
    noCollapse: true,
    component: <SoldList />,
  },
  // {
  //   type: "collapse",
  //   name: "Chat",
  //   key: "Chat",
  //   auth: "authOnly",
  //   icon: <Icon fontSize="medium">chatBubbleOutline</Icon>,
  //   route: "/chat",
  //   noCollapse: true,
  //   // component: <CreateMedia />,
  // },
  {
    name: "auth",
    key: "auth",
    collapse: [
      {
        name: "Sign In",
        key: "signin",
        route: "/signin",
        component: <SignInWithGoogle />,
      },
      {
        name: "Sign Up",
        key: "signup",
        route: "/signup",
        component: <SignUpWithGoogle />,
      },
    ],
  },
  {
    // type: "collapse",
    name: "Profile",
    key: "profile",
    icon: <Icon fontSize="medium">person</Icon>,
    auth: "authOnly",
    collapse: [
      {
        name: "Profile",
        key: "profile",
        route: "/profile",
        component: <ProfileOverview />,
      },
      {
        name: "My Profile",
        key: "my profile",
        route: "/profile/me",
        component: <MyProfile />,
      },
      // {
      //   name: "Profile Edit",
      //   key: "profile edit",
      //   route: "/profile/edit",
      //   component: <EditProfile />,
      // },
      {
        name: "Settings",
        key: "settings",
        auth: "authOnly",
        route: "/settings",
        component: <Settings />,
      },
      {
        name: "Billing",
        key: "billing",
        auth: "authOnly",
        route: "/billing",
        component: <Billing />,
      },
      {
        name: "Invoice",
        key: "invoice",
        auth: "authOnly",
        route: "/invoice",
        component: <Invoice />,
      },
    ],
  },
  {
    // type: "collapse",
    name: "Ecommerce",
    key: "ecommerce",
    // icon: <Icon fontSize="medium">shopping_basket</Icon>,
    auth: "authOnly",
    collapse: [
      {
        name: "Products",
        key: "products",
        collapse: [
          {
            name: "Edit Product",
            key: "edit-product",
            route: "/content/edit",
            component: <EditContent />,
          },
          {
            name: "Product Page",
            key: "product-page",
            route: "/content",
            component: <ContentPage />,
          },
          {
            name: "Content Detail",
            key: "content-detail",
            route: "/content/detail",
            component: <ContentDetail />,
          },
          {
            name: "Order Content",
            key: "order-content",
            route: "/content/order",
            component: <OrderContent />,
          }
          // {
          //   name: "content Page",
          //   key: "created-product-page",
          //   route: "/content/sold",
          //   // component: <ContentPage />,
          // },
          // {
          //   name: "purchased Content",
          //   key: "purchased-content",
          //   route: "/content/purchased",
          //   // component: <ContentPage />,
          // }
        ],
      },
      {
        name: "Orders",
        key: "orders",
        collapse: [
          // {
          //   name: "Order List",
          //   key: "order-list",
          //   route: "/order-list",
          //   component: <OrderList />,
          // },
          {
            name: "Order Details",
            key: "order-details",
            route: "/order",
            component: <OrderDetails />,
          },
        ],
      },
    ],
  },
];

export default routes;
