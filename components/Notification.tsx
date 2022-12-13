import * as Toast from "@radix-ui/react-toast";

interface ToastProps {
  openToast: boolean;
  setOpenToast: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Notification({ openToast, setOpenToast }: ToastProps) {
  return (
    <Toast.Provider swipeDirection="right">
      <Toast.Root
        className="ToastRoot"
        open={openToast}
        onOpenChange={setOpenToast}
      >
        <Toast.Title className="ToastTitle">Success!</Toast.Title>
        <Toast.Description asChild>
          <p className="ToastDescription">We've added your site.</p>
        </Toast.Description>
        <Toast.Action
          className="ToastAction"
          asChild
          altText="Goto dashboard to undo"
        >
          <button className="toastButton small toastGreen">Undo</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
}
