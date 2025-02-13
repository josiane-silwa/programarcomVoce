import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
//import './App.css'
import CarouselThumbs from "./CarouselThumbs"
import { productImages } from '../../assets/'
import React from 'react'
import './CarouselThumbs.css'

const index = () => {

  const larguraTela = window.innerWidth;
  //console.log(larguraTela)

  return (
        <div style={{
          height: '100vh',
          //width: '400px',
          paddingTop: '120px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 'auto'
        }}>
          <div className='divCaroussel' 
          style={{
                    width: '400px',
                    backgroundColor: 'black',
                    padding: '20px'
                }}>
            <CarouselThumbs images={productImages}/>
          </div>
        </div>
  )
}

export default index
