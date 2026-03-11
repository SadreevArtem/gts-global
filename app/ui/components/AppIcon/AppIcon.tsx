import React, { ReactNode } from "react";
import dynamic from "next/dynamic";
import { IconType } from "./types";
import clsx from "clsx";

const SocialVk = dynamic(() =>
  import("./components/SocialVk").then((module) => module.SocialVk),
);
const SocialTg = dynamic(() =>
  import("./components/SocialTg").then((module) => module.SocialTg),
);

const StarFilled = dynamic(() =>
  import("./components/StarFilled").then((module) => module.StarFilled),
);

const Close = dynamic(() =>
  import("./components/Close").then((module) => module.Close),
);
const Phone = dynamic(() =>
  import("./components/Phone").then((module) => module.Phone),
);
const ChevronRight = dynamic(() =>
  import("./components/ChevronRight").then((module) => module.ChevronRight),
);
const ArrowRight = dynamic(() =>
  import("./components/ArrowRight").then((module) => module.ArrowRight),
);
const Search = dynamic(() =>
  import("./components/Search").then((module) => module.Search),
);
const Favorite = dynamic(() =>
  import("./components/Favorite").then((module) => module.Favorite),
);
const Cart = dynamic(() =>
  import("./components/Cart").then((module) => module.Cart),
);
const PasswordHide = dynamic(() =>
  import("./components/PasswordHide").then((module) => module.PasswordHide),
);
const PasswordShow = dynamic(() =>
  import("./components/PasswordShow").then((module) => module.PasswordShow),
);
const FavoriteOutlined = dynamic(() =>
  import("./components/FavoriteOutlined").then(
    (module) => module.FavoriteOutlined,
  ),
);
const Check = dynamic(() =>
  import("./components/Check").then((module) => module.Check),
);

const Block = dynamic(() =>
  import("./components/Block").then((module) => module.Block),
);

type Props = {
  type: IconType;
  className?: string;
};

const icons: Record<IconType, (className: string) => ReactNode> = {
  "social-vk": (className) => <SocialVk className={className} />,
  "social-tg": (className) => <SocialTg className={className} />,
  "star-filled": (className) => <StarFilled className={className} />,
  close: (className) => <Close className={className} />,
  phone: (className) => <Phone className={className} />,
  "chevron-right": (className) => <ChevronRight className={className} />,
  "arrow-right": (className) => <ArrowRight className={className} />,
  search: (className) => <Search className={className} />,
  favorite: (className) => <Favorite className={className} />,
  cart: (className) => <Cart className={className} />,
  "password-hide": (className) => <PasswordHide className={className} />,
  "password-show": (className) => <PasswordShow className={className} />,
  "favorite-outlined": (className) => (
    <FavoriteOutlined className={className} />
  ),
  check: (className) => <Check className={className} />,
  block: (className) => <Block className={className} />,
};

export const AppIcon: React.FC<Props> = ({ type, className = "" }) => {
  return <>{icons[type](clsx(className, "shrink-0"))}</>;
};
