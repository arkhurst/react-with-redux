import * as React from "react";
import { classNames } from "../../components/className";
import { SubmitHandler, useForm } from "react-hook-form";
import { EditUserFormInput } from "./types";
import { useHistory, useParams } from "react-router-dom";
import { HOME } from "../../navigation/constants";
import { useAppDispatch, useAppSelector } from "../../services/redux/broker";
import { editUser, getSingleUser } from "../../services/redux/reducer";
import toast from "react-hot-toast";

function MainComponent() {
  const dispatch = useAppDispatch();
  const userId: {
    id: string;
  } = useParams();
  const { push } = useHistory();
  const user = useAppSelector((state) => state.users.selectedValue);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EditUserFormInput>();

  React.useEffect(() => {
    if (userId?.id) {
      dispatch(
        getSingleUser({
          id: +userId.id,
        })
      );
      reset({
        name: user.name,
        email: user.email,
        city: user?.address?.city,
        username: user?.username,
      });
    }
  }, [dispatch, reset, user, userId]);

  const onSubmit: SubmitHandler<EditUserFormInput> = (data) => {
    dispatch(
      editUser({
        id: +userId.id,
        name: data.name,
        email: data.email,
        address: data?.city,
        username: data?.username,
      })
    );
    toast.success("Record updated successfully");
    push(HOME);
  };

  return (
    <React.Fragment>
      <div className="relative  items-center  w-full px-5 py-12  mx-auto   md:px-12  lg:px-16  max-w-5xl">
        <h1 className="text-2xl font-bold leading-6 text-gray-800">
          {" "}
          Dashboard
        </h1>
        <div className="bg-white shadow-md  rounded-lg mt-8 pb-1">
          {/* form title */}
          <div className="flex  p-5 border-b border-black">
            <h2 className="text-base font-medium text-gray-700">
              Edit User Form
            </h2>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="h-full flex flex-col "
          >
            <div className="flex-1">
              {/* Divider container */}
              <div className="py-6 space-y-3">
                {/* user's name */}
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="admin-firstname"
                      className="block text-sm font-medium text-gray-800  sm:pt-2"
                    >
                      Name *
                    </label>
                  </div>
                  <div className="sm:col-span-2 space-y-2 h-12">
                    <input
                      autoComplete="off"
                      {...register("name", {
                        required: "Required",
                      })}
                      type="text"
                      className={classNames(
                        errors.name
                          ? "focus:ring-red-500 focus:border-red-500 "
                          : "focus:ring-gray-500 focus:border-gray-500 ",
                        "appearance-none block bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-none placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                      )}
                    />
                    {errors.name && (
                      <>
                        <p className="text-xs text-red-500">Name is required</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div>
                    <label
                      htmlFor="admin-description"
                      className="block text-sm font-medium text-gray-800 sm:pt-2"
                    >
                      Email address *
                    </label>
                  </div>
                  <div className="sm:col-span-2 h-12 space-y-2">
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Enter a valid email address",
                        },
                      })}
                      type="email"
                      className={classNames(
                        errors.email
                          ? "focus:ring-red-500 focus:border-red-500 "
                          : "focus:ring-gray-500 focus:border-gray-500 ",
                        "appearance-none block bg-white w-full px-3 py-2 border border-gray-300 rounded-md shadow-none placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                      )}
                    />
                    {errors.email && (
                      <>
                        <p className="text-xs text-red-500">
                          {errors.email.message}
                        </p>
                      </>
                    )}
                  </div>
                </div>

                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="admin-firstname"
                      className="block text-sm font-medium text-gray-800  sm:pt-2"
                    >
                      Username
                    </label>
                  </div>
                  <div className="sm:col-span-2 space-y-2 h-12">
                    <input
                      autoComplete="off"
                      {...register("username", {
                        required: false,
                      })}
                      type="text"
                      className={
                        "appearance-none block bg-white focus:ring-gray-500 focus:border-gray-500  w-full px-3 py-2 border border-gray-300 rounded-md shadow-none placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                      }
                    />
                  </div>
                </div>
                <div className="space-y-1 px-4 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 sm:py-5">
                  <div className="flex flex-col space-y-1">
                    <label
                      htmlFor="admin-firstname"
                      className="block text-sm font-medium text-gray-800  sm:pt-2"
                    >
                      City
                    </label>
                  </div>
                  <div className="sm:col-span-2 space-y-2 h-12">
                    <input
                      autoComplete="off"
                      {...register("city", {
                        required: false,
                      })}
                      type="text"
                      className={
                        "appearance-none block bg-white focus:ring-gray-500 focus:border-gray-500  w-full px-3 py-2 border border-gray-300 rounded-md shadow-none placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex-shrink-0 px-4 py-5 sm:px-6">
              <div className="space-x-3 flex justify-end">
                <button
                  type="button"
                  className="bg-white py-2 px-5 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-gray-500"
                  onClick={() => push(HOME)}
                >
                  <div className="mt-0.5">Cancel</div>
                </button>
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-gray-500"
                >
                  <div className="mt-0.5">Submit</div>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
}
export default MainComponent;
