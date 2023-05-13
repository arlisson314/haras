/* eslint-disable import/no-unresolved */
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import { Container, StyledSwiper, StyledSwiperSlide } from './styles';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

function Carrossel() {
  const [parents, setParents] = useState([]);
  const URL = 'http://localhost:3004/parents';

  function getParents() {
    axios.get(URL)
      .then((response) => setParents(response.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getParents();
  }, []);

  return (
    <Container>
      <StyledSwiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 3000 }}
        direction="horizontal"
        navigation
      >
        {parents && parents.map((item) => (
          <StyledSwiperSlide key={item.id}>
            <img src={item.image} alt={item.name} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </Container>
  );
}

export default Carrossel;
