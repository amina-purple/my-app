import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import '@splidejs/react-splide/css/skyblue';
import '@splidejs/react-splide/css/sea-green';
import '@splidejs/react-splide/css/core';



const Page = (props) => {
  return (
    <div>
      <div className='container2'>
        <div className='cl-1'>
          <h3 className='cl-3'>НЕЗНАЕТЕ КАК ПОЛЬЗАВАТЬСЯ ЭТИМ ПРИЛОЖЕНИЕМ?</h3>
          <div className='cl-2'>
            <p>Шаг 1</p>
            <p>
             Зайти на страницу Main
            </p>
          </div>
          <div className='cl-2'>
            <p>Шаг 2</p>
            <p>
              В это приложение можно добавить пост который содержит название и описание
            </p>
          </div>
          <div className='cl-2'>
            <p>Шаг 3</p>
            <p>Можно смотреть и удалять посты</p>
          </div>
        </div>
      </div>
      <div className='cl-4'>
          <h3 className='cl-3'>НАШИ ПАРТНЁРЫ</h3>
          <Splide aria-label="My Favorite Images"
          options={{
            perPage: 3,
            perMove: 1,
            rewind: true,
            breakpoints:{
              1000:{
                perPage:2
              },
             720:{
              perPage:1
             }
            }
          }}>
            <SplideSlide className='carousel'>
              <img src="img/ocil.gif" alt="Image 1"/>
            </SplideSlide>
            <SplideSlide className='carousel'>
              <img src="img/fiona.webp" alt="Image 1"/>
            </SplideSlide>
            <SplideSlide className='carousel'>
              <img src="img/shrek.jpg" alt="Image 2"/>
            </SplideSlide>
            <SplideSlide className='carousel'>
              <img src="img/kot.jpg" alt="Image 2"/>
            </SplideSlide>
            <SplideSlide className='carousel'>
              <img src="img/kisa.jpg" alt="Image 2"/>
            </SplideSlide>
            <SplideSlide className='carousel'>
              <img src="img/pero.jpg" alt="Image 2"/>
            </SplideSlide>
          </Splide>   
        </div>
    </div>
  );
};
export default Page;