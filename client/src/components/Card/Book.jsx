export default function Book(props) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 slide-in transition-all duration-300 ease-in-out transform hover:bg-zinc-200 hover:-translate-y-2 hover:cursor-pointer hover:shadow-xl dark:bg-[rgb(30,30,30)]">
      <h3 className="text-xl font-bold mb-2 dark:text-white ">{props.genre}</h3>
      <p className="text-gray-600 dark:text-white">{props.description}</p>
    </div>
  );
}
