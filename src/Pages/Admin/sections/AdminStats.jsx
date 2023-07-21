import React from 'react';
import AdminPage from '../AdminPage';
import StatisticCards from '../StatisticCards/StatisticCards';

const Admin = () => {

  const element = `<div>${StatisticCards}</div>`

  return (
    <AdminPage element={StatisticCards}/>
  )
}

export default Admin