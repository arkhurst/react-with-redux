import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useOutsideListener } from "../hooks";
import { IModalProps } from "./types";

const MainComponent: React.FC<IModalProps> = ({
  children,
  setShow,
  show,
  size,
  canClose,
  height,
}) => {
  const ref = React.useRef(null);
  useOutsideListener(ref, () => {
    if (canClose) setShow(false);
  });
  return (
    <React.Fragment>
      <Transition.Root show={show} as={React.Fragment}>
        <Dialog
          as="div"
          static
          className="fixed z-30 inset-0 overflow-y-auto"
          initialFocus={ref}
          open={show}
          onClose={setShow}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div
                ref={ref}
                style={{ width: `${size}vw`, height: `${height}vh` }}
                className="inline-block align-bottom bg-white rounded-lg  text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                {children}
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </React.Fragment>
  );
};

MainComponent.defaultProps = {
  size: 30,
  canClose: true,
};

export default MainComponent;
