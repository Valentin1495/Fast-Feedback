import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent, useEffect, useRef, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import supabase from "../lib/supabase";
import { useSession } from "next-auth/react";

export default function AddFirstSite({
  setOpenToast,
}: {
  setOpenToast: SetOpenToast;
}) {
  const { data: session } = useSession();

  const [openModal, setOpenModal] = useState(false);

  const [nameFocus, setNameFocus] = useState(true);
  const [linkFocus, setLinkFocus] = useState(true);

  const nameRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const changeFocus = () => {
    setNameFocus(false);
    setLinkFocus(false);
  };

  const createSite = async () => {
    const { error } = await supabase.from("sites").insert([
      {
        username: session?.user?.name,
        photoUrl: session?.user?.image,
        site: nameRef.current?.value,
        link: linkRef.current?.value,
      },
    ]);
    console.log(error);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setOpenModal(false);
    window.setTimeout(() => {
      setOpenToast(true);
    }, 100);

    createSite();
  };

  useEffect(() => {
    setNameFocus(true);
    setLinkFocus(true);
  }, [openModal]);

  return (
    <div>
      <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
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
                  id="name"
                  name="name"
                  placeholder="My site"
                  className="Input"
                  ref={nameRef}
                  data-focused={nameFocus.toString()}
                  required
                  pattern="^[A-Za-z0-9]{3,16}$"
                />
                <p className="msg">
                  Should be 3-16 characters and not include any special
                  character
                </p>
              </fieldset>
              <fieldset className="Fieldset">
                <label className="Label" htmlFor="link">
                  Link
                </label>
                <input
                  ref={linkRef}
                  type="url"
                  className="Input"
                  id="link"
                  name="link"
                  placeholder="https://website.com"
                  required
                  data-focused={linkFocus.toString()}
                />
                <p className="msg">Invalid url</p>
              </fieldset>
              <div className="flex mt-[25px] justify-end">
                <button
                  onClick={changeFocus}
                  type="submit"
                  className="modalButton modalGreen"
                >
                  Create
                </button>
              </div>
            </form>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
}
