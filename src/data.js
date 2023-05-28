import React from 'react'



// import house images
import House1 from './assets/img/houses/house1.jpeg';
import House2 from './assets/img/houses/house1.jpeg';
import House3 from './assets/img/houses/house1.jpeg';
import House4 from './assets/img/houses/house1.jpeg';
import House5 from './assets/img/houses/house1.jpeg';
import House6 from './assets/img/houses/house1.jpeg';
import House7 from './assets/img/houses/house1.jpeg';
import House8 from './assets/img/houses/house1.jpeg';
import House9 from './assets/img/houses/house1.jpeg';
import House10 from './assets/img/houses/house1.jpeg';
import House11 from './assets/img/houses/house1.jpeg';
import House12 from './assets/img/houses/house1.jpeg';
import House13 from './assets/img/houses/House.jpg';
// import house large images
import House1Lg from './assets/img/houses/house1.jpeg';
import House2Lg from './assets/img/houses/house1.jpeg';
import House3Lg from './assets/img/houses/house1.jpeg';
import House4Lg from './assets/img/houses/house1.jpeg';
import House5Lg from './assets/img/houses/house1.jpeg';
import House6Lg from './assets/img/houses/house1.jpeg';
import House7Lg from './assets/img/houses/house1.jpeg';
import House8Lg from './assets/img/houses/house1.jpeg';
import House9Lg from './assets/img/houses/house1.jpeg';
import House10Lg from './assets/img/houses/house1.jpeg';
import House11Lg from './assets/img/houses/house1.jpeg';
import House12Lg from './assets/img/houses/house1.jpeg';
import House13Lg from './assets/img/houses/House.jpg';

// import apartments images
import Apartment1 from './assets/img/apartments/a1.jpg';
import Apartment2 from './assets/img/apartments/a1.jpg';
import Apartment3 from './assets/img/apartments/a1.jpg';
import Apartment4 from './assets/img/apartments/a1.jpg';
import Apartment5 from './assets/img/apartments/a1.jpg';
import Apartment6 from './assets/img/apartments/a1.jpg';
// import apartments large images
import Apartment1Lg from './assets/img/apartments/a1.jpg';
import Apartment2Lg from './assets/img/apartments/a1.jpg';
import Apartment3Lg from './assets/img/apartments/a1.jpg';
import Apartment4Lg from './assets/img/apartments/a1.jpg';
import Apartment5Lg from './assets/img/apartments/a1.jpg';
import Apartment6Lg from './assets/img/apartments/a1.jpg';

// import agents images
import Agent1 from './assets/img/agents/agent1.png';
import Agent2 from './assets/img/agents/agent2.png';
import Agent3 from './assets/img/agents/agent3.png';
import Agent4 from './assets/img/agents/agent4.png';
import Agent5 from './assets/img/agents/agent5.png';
import Agent6 from './assets/img/agents/agent6.png';
import Agent7 from './assets/img/agents/agent7.png';
import Agent8 from './assets/img/agents/agent8.png';
import Agent9 from './assets/img/agents/agent9.png';
import Agent10 from './assets/img/agents/agent10.png';
import Agent11 from './assets/img/agents/agent11.png';
import Agent12 from './assets/img/agents/agent12.png';
import { data } from 'autoprefixer';
import HouseList from './components/HouseList';

