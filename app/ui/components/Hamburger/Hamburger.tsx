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
  className = "string",
}) => {
  const onToggle = () => (active ? onClose() : onOpen());
  const { handleOpen } = useModal();
  return (
    <>
      <div className="flex">
        {/* <button
          className={clsx(
            "mr-2 bg-bg-opacity text-white px-6 py-2 text-[10px] rounded-[80px] hover:bg-black transition hover:text-primary",
            { hidden: !active }
          )}
          onClick={handleOpen}
        >
          ЗАПИСАТЬСЯ ОНЛАЙН
        </button> */}
        <button onClick={onToggle} className="flex">
          <div className={clsx("flex flex-col gap-2 ", { hidden: active })}>
            <div className={clsx("bg-black w-[38px] h-[2px]")} />
            <div className={clsx("bg-black w-[38px] h-[2px]")} />
            <div className={clsx("bg-black w-[38px] h-[2px]")} />
            <div className={clsx("bg-black w-[38px] h-[2px]")} />
          </div>

          <AppIcon
            type="close"
            className={clsx("text-white max-md:w-[32px] max-md:h-[32px]", {
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
