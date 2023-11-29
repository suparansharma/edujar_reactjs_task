import React from 'react'
import Card from '../CourseCard/CourseCard';
import card1 from '../../images/card1.png';
import card3 from '../../images/card3.jpg';
import card4 from '../../images/card4.jpg';
import card5 from '../../images/card5.jpeg';
import Avtr from '../../images/avtr.jpg';
import Avtr1 from '../../images/avtr2.png';
import Avtr3 from '../../images/avtr3.jpg';
import Avtr4 from '../../images/avrt4.jpg';
import Avtr5 from '../../images/avtr5.png';
import './Courses.css'

const Courses = () => {
  const cardData = [
    {
      imageUrl: card1,
      title: 'Card 1',
      name:"Mr Amuk",
      deg:"Pythone Developer",
      profile: Avtr,
      text: 'Some quick example text for Card 1.',
      star: 4,

    },
    {
      imageUrl: card5,
      title: 'Card 1',
      name:"Mr Tomuk",
      deg:"Jango Developer",
      profile: Avtr1,
      text: 'Some quick example text for Card 1.',
      star: 3,

    },
    {
      imageUrl: card3,
      title: 'Card 1',
      name:"Mr Somuk",
      deg:"Pythone Developer",
      profile: Avtr3,
      text: 'Some quick example text for Card 1.',
      star: 4,

    },
    {
      imageUrl: card4,
      title: 'Card 1',
      name:"Mr Siir",
      deg:"Html Developer",
      profile: Avtr4,
      text: 'Some quick example text for Card 1.',
      star: 4,

    },
    {
      imageUrl: card3,
      title: 'Card 1',
      name:"Mr Amuk",
      deg:"Css Developer",
      profile: Avtr,
      text: 'Some quick example text for Card 1.',
      star: 3,

    },

    {
      imageUrl: card1,
      title: 'Card 1',
      name:"Mr Amuk",
      deg:"Pythone Developer",
      profile: Avtr5,
      text: 'Some quick example text for Card 1.',
      star: 4,

    },
 
  ];
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {cardData.map((card, index) => (
            <Card key={index} data={card} />
          ))}
        </div>
        <div className="container text-center mt-4">
          <p className='explore-all-btn'>Explore all Courses</p>
        </div>

      </div>
    </>
  )
}

export default Courses