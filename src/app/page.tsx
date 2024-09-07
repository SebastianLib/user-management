"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers} from "@/store/usersSlice";
import { RootState, AppDispatch } from "@/store/store";

import LoadingSpinner from "@/components/shared/Loading";
import SearchInputs from "./components/SearchInputs";
import UsersTable from "./components/UsersTable";
import ErrorComponent from "@/components/shared/ErrorComponent";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorComponent />;

  return (
    <main className="flex flex-col justify-center items-center container mx-auto py-10 gap-10">
      <h1 className="text-3xl font-bold text-orange-500">User Management</h1>

      <div className="w-full max-w-[1000px] space-y-4">
        <SearchInputs />
        <UsersTable />
      </div>
    </main>
  );
};

export default HomePage;
