import React from 'react'
import { OutlineButton } from '../components/button/Button';
import HeroSide from '../components/hero-slide/HeroSlide';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <HeroSide/>
        <div className='container' >
          <div className='section mb-3'>
            <div className='section__header mb-2'>
              <h2>Trending Movies</h2>
              <Link to="/movie">
                <OutlineButton className= "small">View more
                </OutlineButton>
              </Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home;