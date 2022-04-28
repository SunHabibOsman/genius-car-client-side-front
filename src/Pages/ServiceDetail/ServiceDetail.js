import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([])
    useEffect(() => {
        const url = `http://localhost:4000/service/${serviceId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))


    }, [])
    return (
        <div>
            <h2>Welcome to detail: {serviceId}</h2>
            <h1>{service.name}</h1>
            <img src={service.img} alt="" />


            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;