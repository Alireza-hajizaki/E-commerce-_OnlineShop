import Counter from "../components/Counter";
import CarouselElem from "../components/carousel";
import FooterSection from "../components/footer";
import ProductContainer from "../components/productContainer";


const Home = () => {
  return (
    <>
      <CarouselElem />
      <div className="m-20">
        <ProductContainer />
        <Counter/>
      </div>
      <FooterSection/>
    </>
  );
};

export default Home;
