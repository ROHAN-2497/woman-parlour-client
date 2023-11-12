const Footer = () => {
  return (
    <div>
      <footer className="footer items-center p-10 bg-pink-600 text-primary-content h-[413px]">
        <div className="flex items-center gap-20">
          <div className="mb-16">
            <p className="font-bold">H#000 (0th Floor), Road #00,</p>
            <p>New DOHS, Mohakhali, Dhaka, Bangladesh</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Company</h3>
            <p>About</p>
            <p>Project</p>
            <p>Our Team</p>
            <p>Terms Conditions</p>
            <p>Submit Listing</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <p>Quick Links</p>
            <p>Rentals</p>
            <p>Sales</p>
            <p>Contact</p>
            <p>Our blog</p>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold">About us</h3>

            <p>
              Lorem ipsum dolor sit amet consectetur, <br /> adipisicing elit.{" "}
              <br />
              Provident, voluptate?
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
