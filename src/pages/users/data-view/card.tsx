import { CardComponentProp } from "./types";

function Card({ user, onEdit, onDelete }: CardComponentProp) {
  return (
    <>
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-500">{user.id}</div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.name}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.username || "n/a"}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.email}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
          {user.address.city || "n/a"}
        </td>
        <td className="pr-6 py-4 whitespace-nowrap text-right text-xs font-medium">
          <button
            type="button"
            onClick={onEdit}
            className="px-2 py-1 w-20 flex text-xs justify-center focus:outline-none leading-5 font-semibold rounded-md bg-yellow-400 text-white cursor-pointer hover:bg-yellow-500"
          >
            <div>edit</div>
          </button>
        </td>
        <td className="pr-6 py-4 whitespace-nowrap text-right text-xs font-medium">
          <button
            onClick={onDelete}
            type="button"
            className="px-2 py-1 w-20 iflex text-xs focus:outline-none leading-5 font-semibold rounded-md bg-red-600 text-white cursor-pointer hover:bg-red-700"
          >
            <div>delete</div>
          </button>
        </td>
      </tr>
    </>
  );
}

export { Card };
