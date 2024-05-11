import "./TraitsStyles.css";
import TraitsData from "./TraitsData";

import trait1 from "../assets/img10.jpg";
import trait2 from "../assets/img15.jpg";
import trait3 from "../assets/img11.jpg";
import trait4 from "../assets/img16.jpg";
import trait5 from "../assets/img11.jpg";


function Trait() {
  return (
    <div className="trait">
      <p>
      At SSV Earthmovers, we offer an extensive range of top-quality machinery designed to cater to diverse project needs. Our fleet includes robust excavators, versatile bulldozers, powerful loaders, efficient dump trucks, and precision graders. Each piece of equipment is meticulously maintained to ensure optimal performance and reliability on every job site. Whether you're tackling excavation, grading, material handling, or transportation tasks, our machinery is equipped to deliver superior results. With advanced features and cutting-edge technology, our fleet enables you to maximize productivity while adhering to the highest safety standards. Trust SSV Earthmovers to provide the right machinery solutions to support your project's success, backed by our commitment to excellence and customer satisfaction.      </p>
      <div className="traitcard">
        <TraitsData
          image={trait1}
          heading="Tata Hitachi EX 70 PRIME"
          head="Mini Excavator"
          text="Tata Hitachi EX 70 Prime, the epitome of efficiency and versatility in mini excavators. Compact yet powerful, this model is designed to excel in various construction and utility applications. With its advanced features, the EX 70 Prime delivers optimal performance, ensuring superior productivity on the job site. Whether it's excavation, trenching, or landscaping, this mini excavator offers unmatched reliability. Equipped with best-in-class fuel efficiency, operator comfort, and safety features, the Tata Hitachi EX 70 Prime guarantees a seamless and efficient operation in confined spaces."
        />

        <TraitsData
          image={trait3}
          heading="Tata Hitachi EX 200 Infra"
          head="Construction Excavator"
          text="Tata Hitachi EX 200 Infra, designed to excel in efficiency and versatility, the EX 200 Infra sets new standards on the construction site. With its compact yet powerful build, it delivers best-in-class fuel efficiency, operator comfort. Whether navigating confined spaces or tackling diverse construction tasks, this model ensures seamless operation and unmatched performance. From excavation to material handling, the Tata Hitachi EX 200 Infra guarantees high power, efficiency, and cost-effectiveness, making it the ultimate choice for construction projects of any scale."
        />

        
      </div>
      <div className="traitcard">
        <TraitsData
          image={trait2}
          heading="Tata Hitachi Shinrai Power"
          head="Backhoe Loader"
          text="Tata Hitachi Shinrai Power Backhoe Loader, a powerhouse of performance and versatility. Engineered to tackle the toughest of tasks with ease, this backhoe loader combines robust construction with advanced technology. With its impressive digging depth and lifting capacity, the Shinrai Power Backhoe Loader is the ultimate solution for excavation, loading, and material handling needs. Whether it's construction, road building, or utilities maintenance, the Tata Hitachi Shinrai Power Backhoe Loader delivers unmatched performance and efficiency, setting new standards in the industry."
        />

        
        <TraitsData
          image={trait4}
          heading="Tata Hitachi EH 3500AC-3"
          head="Dump Truck"
          text="Tata Hitachi EX 3500AC-3 Dump Truck, a formidable combination of power and efficiency. Designed to handle heavy-duty hauling tasks with ease, this dump truck is engineered to deliver exceptional performance in the most demanding environments. With its robust construction and advanced features, the EX 3500AC-3 ensures reliable and efficient operation, even in the toughest terrains. Whether it's earthmoving, mining, or construction projects, this dump truck offers unmatched reliability and productivity. It provides operators with the confidence and comfort to tackle any job."







        />
      </div>
    </div>
  );
}

export default Trait;
