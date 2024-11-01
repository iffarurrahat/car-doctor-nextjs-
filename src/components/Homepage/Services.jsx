import { services } from "@/lib/services";
import ServicesCard from "../cards/ServicesCard";

const Services = () => {
  //   console.log(services);

  return (
    <div>
      <div className="text-center mt-4">
        <h3 className="text-xl md:text-2xl font-bold text-orange-600">
          Our Service
        </h3>
        <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
          Our Service Area
        </h5>
        <p className="sm:w-3/4 md:w-1/2 mx-auto mt-1.5 sm:mt-3 md:mt-5">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mt-16 max-w-screen-xl mx-auto px-1 sm:px-2 md:px-2.5">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service}></ServicesCard>
        ))}
      </div>
    </div>
  );
};

export default Services;