import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllUsers = () => {
    
    const {data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    })

    return (
        <div>
            
            <table className="table w-full">
    <thead>
      <tr>
        <th>NO:</th>
        <th>UserName</th>
        <th>UserEmail</th>
      </tr>
    </thead>
    <tbody>
      {
        users.map((user,i) => <tr className="hover">
        <th>{i+1}</th>    
        <td>{user.userName}</td>
        <td>{user.userEmail}</td>
      </tr>)
      }
    </tbody>
  </table>
            
        </div>
    );
};

export default AllUsers;