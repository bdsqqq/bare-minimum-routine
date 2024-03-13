"use client";

import { Drawer as DrawerPrimitive } from "vaul";
import { createStore, useStore } from "zustand";

/*
Want to explore sharing a single drawer for the whole app,
and calling it with a function instead of using a component.

since it's a drawer manager, I'm calling it Cabinet.
*/

type CabinetStore = {
  open: boolean;
  content: React.ReactNode;

  triggerElement: HTMLElement | null;

  setOpen: (open: boolean) => void;

  reset: () => void;
};

const cabinetStore = createStore<CabinetStore>((set) => ({
  open: false,
  content: null,

  triggerElement: null,

  setOpen: (open) => set({ open }),

  reset: () =>
    set({
      open: false,
      content: null,
    }),
}));

export const drawer = ({
  content,
  triggerElement = null,
}: {
  content: CabinetStore["content"];
  triggerElement?: CabinetStore["triggerElement"];
}) => {
  cabinetStore.setState({
    open: true,
    content,
    triggerElement,
  });
};

export const Cabinet = () => {
  const { open, content, setOpen, triggerElement, reset } =
    useStore(cabinetStore);

  return (
    <DrawerPrimitive.Root
      open={open}
      onOpenChange={(newOpen) => {
        setOpen(newOpen);
        if (newOpen) return;
        reset();
      }}
      shouldScaleBackground
    >
      <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 bg-[color-mix(var(--gray-01),_transparent_20%)] backdrop-filter backdrop-blur-sm" />
        <DrawerPrimitive.Content
          onCloseAutoFocus={() => {
            console.log("onCloseAutoFocus", triggerElement);
            triggerElement?.focus();
            cabinetStore.setState({ triggerElement: null });
          }}
          className="bg-gray-01 flex flex-col rounded-t-[10px] h-[92%] mt-24 fixed bottom-0 left-0 right-0 border border-gray-05 focus:outline-none"
        >
          <div className="h-full p-4"> {content}</div>
        </DrawerPrimitive.Content>
      </DrawerPrimitive.Portal>
    </DrawerPrimitive.Root>
  );
};
