export type HeaderMenuItem = {
  key: "supplies" | "manufacturers" | "logistics";
  href: string;
};

export const HEADER_MENU: HeaderMenuItem[] = [
  {
    key: "supplies",
    href: "/supplies",
  },
  {
    key: "manufacturers",
    href: "/manufacturers",
  },
  {
    key: "logistics",
    href: "/logistics",
  },
];