export const housesData = [
  {
    id: 1,
    type: 'House',
    name: 'House 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House1,
    imageLg: House1Lg,
    country: 'Indra Nagar',
    address: '7240C Address comes here',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2022',
    price: '11000',
    agent: {
      image: Agent1,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 2,
    type: 'House',
    name: 'House 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House2,
    imageLg: House2Lg,
    country: 'Balaganj',
    address: '798 Address comes here',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2022',
    price: '14000',
    agent: {
      image: Agent2,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 3,
    type: 'House',
    name: 'House 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House3,
    imageLg: House3Lg,
    country: 'Indra Nagar',
    address: '2 Address comes here',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2022',
    price: '17000',
    agent: {
      image: Agent3,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 4,
    type: 'House',
    name: 'House 4',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House4,
    imageLg: House4Lg,
    country: 'Balaganj',
    address: '84 Address comes here',
    bedrooms: '6',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2022',
    price: '12000',
    agent: {
      image: Agent4,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 5,
    type: 'House',
    name: 'House 5',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House5,
    imageLg: House5Lg,
    country: 'Indra Nagar',
    address: '28 Address comes here',
    bedrooms: '5',
    bathrooms: '3',
    surface: '4200 sq ft',
    year: '2022',
    price: '21000',
    agent: {
      image: Agent5,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 6,
    type: 'House',
    name: 'House 6',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House6,
    imageLg: House6Lg,
    country: 'Balaganj',
    address: '32 Address comes here',
    bedrooms: '6',
    bathrooms: '3',
    surface: '6200 sq ft',
    year: '2022',
    price: '22000',
    agent: {
      image: Agent6,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 7,
    type: 'Apartament',
    name: 'Apartament 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: 'Balaganj',
    address: '32 Address comes here',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2022',
    price: '9500',
    agent: {
      image: Agent7,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 8,
    type: 'Apartament',
    name: 'Apartament 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: 'Indra Nagar',
    address: '28 Address comes here',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2022',
    price: '8600',
    agent: {
      image: Agent8,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 9,
    type: 'Apartament',
    name: 'Apartament 3',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: 'Indra Nagar',
    address: '84 Address comes here',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1100 sq ft',
    year: '2022',
    price: '7600',
    agent: {
      image: Agent9,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 10,
    type: 'House',
    name: 'House 7',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House7,
    imageLg: House7Lg,
    country: 'Balaganj',
    address: '7240C Address comes here',
    bedrooms: '5',
    bathrooms: '3',
    surface: '3200 sq ft',
    year: '2022',
    price: '11700',
    agent: {
      image: Agent10,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 11,
    type: 'House',
    name: 'House 8',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House8,
    imageLg: House8Lg,
    country: 'Balaganj',
    address: '798 Address comes here',
    bedrooms: '7',
    bathrooms: '2',
    surface: '2200 sq ft',
    year: '2022',
    price: '14500',
    agent: {
      image: Agent11,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 12,
    type: 'House',
    name: 'House 9',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House9,
    imageLg: House9Lg,
    country: 'Indra Nagar',
    address: '2 Address comes here',
    bedrooms: '4',
    bathrooms: '4',
    surface: '4600 sq ft',
    year: '2022',
    price: '13900',
    agent: {
      image: Agent12,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 13,
    type: 'House',
    name: 'House 10',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House10,
    imageLg: House10Lg,
    country: 'Aliganj',
    address: '84 Address comes here',
    bedrooms: '5',
    bathrooms: '2',
    surface: '5200 sq ft',
    year: '2022',
    price: '5000',
    agent: {
      image: Agent1,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 14,
    type: 'House',
    name: 'House 11',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House11,
    imageLg: House11Lg,
    country: 'Indra Nagar',
    address: '28 Address comes here',
    bedrooms: '5',
    bathrooms: '2',
    surface: '3200 sq ft',
    year: '2022',
    price: '4500',
    agent: {
      image: Agent2,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 15,
    type: 'House',
    name: 'House 12',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: House12,
    imageLg: House12Lg,
    country: 'Balaganj',
    address: '32 Address comes here',
    bedrooms: '4',
    bathrooms: '3',
    surface: '5200 sq ft',
    year: '2022',
    price: '22100',
    agent: {
      image: Agent3,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 16,
    type: 'Apartament',
    name: 'Apartament 16',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: 'Balaganj',
    address: '32 Address comes here',
    bedrooms: '2',
    bathrooms: '1',
    surface: '1300 sq ft',
    year: '2022',
    price: '21000',
    agent: {
      image: Agent4,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 17,
    type: 'Apartament',
    name: 'Apartament 17',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: 'Indra Nagar',
    address: '28 Address comes here',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1000 sq ft',
    year: '2022',
    price: '32000',
    agent: {
      image: Agent5,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 18,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Alambagh',
    address: '84 Address comes here',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2022',
    price: '38000',
    agent: {
      image: Agent6,
      name: 'Saad',
      phone: '0123 456 78910',
    },
  },
  {
    id: 19,
    type: 'Apartament',
    name: 'Apartament 18',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: 'Alambagh',
    address: '98 Address comes here',
    bedrooms: '3',
    bathrooms: '1',
    surface: '1200 sq ft',
    year: '2022',
    price: '12000',
    agent: {
      image: Agent6,
      name: 'Saad',
      phone: '0123 456 78910',
  },
},
{
  id: 20,
  type: 'Apartament',
  name: 'Apartament 18',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
  image: Apartment6,
  imageLg: Apartment6Lg,
  country: 'Balaganj',
  address: '85 Address comes here',
  bedrooms: '3',
  bathrooms: '1',
  surface: '1200s sq ft',
  year: '2022',
  price: '5700',
  agent: {
    image: Agent6,
    name: 'Saad',
    phone: '0123 456 78910',
},
},
{
  id: 21,
  type: 'House',
  name: 'House',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur. Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias atqueratione delectus blanditiis nemo eius dignissimos doloremque quaealiquid maiores id tempore consequatur, quod pariatur saepe.',
  image: House13,
  imageLg: House13Lg,
  country: 'Indra Nagar',
  address: '7550C Address comes here',
  bedrooms: '6',
  bathrooms: '3',
  surface: '4200 sq ft',
  year: '2022',
  price: '11000',
  agent: {
    image: Agent1,
    name: 'Saad',
    phone: '0123 456 78910',
  },
},
];
function Data() {
  return (
    <div>data
      <HouseList/>
    </div>
  )
}

export default data;
