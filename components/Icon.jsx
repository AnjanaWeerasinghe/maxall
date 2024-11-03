import { FaLeaf, FaRecycle, FaShieldAlt } from 'react-icons/fa';
import { GiCoconuts } from 'react-icons/gi'; 

const IconSection = () => {
  const iconItems = [
    {
      icon: <FaLeaf size={40} />,
      label: "100% Natural",
    },
    {
      icon: <GiCoconuts size={40} />,
      label: "Sri Lankan Origin",
    },
    {
      icon: <FaRecycle size={40} />,
      label: "Eco-Friendly Packaging",
    },
    {
      icon: <FaShieldAlt size={40} />,
      label: "Certified Quality",
    },
  ];

  return (
    <div className="flex justify-center gap-8">
      {iconItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center">
          <div className="p-4 rounded-full bg-customYellow flex items-center ">
            {item.icon}
          </div>
          <p className="text-lg font-semibold mt-2">{item.label}</p>
        </div>
      ))}
    </div>
  );
};

export default IconSection;
