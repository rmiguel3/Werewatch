export default function MovieCard(
  { title = "Wolfman", image = "/wolfman.jpg" }
) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg shadow-lg w-64 flex-none transform-gpu hover:scale-105 transition-transform duration-200">
      <img
        src={image}
        alt={title + " poster"}
        className="w-full h-74 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}