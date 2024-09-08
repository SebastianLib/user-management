import React from "react";
import { useDispatch } from "react-redux";
import { fetchUsers, setFilter } from "@/store/usersSlice";
import { Input } from "@/components/ui/input";
import { searchFields } from "@/utils/searchFields";
import { Button } from "@/components/ui/button";
import { AppDispatch } from "@/store/store";

const SearchInputs = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex w-full justify-center items-center flex-wrap md:flex-nowrap gap-2 max-w-[1200px] mx-auto">
      {searchFields.map((field) => (
        <Input
          key={field.key}
          type="text"
          placeholder={field.placeholder}
          onChange={(e) => dispatch(setFilter({ [field.key]: e.target.value }))}
          className="w-[200px] md:w-[22.50%] cursor-pointer"
        />
      ))}
      <div className="w-[200px] md:w-[10%]">
        <Button
          className="w-full bg-orange-400 hover:bg-orange-300 transition-colors rounded-md"
          onClick={() => dispatch(fetchUsers())}
        >
          Refresh
        </Button>
      </div>
    </div>
  );
};

export default SearchInputs;
