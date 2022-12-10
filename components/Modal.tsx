import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRef } from "react";

interface Inputs {
  name: string;
  link: string;
}

const schema = yup
  .object()
  .shape({
    name: yup.string().max(20).required(),
    link: yup.string().url().required(),
  })
  .required();

export default function Modal() {
  const closeRef = useRef<HTMLButtonElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: Inputs) => {
    console.log(JSON.stringify(data));

    closeRef.current?.click();
  };

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="name">
                Name
              </label>
              <input
                {...register("name")}
                id="name"
                placeholder="My site"
                className="Input"
              />
            </fieldset>
            {errors?.name?.type === "required" && (
              <p className="error">Required</p>
            )}
            {errors?.name?.type === "max" && (
              <p className="error mb-3">Must be 20 characters or less</p>
            )}
            <fieldset className="Fieldset">
              <label className="Label" htmlFor="link">
                Link
              </label>
              <input
                {...register("link")}
                className="Input"
                id="link"
                placeholder="https://website.com"
              />
            </fieldset>
            {errors?.link?.type === "required" && (
              <p className="error">Required</p>
            )}
            {errors?.link?.type === "url" && (
              <p className="error">Invalid website url</p>
            )}
            <div className="flex mt-[25px] justify-end">
              <button type="submit" className="Button green">
                Create
              </button>
              <Dialog.Close asChild>
                <button ref={closeRef} className="hidden" />
              </Dialog.Close>
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
  );
}
