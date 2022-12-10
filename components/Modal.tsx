import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

export default function Modal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="hover:cursor-pointer bg-black text-white text-lg font-bold px-3 py-1.5 rounded-md hover:text-black hover:bg-white duration-700">
          Add your First Site
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="DialogOverlay" />
        <Dialog.Content className="DialogContent">
          <Dialog.Title className="DialogTitle">Add site</Dialog.Title>
          <Dialog.Description className="DialogDescription">
            Add site here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="name">
              Name
            </label>
            <input className="Input" id="name" placeholder="My site" />
          </fieldset>
          <fieldset className="Fieldset">
            <label className="Label" htmlFor="link">
              Link
            </label>
            <input
              className="Input"
              id="link"
              placeholder="https://website.com"
            />
          </fieldset>
          <div className="flex mt-[25px] justify-end">
            <Dialog.Close asChild>
              <button className="Button green">Create</button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="IconButton" aria-label="Close">
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
