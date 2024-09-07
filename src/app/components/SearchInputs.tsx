import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '@/store/usersSlice';
import { Input } from '@/components/ui/input';
import { searchFields } from '@/utils/searchFields';

const SearchInputs = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex w-full justify-center items-center flex-wrap md:flex-nowrap gap-2 max-w-[1000px]">
      {searchFields.map((field) => (
        <Input
          key={field.key}
          type="text"
          placeholder={field.placeholder}
          onChange={(e) =>
            dispatch(setFilter({ [field.key]: e.target.value }))
          }
          className="max-w-[250px] w-full md:w-1/4 cursor-pointer"
        />
      ))}
    </div>
  );
};

export default SearchInputs;