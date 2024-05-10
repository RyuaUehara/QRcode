export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <section className="text-center">
        <div className="bg-white flex items-center">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 md:mb-0 me-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            出勤
          </button>

          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 md:mb-0 me-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            退勤
          </button>
        </div>
      </section>
    </main>
  );
}
