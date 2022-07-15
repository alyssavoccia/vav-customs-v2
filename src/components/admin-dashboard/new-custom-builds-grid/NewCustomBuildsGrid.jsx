import { useContext, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import CustomBuildsContext from '../../../context/custom-builds/CustomBuildsContext';
import CustomBuildCard from '../custom-build-card/CustomBuildCard';
import './newCustomBuildGrid.scss';

function NewCustomBuildsGrid() {
  const { builds } = useContext(CustomBuildsContext);
  const [recentBuilds, setRecentBuilds] = useState([]);

  useEffect(() => {
    setRecentBuilds(builds.sort((a, b) => b.timestamp - a.timestamp));
  }, [builds]);

  return (
    <Swiper
      breakpoints={{
        1024: {
          slidesPerView: 3,
          spaceBetween: 0
        },
        768: {
          slidesPerView: 2
        },
        390: {
          slidesPerView: 1,
          spaceBetween: 10
        }
      }}
      observer={true} 
      observeParents={true}
      speed={800}
      slidesPerView={3}
      navigation={true}
      modules={[Navigation, A11y]}
      className='mySwiper'
    >
      {recentBuilds && recentBuilds.map(build => (
        build.status === 'Not Viewed' &&
          <SwiperSlide key={build.name}>
            <CustomBuildCard build={build} />
          </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default NewCustomBuildsGrid;