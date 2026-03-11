import React from "react";
import { createPortal } from "react-dom";

import { HeaderMenuItem } from "./static";

import clsx from "clsx";
import { HamburgerMenu } from "../HamburgerMenu";
import { useModal } from "../../hooks/useModal";
import { AppIcon } from "../AppIcon";

type Props = {
  menu: HeaderMenuItem[];
  active: boolean;
  onOpen: () => void;
  onClose: () => void;
  className?: string;
};

export const Hamburger: React.FC<Props> = ({
  menu,
  active,
  onOpen,
  onClose,
}) => {
  const onToggle = () => (active ? onClose() : onOpen());
  const { handleOpen } = useModal();
  return (
    <>
      <div className="flex">
        <button onClick={onToggle} className="flex h-8 items-center">
          <div className={clsx("flex flex-col gap-1", { hidden: active })}>
            <div className={clsx("h-0.5 w-[32px] bg-foreground")} />
            <div className={clsx("h-0.5 w-[32px] bg-foreground")} />
            <div className={clsx("h-0.5 w-[32px] bg-foreground")} />
            <div className={clsx("h-0.5 w-[32px] bg-foreground")} />
          </div>

          <AppIcon
            type="close"
            className={clsx("max-md:h-8 max-md:w-8 text-foreground", {
              hidden: !active,
            })}
          />
        </button>
      </div>
      {active &&
        createPortal(
          <HamburgerMenu
            className={`"md:hidden"`}
            menu={menu}
            onClose={onClose}
            handleOpen={handleOpen}
          />,
          document.body,
        )}
    </>
  );
};
