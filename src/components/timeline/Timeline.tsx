import { timeline } from "./timelineData";

export default function Timeline() {
  return (
    <section className="max-w-6xl mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {timeline.map((item, index) => (
          <div key={index} className="bg-white shadow rounded-lg">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <span className="text-green-600 font-bold">{item.year}</span>

              <h3 className="font-bold text-lg">{item.title}</h3>

              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}