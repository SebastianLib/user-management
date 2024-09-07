import { RootState } from '@/store/store';
import React from 'react'
import { useSelector } from 'react-redux';

const ErrorComponent = () => {
    const {error } = useSelector((state: RootState) => state.users);
  return (
    <div className="h-screen flex justify-center items-center">
    <p className="text-red-500">{error}</p>
  </div>
  )
}

export default ErrorComponent