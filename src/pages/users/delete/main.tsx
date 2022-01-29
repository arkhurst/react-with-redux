import * as React from "react";
import { DeleteUserModalProp } from "./types";
import { BasicModal } from "../../../components/modal";
import { useMediaQuery } from "react-responsive";
import { User } from "../types";
import { useAppDispatch } from "../../../services/redux/broker";
import { deleteUser } from "../../../services/redux/reducer";
import toast from "react-hot-toast";

const MainComponent: React.FC<DeleteUserModalProp> = ({
  isModalShown,
  setIsModalShown,
  selectedUser,
}) => {
  const dispatch = useAppDispatch();
  const [user, setUser] = React.useState<User>();
  const isTabletOrMobile = useMediaQuery({
    query: "(min-width: 320px) and (max-width: 480px)",
  });

  React.useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  function handleDelete(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    dispatch(
      deleteUser({
        id: user?.id,
      })
    );
    toast.success("Record removed successfully");
    setIsModalShown(false);
  }
  return (
    <React.Fragment>
      <BasicModal
        show={isModalShown}
        setShow={setIsModalShown}
        size={isTabletOrMobile ? 100 : 28}
      >
        <div className="inline-block align-bottom bg-white rounded-lg pt-5 pb-4 text-left overflow-hidden  transform transition-all sm:my-1 sm:align-middle sm:w-full ">
          <div className="sm:flex sm:items-start sm:flex-col">
            <div className="mt-3 text-left px-6 pb-4 sm:mt-0 border-b sm:px-6 sm:pb-4 border-black w-full   sm:text-left">
              <h3 className="text-lg leading-6 font-bold text-gray-900">
                Delete
              </h3>
            </div>
            <div className=" p-6 sm:p-6 border-b border-black">
              <p className="text-sm text-gray-500">
                Are you sure you want to remove {user?.name} from your record?
                All data related to this user will be permanently removed
                forever. This action cannot be undone.
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-row-reverse sm:mt-4 sm:flex sm:flex-row-reverse px-3 sm:px-3">
            <button
              type="button"
              onClick={handleDelete}
              className="w-full mt-0 sm:mt-0 md:mt-1 inline-flex justify-center rounded-md border border-transparent shadow-none px-4 py-2 bg-red-600 text-sm font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-0 focus:ring-offset-0 sm:ml-3 ml-3 sm:w-auto sm:text-sm"
            >
              Delete
            </button>
            <button
              type="button"
              onClick={() => setIsModalShown(false)}
              className="mt-0 md:mt-1  w-full inline-flex justify-center rounded-md border border-gray-300 shadow-none px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 sm:mt-0 sm:w-auto sm:text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </BasicModal>
    </React.Fragment>
  );
};

export default MainComponent;
