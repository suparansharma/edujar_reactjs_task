import React from 'react'
import Card from '../CourseCard/CourseCard';
import './Courses.css'

const Courses = () => {
  const cardData = [
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 1',
      text: 'Some quick example text for Card 1.',
      star: 4,

    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 1',
      text: 'Some quick example text for Card 1.',
      star: 3,

    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 1',
      text: 'Some quick example text for Card 1.',
      star: 4,

    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 1',
      text: 'Some quick example text for Card 1.',
      star: 4,

    },
    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 1',
      text: 'Some quick example text for Card 1.',
      star: 3,

    },

    {
      imageUrl: 'https://via.placeholder.com/300',
      title: 'Card 1',
      text: 'Some quick example text for Card 1.',
      star: 4,

    },
    // Add data for Card 2, Card 3, and so on...
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
          <p className='explore-btn'>Explore all Courses</p>
        </div>

      </div>
    </>
  )
}

export default Courses