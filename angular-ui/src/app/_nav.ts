/**
 * Name: Nav.ts
 * @description: Here is define all admin pannel menu.
 */
interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}

export const navItems: NavData[] = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "fa fa-desktop",
  },
  {
    name: "Watch List",
    url: "/watchlist",
    icon: "fa fa-list",
  },
  /* {
    name: "Settings",
    url: "/settings",
    icon: "fa fa-gear ",
    children: [
      {
        name: "Crypto Currency",
        url: "/settings/crypto_symbols",
        icon: "fa fa-list",
      },
      {
        name: "Stock Market",
        url: "/settings/stock_symbols",
        icon: "fa fa-list",
      },
    ],
  }, */
];
