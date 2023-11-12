import banner from "../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
const Banner = () => {
  return (
    <div className="bg-pink-50">
      <div className="flex justify-center items-center gap-8">
        <div className="w-1/2 ml-[134px]">
          <h2 className="text-4xl font-bold text-black py-6">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h2>
          <p className="pb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>
          <button className="btn bg-pink-600 text-white">Get on Appointment</button>
        </div>
        <div className="w-1/2 mr-[217px]">
          <img className="w-[484px] h-[478px]" src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
