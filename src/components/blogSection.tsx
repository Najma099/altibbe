export default function BlogSection() {
  const blogs = [
    {
      date: "12 Feb 2025",
      title: "Time-Tested Detox Practices: The Science Behind Nature's Healing Powers",
      url: "https://altibbe.com/time-tested-detox-practices-the-science-behind-natures-healing-powers/",
      image: "https://altibbe.com/wp-content/uploads/2024/03/blog-s-1-7-370x265.jpg",
      category: "Uncategorized",
      comments: 0,
    },
    {
      date: "17 Dec 2024",
      title: "Mind-Body Health: Progressing Together with Natural Nutrition",
      url: "https://altibbe.com/mind-body-health-progressing-together-with-natural-nutrition/",
      image: "https://altibbe.com/wp-content/uploads/2024/03/blog-s-1-7-370x265.jpg",
      category: "Altibbe",
      comments: 0,
    },
    {
      date: "17 Dec 2024",
      title: "The Power of Knowledge: Educating Ourselves to Make Better Food Choices",
      url: "https://altibbe.com/the-power-of-knowledge-educating-ourselves-to-make-better-food-choices/",
      image: "https://altibbe.com/wp-content/uploads/2023/11/blog-370x265.jpg",
      category: "Altibbe",
      comments: 0,
    },
    {
      date: "17 Dec 2024",
      title: "Food as Medicine: Rediscovering Ancient Wisdom for Modern Health",
      url: "https://altibbe.com/food-as-medicine-rediscovering-ancient-wisdom-for-modern-health/",
      image: "https://altibbe.com/wp-content/uploads/2023/11/blog-s-1-6-370x265.jpg",
      category: "Altibbe",
      comments: 0,
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center">
          Blog Posts
        </h2>

        {/* Asymmetric but even grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-[250px_250px] gap-4">
          {/* Large blog left */}
          <div className="md:col-span-4 md:row-span-2 relative bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group">
            <a href={blogs[0].url} className="block h-full">
              <img
                src={blogs[0].image}
                alt={blogs[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <p className="text-sm text-gray-300 mb-2">{blogs[0].date}</p>
                <h3 className="text-xl font-bold text-white leading-tight mb-2">
                  {blogs[0].title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {blogs[0].category} | {blogs[0].comments} Comments
                </p>
              </div>
            </a>
          </div>

          {/* Top-right small blog */}
          <div className="md:col-span-2 md:row-span-1 relative bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group">
            <a href={blogs[1].url} className="block h-full">
              <img
                src={blogs[1].image}
                alt={blogs[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-xs text-gray-300 mb-1">{blogs[1].date}</p>
                <h3 className="text-base font-semibold text-white mb-1 line-clamp-2">
                  {blogs[1].title}
                </h3>
                <p className="text-gray-200 text-xs">
                  {blogs[1].category} | {blogs[1].comments} Comments
                </p>
              </div>
            </a>
          </div>

          {/* Bottom-right medium blog */}
          <div className="md:col-span-2 md:row-span-1 relative bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group">
            <a href={blogs[2].url} className="block h-full">
              <img
                src={blogs[2].image}
                alt={blogs[2].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                <p className="text-sm text-gray-300 mb-1">{blogs[2].date}</p>
                <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">
                  {blogs[2].title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {blogs[2].category} | {blogs[2].comments} Comments
                </p>
              </div>
            </a>
          </div>

          {/* Wide blog bottom spanning full width */}
          <div className="md:col-span-6 md:row-span-1 relative bg-white rounded-lg shadow hover:shadow-lg transition-shadow overflow-hidden group">
            <a href={blogs[3].url} className="block h-78">
              <img
                src={blogs[3].image}
                alt={blogs[3].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
                <p className="text-sm text-gray-300 mb-2">{blogs[3].date}</p>
                <h3 className="text-xl font-bold text-white leading-tight mb-2">
                  {blogs[3].title}
                </h3>
                <p className="text-gray-200 text-sm">
                  {blogs[3].category} | {blogs[3].comments} Comments
                </p>
              </div>
            </a>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://altibbe.com/blogs"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-medium text-sm hover:bg-green-900 transition-colors"
          >
            See all posts
          </a>
        </div>
      </div>
    </section>
  );
}
