import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 5em;
  display: flex;
  height: 100%
  width: 100%;

  .swiper-pagination-bullet-active, .swiper-pagination-bullet {
    background-color: var(--secundary);
    border-radius: 0;
    width: 20px;
  }

  .swiper-button-prev, .swiper-button-next{
    color: var(--primary);
  }
`;

export const StyledSwiper = styled(Swiper)`
  height: 30em;
  width: 100%;
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  height: 130%;
  display: flex;
  justify-content: center;
  >img {
    object-fit: center;
    height: 100%;
    width: 100%;
  }
`;

export default Container;
