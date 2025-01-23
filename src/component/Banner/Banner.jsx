import { Link } from "react-router";

export default function Banner() {
  return (
    <div>
      <div>
        <div className="hero bg-base-200 rounded-lg lg:p-10 md:p-8  w-fit md:w-full">
          <div className="flex flex-col md:flex-row-reverse w-fit md:w-full p-4 md:p-0 gap-2 md:gap-5">
            <img
              src="/books.jpg"
              className="w-full lg:max-w-sm md:max-w-xs rounded-lg shadow-2xl" />
            <div className="lg:w-8/12 space-y-5 flex flex-col justify-center">
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">Books to freshen up your bookshelf</h1>
              <Link to="books"><button className="btn bg-green-400 hover:bg-green-500 text-white transition-all ease-linear duration-200 w-fit">View The List</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}
