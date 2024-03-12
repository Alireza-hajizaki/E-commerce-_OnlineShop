import { Carousel } from "flowbite-react";

const CarouselElem = () => {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel>
        <img src="./images/img1.jpg" alt="..." className="object-fill" />
        {/* <img src="./images/img2.jpg" alt="..." className='object-fill' />
        <img src="./images/img3.jpg" alt="..." className='object-fill' />
        <img src="./images/img4.jpg" alt="..." className='object-fill' />
        <img src="./images/img5.jpg" alt="..." className='object-fill' />
        <img src="./images/img6.jpg" alt="..." className='object-fill' /> */}
      </Carousel>
    </div>
  );
};

export default CarouselElem;
