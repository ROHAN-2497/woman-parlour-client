import banner from "../../../assets/images/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png";
const Banner = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="w-1/2 ml-[134px] gap-16 py-6">
          <h2 className="text-4xl font-bold text-black ">
            BEAUTY SALON <br /> FOR EVERY WOMEN
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat{" "}
          </p>
          <button className="btn bg-pink-600">Get on Appointment</button>
        </div>
        <div className="w-1/2 mr-[217px]">
          <img src={banner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
