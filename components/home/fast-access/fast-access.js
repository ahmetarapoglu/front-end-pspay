//react
import { useRef } from "react";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";
//utils
import Container from "@/components/utils/container";
//next
import Image from "next/image";
//stle
import FastAccessStyle from "./fast-access.styled";
import styled from "styled-components";

const SlideImageStyle = styled.div`
  position: relative;
  width: 90%;
  height: 100px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100px;
  }
  img {
    transition: all 0.5s;
    cursor: grab;
  }
`;
const FastAccess = () => {
  SwiperCore.use([Autoplay]);
  const swiper = useRef();
  return (
    <FastAccessStyle>
      <Container>
        <div className="slide">
          <Swiper
            onInit={(_) => (swiper.current = _)}
            slidesPerView={4}
            spaceBetween={5}
            slidesPerGroup={1}
            breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1,
                spaceBetween: 5,
                slidesPerGroup: 1,
              },
              // 567: {
              //   width: 567,
              //   slidesPerView: 2,
              //   spaceBetween: 10,
              //   slidesPerGroup: 1,
              // },
              // 768: {
              //   width: 768,
              //   slidesPerView: 3,
              //   spaceBetween: 20,
              // },
              // 992: {
              //   width: 992,
              //   slidesPerView: 4,
              //   spaceBetween: 30,
              // },
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/bloomberg.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/coindesk.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/digital.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/forbes.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/coindesk.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/cryptocompare.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/hedgeweek.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/investopedia.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/kaiko.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
            <SwiperSlide>
              <SlideImageStyle>
                <Image src={"/delete/financemagnates.svg"} layout="fill" />
              </SlideImageStyle>
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </FastAccessStyle>
  );
};

export default FastAccess;
