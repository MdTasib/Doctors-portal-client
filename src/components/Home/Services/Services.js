import React from 'react';
import floride from '../../../images/floride.png';
import cavity from '../../../images/cavity.png';
import tooth from '../../../images/tooth.png';
import ServiceDetails from '../ServiceDetails/ServiceDetails';

const serviceData = [
  {
    id: 1,
    title: 'Fluoride Treatment',
    description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
    image: floride,
  },
  {
    id: 2,
    title: 'Cavity Filling',
    description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
    image: cavity,
  },
  {
    id: 3,
    title: 'Teath Whitening',
    description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the ',
    image: tooth,
  }
]

const Services = () => {
  return (
    <section className='py-4 container'>
      <div className="text-center py-4">
        <h6 className='text-info'>OUR SERVICES</h6>
        <h3>Services We Provide</h3>
      </div>

      <div className="row py-3">
        {
          serviceData.map(service => <ServiceDetails key={service.id} service={service} />)
        }
      </div>
    </section>
  );
};

export default Services;