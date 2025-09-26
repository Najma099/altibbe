export default function TransparencySection() {
  const items = [
    {
      title: "Agriculture",
      img: "https://altibbe.com/wp-content/uploads/2017/02/ico_1-77x77.png",
    },
    {
      title: "Fruits & Vegetables",
      img: "https://altibbe.com/wp-content/uploads/2017/02/ico_2-77x77.png",
    },
    {
      title: "Meat, Seafood & Dairy",
      img: "https://altibbe.com/wp-content/uploads/2017/02/ico_3-95x77.png",
    },
    {
      title: "Fashion",
      img: "https://altibbe.com/wp-content/uploads/2024/12/fashion-new.png",
    },
    {
      title: "Beauty",
      img: "https://altibbe.com/wp-content/uploads/2024/12/Beauty-2x-70x70.png",
    },
    {
      title: "Wellness",
      img: "https://altibbe.com/wp-content/uploads/2024/12/wellness-2x-77x77.png",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Redefining Health & Transparency
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Altibbe empowers consumers with informed choices by connecting them
          with sustainable, health-focused producers.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 hover:scale-105 transition-transform"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-16 h-16 object-contain mb-3"
              />
              <h3 className="text-base font-semibold text-gray-700 text-center">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
