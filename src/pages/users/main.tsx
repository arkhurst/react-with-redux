import * as React from "react";
import { Link, useHistory } from "react-router-dom";
import { USER_ADD } from "../../navigation/constants";
import { DataView } from "./data-view";
import { User } from "./types";
import { TopLoader } from "../../components/loader";
import { useAppSelector } from "../../services/redux/broker";
import { EmptyState } from "../../components/alerts";

const DeleteUserComponent = React.lazy(() => import("./delete"));

function MainComponent() {
  const { push } = useHistory();
  const [selectedUser, setSelectedUser] = React.useState<User>();
  const [isModalShown, setIsModalShown] = React.useState<boolean>(false);

  const userList = useAppSelector((state) => state.users.value);

  return (
    <React.Fragment>
      <div className="relative  items-center  w-full px-5 py-12  mx-auto   md:px-12  lg:px-16  max-w-7xl">
        <h1 className="text-2xl font-bold leading-6 text-gray-800">
          {" "}
          Dashboard
        </h1>

        <div className="bg-white shadow-md  rounded-lg mt-8 pb-1">
          {/* table title and button */}
          <div className="flex flex-row items-center justify-between p-5 border-b border-black">
            <div>
              <h2 className="text-lg font-medium text-gray-700">User List</h2>
              {/* <SortMain /> */}
            </div>
            {userList?.length > 0 && (
              <>
                <Link
                  to={USER_ADD}
                  className="flex justify-center items-center  px-5 py-2 border border-transparent shadow-none text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-0 focus:ring-offset-0"
                >
                  Add new
                </Link>
              </>
            )}
          </div>
          {userList?.length === 0 ? (
            <>
              <EmptyState
                model="users"
                canAdd
                onAdd={() => {
                  push(USER_ADD);
                }}
              />
            </>
          ) : (
            <>
              {/* table */}
              <DataView
                users={userList}
                onDelete={(dataFromView: User) => {
                  setSelectedUser(dataFromView);
                  setIsModalShown(true);
                }}
                onEdit={(dataFromView: User) => {
                  push(`/edit/${dataFromView?.id}`);
                }}
              />
            </>
          )}
        </div>
      </div>
      <React.Suspense fallback={TopLoader()}>
        <DeleteUserComponent
          selectedUser={selectedUser}
          isModalShown={isModalShown}
          setIsModalShown={setIsModalShown}
        />
      </React.Suspense>
    </React.Fragment>
  );
}
export default MainComponent;
