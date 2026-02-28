export default function ProductSection = ({ title, data, link }) => {
  const settings = {
    dots: false,
    infinite: false, 
    speed: 500,
    slidesToShow: 7, 
    slidesToScroll: 3,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5, slidesToScroll: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 1, arrows: false } }, // Mobile pe arrows hide kar diye
      { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 1, arrows: false } }
    ]
  };

  return (
    <section className="mb-10 relative">
      <div className="text-2xl pl-9 font-semibold text-[rgb(28,28,28)] px-3 h-[62px] flex items-center justify-between">
        {title}
        <Link to={link}>
          <span className="text-[14px] text-[rgb(12,131,31)] font-bold cursor-pointer">
            See all
          </span>
        </Link>
      </div>
      
      <div className="px-4 ">
        <Slider {...settings}>
          {data.slice(0, 15).map((product, idx) => (
            <div key={idx} className="px-2 flex gap-x-5 "> 
              <ItemBox product={product} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};