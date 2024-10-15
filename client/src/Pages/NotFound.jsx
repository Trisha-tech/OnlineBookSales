import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[500px] font-extrabold flex-col dark:text-slate-200 h-96 flex items-center">
            <h1 className="text-[150px]">404</h1>
            <p>Maybe you have lost your way. <Link className="text-xl text-blue-500 hover:text-blue-600 ml-4 hover:underline " to="/"> Home </Link> </p>
        </div>
    </section>
  )
}

export default NotFound