import {  useAppDispatch, useAppSelector } from '../redux/hooks';

import DashboardLayout from "../layouts/DashboardLayout";
import { useEffect } from 'react';
import { fetchUser } from '../redux/userSlice';


const UserOverview = () => {


  const { user, status, error } = useAppSelector((state) => state.user);
 const dispatch = useAppDispatch();
const id = "1"
  useEffect(() => {
    dispatch(fetchUser(id));
  }, [dispatch]);
 

  if (status === 'loading') return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

 


  return (
    <DashboardLayout>
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-xl font-bold">User Overview</h2>
      <p>{user?.name}</p>
      <p>{user?.accountBalance}</p>
      <p>{user?.email}</p>
      <p>{user?.phone}</p>
    </div>
    </DashboardLayout>
  );
};

export default UserOverview;
