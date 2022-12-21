import * as Dialog from "@radix-ui/react-dialog";
import { FormEvent, ReactNode, useEffect, useRef, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import supabase from "../lib/supabase";
import useSWR from "swr";
import fetcher from "../utils/fetcher";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function AddSite({
  setOpenToast,
  children,
}: {
  setOpenToast: SetOpenToast;
  children: ReactNode;
}) {
  const { mutate, data } = useSWR("/api/sites", fetcher);

  const [openModal, setOpenModal] = useState(false);

  const [nameFocus, setNameFocus] = useState(true);
  const [linkFocus, setLinkFocus] = useState(true);

  const nameRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);

  const changeFocus = () => {
    setNameFocus(false);
    setLinkFocus(false);
  };

  const { user } = useUser();

  const createSite = async (siteInfo: siteInfo) => {
    const { data, error } = await supabase
      .from("sites")
      .insert([siteInfo])
      .select();

    if (error) {
      console.log(error);
    }

    return data as Site[];
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setOpenModal(false);
    window.setTimeout(() => {
      setOpenToast(true);
    }, 100);

    const siteInfo = {
      authorId: user?.sub as string,
      name: nameRef.current?.value as string,
      link: linkRef.current?.value as string,
    };

    const newSite = await createSite(siteInfo);

    const { id, created_at } = newSite[0];

    await mutate({
      optimisticData: [{ ...newSite[0], id, created_at }, ...data],
      populateCache: true,
      revalidate: false,
    });
  };

  useEffect(() => {
    setNameFocus(true);
    setLinkFocus(true);
  }, [openModal]);

  return (
    <div>
      <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
        <Dialog.Trigger asChild>
          <button className="hover:cursor-pointer bg-white text-lg text-black font-bold px-3 py-1.5 rounded-md hover:text-white hover:bg-black duration-700">
            {children}
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
