/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from 'swiper/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from './styles';
import 'swiper/css';
// import img from '../../assets/horse.jpg';

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
      <Swiper>
        {parents && parents.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={require(item.image)} alt={item.name} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}

export default Carrossel;
