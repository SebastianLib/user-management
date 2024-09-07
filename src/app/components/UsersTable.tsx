import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { User } from "@/utils/users";
import { tableHeaders, TableItem } from "@/utils/tableHeaders";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
const UsersTable = () => {
  const { filteredUsers } = useSelector((state: RootState) => state.users);
  return (
    <Table className="max-w-[1000px] cursor-pointer overflow-x-auto">
      <TableHeader>
        <TableRow className="bg-orange-500 hover:bg-orange-400">
          {tableHeaders.map((header: TableItem) => (
            <TableHead key={header.key} className="text-white font-bold w-1/4">
              {header.label}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredUsers.map((user: User) => (
          <TableRow key={user.id}>
            <TableCell className="w-1/4">{user.name}</TableCell>
            <TableCell className="w-1/4">{user.username}</TableCell>
            <TableCell className="w-1/4">{user.email}</TableCell>
            <TableCell className="w-1/4">{user.phone}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default UsersTable;
