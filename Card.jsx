import { Outlet } from "react-router-dom";

export default function Card(props) {
    const Image = props.img;
    const Title = props.title;
    const Location = props.location;
    const Time = props.time;
  return (
    <>
      <div className="px-2 py-2 hover:border-2 border-black">
        <div className="group relative">
          <div className="relative max-h-full max-w-7xl overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
            <img
              className="h-full w-full object-cover object-center"
              src={Image}
              alt="Restraunt Image"
            />
          </div>
          <h3 className="mt-6 text-sm text-gray-500">{Title}</h3>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span> </span>
            <span className="text-base font-semibold text-gray-900">
              {Location}
            </span>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4 inline-block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span> </span>
            <span className="text-base font-semibold text-gray-900">
              {Time}
            </span>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
