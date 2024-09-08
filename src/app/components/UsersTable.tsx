import {
    Table,
    TableBody,
    TableHeader,
    TableCell,
    TableHead,
    TableRow,
  } from "@/components/ui/table";
  import { User } from "@/utils/users";
  import { tableHeaders, TableItem } from "@/utils/tableHeaders";
  import { RootState } from "@/store/store";
  import { useSelector, useDispatch } from "react-redux";
  import { Button } from "@/components/ui/button";
  import { removeUser } from "@/store/usersSlice";
  
  const UsersTable = () => {
    const dispatch = useDispatch();
    const { filteredUsers } = useSelector((state: RootState) => state.users);
  
    const handleRemove = (userId: number) => {
      dispatch(removeUser(userId));
    };
  
    return (
      <Table className="max-w-[1200px] cursor-pointer overflow-x-auto mx-auto mt-4 mb-10 shadow-xl">
        <TableHeader>
          <TableRow className="bg-orange-400 hover:bg-orange-300">
            {tableHeaders.map((header: TableItem) => (
              <TableHead
                key={header.key}
                className="text-white font-bold w-[22.50%]"
              >
                {header.label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell className="w-[22.50%]">{user.name}</TableCell>
              <TableCell className="w-[22.50%]">{user.username}</TableCell>
              <TableCell className="w-[22.50%]">{user.email}</TableCell>
              <TableCell className="w-[22.50%] ">{user.phone}</TableCell>
              <TableCell className="w-[10%] flex justify-start">
                <Button variant="destructive" onClick={() => handleRemove(user.id)}>
                  Remove
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  };
  
  export default UsersTable;