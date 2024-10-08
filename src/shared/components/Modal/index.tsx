import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { PropsWithChildren } from "react";

interface IModalProps {
  title: string;
  iconTrigger: React.ReactNode;
}

export function Modal({
  title,
  children,
  iconTrigger,
}: PropsWithChildren<IModalProps>) {
  return (
    <Dialog>
      <DialogTrigger>{iconTrigger}</DialogTrigger>
      <DialogContent className=" min-w-[550px] bg-[#f6f6f5] border-none">
        <DialogHeader>
          <DialogTitle className="my-6 text-center text-2xl text-black">
            {title}
          </DialogTitle>
          <DialogDescription>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
