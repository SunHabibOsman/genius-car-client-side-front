import React, { useEffect, useState } from 'react';

const useServices = () => {
  const [service, setService] = useState([])
  useEffect(() => {
    const url = `http://localhost:4000/service/`
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data))


  }, [])
  return [service, setService]
};

export default useServices;