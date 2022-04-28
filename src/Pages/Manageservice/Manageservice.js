import React from 'react';
import useServices from '../useServices/useServices';

const Manageservice = () => {
  const [service, setService] = useServices()
  const handleDelete = (id) => {
    const procced = window.confirm('are you sure want to delete?');
    if (procced) {
      const url = `http://localhost:4000/service/${id}`
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          const remainig = service.filter(data => data._id !== id)
          setService(remainig)
        }
        )
    }
  }
  return (
    <div>
      {
        service.map(data => <div key={data._id}>
          <h4>{data.name}    <button onClick={() => handleDelete(data._id)}>X</button></h4>


        </div>)
      }
    </div>
  );
};

export default Manageservice;