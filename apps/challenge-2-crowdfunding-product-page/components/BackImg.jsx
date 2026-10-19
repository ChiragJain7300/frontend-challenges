const BackImg = () => {
  return (
    <>
      {/* Desktop Background */}
      <img
        src="/images/image-hero-desktop.jpg"
        alt="image-hero-desktop.jpg"
        className="z-[-10] absolute top-0 left-0 hidden md:block w-full h-[350px] object-cover"
      />
      {/* Mobile Background */}
      <img
        src="/images/image-hero-mobile.jpg"
        alt="image-hero-mobile.jpg"
        className="z-[-10] absolute top-0 left-0 block md:hidden w-full object-cover max-h-[300px]"
      />
    </>
  );
};

export default BackImg;
