import Image from "next/image";

export default function Home() {
  return (
    <section className="bg-white h-screen flex justify-center items-center">
      <div className="w-full max-w-md p-6 space-y-4 md:space-y-6 bg-white rounded-lg shadow-xl">
        <h1 className="text-xl font-bold leading-tight tracking-tight bg-cyan-500 rounded-tl-lg rounded-tr-lg focus:border-primary-600 w-full p-2.5 text-white md:text-2xl text-center">
          ログイン
        </h1>
        <form className="space-y-4 md:space-y-6" action="#">
          <div>
            <label
              htmlFor="id"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
            >
              あなたの ID
            </label>
            <input
              type="id"
              name="id"
              id="id"
              className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="ID を入力してください"
            />
          </div>

          <button
            type="submit"
            className="w-full text-white bg-red-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-extrabold rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            確定
          </button>
        </form>
      </div>
    </section>
  );
}
