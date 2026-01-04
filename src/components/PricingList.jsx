import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

const PricingList = () => {
  return (
    <div className="flex gap-4 max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
         className="w-76 max-lg:w-full lg:w-auto h-full px-6 bg-n-8 border border-n-6 rounded-4xl odd:py-8 odd:my-4 even:py-14 odd:[&>h4]:text-color-2 even:[&>h4]:text-color-1 [&:nth-child(3)>h4]:text-color-3!
"

        >
          <h4 className="h4 mb-4">{item.title}</h4>
          <p className="body-2 min-h-16 mb-3 text-n-1/50">
            {item.description}
          </p>

          <div className="flex items-center h-22 mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@rivera"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Conctact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
