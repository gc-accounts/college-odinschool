import {
  Dialog,
  DialogContent,
  DialogTrigger
} from "@/components/components/ui/dialog";
import { X } from "lucide-react";

const Modal = ({
  open,
  onOpenChange,
  children,
  header_text
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  header_text:String
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto overflow-x-hidden p-0 rounded-xl">
        <div className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex justify-between items-center rounded-t-xl">
          <h2 className="text-lg font-semibold">{header_text || 'Enquire Now'}</h2>
          <button
            onClick={() => onOpenChange(false)}
            className="text-gray-500 hover:text-gray-800 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="p-6 pt-4">{children}</div>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
