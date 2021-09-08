import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'

const infos = [
  {
    id: 1,
    title: 'Opening Hours',
    description: 'Lorem Ipsum is simply dummy text of the pri',
    icon: faClock,
    background: 'info',
  },
  {
    id: 2,
    title: 'Visit our location',
    description: 'Brooklyn, NY 10036, United States',
    icon: faMapMarkerAlt,
    background: 'dark',
  },
  {
    id: 3,
    title: 'Contact us now',
    description: '+000 123 456789',
    icon: faPhone,
    background: 'info',
  }
]

const BusinessInfo = () => {
  return (
    <section className='row container m-auto'>
      {
        infos.map(info => <InfoCard key={info.id} info={info} />)
      }
    </section>
  );
};

export default BusinessInfo;