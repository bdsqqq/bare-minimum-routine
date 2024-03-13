"use client";

import { Drawer as DrawerPrimitive } from "vaul";

export const Drawer = () => {
  return (
    <DrawerPrimitive.Root shouldScaleBackground>
      <DrawerPrimitive.Trigger asChild>
        <button>Open Drawer</button>
      </DrawerPrimitive.Trigger>
      <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 bg-[color-mix(var(--gray-01),_transparent_20%)] backdrop-filter backdrop-blur-sm" />
        <DrawerPrimitive.Content className="bg-gray-01 flex flex-col rounded-t-[10px] h-[92%] mt-24 fixed bottom-0 left-0 right-0 border border-gray-05 focus:outline-none">
          <div className="h-full p-4">Hej do</div>
        </DrawerPrimitive.Content>
      </DrawerPrimitive.Portal>
    </DrawerPrimitive.Root>
  );
};
