// solar section
import pic1 from "../assets/img1.png";
import pic2 from "../assets/img3.png";

// water drilling
import pic3 from "../assets/img4.png";
import pic4 from "../assets/img6.png";

// construction
import pic5 from "../assets/img8.png"
import pic6 from "../assets/img9.png"
import OfferingData from "./OfferingData";

import "./OfferingStyles.css";

const Offering = () => {
  return (
    <div className="offering" id="offering">
      <h1>Services we offer</h1>
      <p>we offer Earthmovers Services</p>

      <OfferingData
        className="first-desc"
        heading="JCB Services"
        text="SSV Earthmover Company provides reliable JCB services for all your earthmoving needs. Our experienced team ensures efficient and precise JCB operations, whether it's excavation, land clearing, or other earthmoving tasks. We customize our JCB services to meet your project requirements, delivering high-quality results that exceed expectations. Trust SSV Earthmover Company for top-quality JCB services that are efficient, cost-effective, and tailored to your needs."
        img1={pic1}
        img2={pic2}
      />

      <OfferingData
        className="first-desc-reverse"
        heading="Quarry Bounding"
        text="Ensure efficient operations and optimize land use with our expert quarry bounding services. SSV Earthmover Company specializes in precise and reliable quarry bounding operations for various earthmoving projects. Our experienced team customizes quarry bounding to meet your project requirements, providing high-quality outcomes that exceed expectations. Trust SSV Earthmover Company for top-quality quarry bounding services that are efficient, cost-effective, and tailored to your needs."
        img1={pic3}
        img2={pic4}
      />

      <OfferingData
        className="first-desc"
        heading="Earth Handling And Transporting"
        text="Lead your earth handling and transporting projects to success with our expert team at SSV Earthmover Company. Specializing in managing and delivering high-quality, efficient earth handling and transporting services, we ensure your project is completed on time and within budget. With a strong track record in residential, commercial, and industrial projects, we pride ourselves on exceptional service and meeting each client's unique needs. Trust SSV Earthmover Company for top-quality earth handling and transporting services that exceed expectations."
        img1={pic5}
        img2={pic6}
      />
    </div>
  );
};

export default Offering;
