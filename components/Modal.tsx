import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent, useEffect, useRef, useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);

  const [nameFocus, setNameFocus] = useState(false);
  const [linkFocus, setLinkFocus] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setOpen(false);
    console.log(nameRef.current?.value, linkRef.current?.value);
  };

  useEffect(() => {
    setNameFocus(false);
    setLinkFocus(false);
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
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
            Add site here. Click create when you're done.
          </Dialog.Description>
          <form onSubmit={handleSubmit}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name
              </label>
              <input
                onBlur={() => setNameFocus(true)}
                id="name"
                name="name"
                placeholder="My site"
                className="Input name"
                ref={nameRef}
                data-focused={nameFocus.toString()}
                required
                pattern="^[A-Za-z0-9]{3,16}$"
              />
              <p className="nameError msg">
                Name should be 3-16 characters and shouldn't include any special
                character.
              </p>
            </fieldset>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="link">
                Link
              </label>
              <input
                ref={linkRef}
                onBlur={() => setLinkFocus(true)}
                type="url"
                className="Input link"
                id="link"
                name="link"
                placeholder="https://website.com"
                required
                data-focused={linkFocus.toString()}
              />
              <p className="linkError msg">Invalid url.</p>
            </fieldset>
            <div className="flex mt-[25px] justify-end">
              <button type="submit" className="Button green">
                Create
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
