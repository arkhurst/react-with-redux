import React from "react";
import { SortControl } from "../../../components/modules/sort/sortControl";
import { User } from "../types";
import { Card } from "./card";
import { MainComponentProp } from "./types";
import { TableHeader } from "./table-header";

const listSortOptions = [
  { label: "Username", value: "username" },
  { label: "Name", value: "name" },
];

export default function MainComponent({
  users,
  onDelete,
  onEdit,
}: MainComponentProp) {
  const [list, setList] = React.useState(users);
  function handleSortChange(data: User[]) {
    setList(data);
  }
  return (
    <>
      <SortControl<User>
        data={list}
        onSortChange={handleSortChange}
        sortOptions={listSortOptions}
      />
      <div className="flex flex-col m-4">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow shadow-gray-100 overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <TableHeader />
                <tbody className="bg-white divide-y divide-gray-200">
                  {list.map((user: User) => (
                    <React.Fragment key={user.id}>
                      <Card
                        user={user}
                        onDelete={() => onDelete(user)}
                        onEdit={() => onEdit(user)}
                      />
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
