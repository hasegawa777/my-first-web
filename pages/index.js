import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-800 font-sans leading-normal tracking-normal" style={{ height: `min-height:600px` }}>
        <nav className="bg-gray-800 p-2 mt-0 w-full">
          <div className="container mx-auto flex flex-wrap items-center">
            <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
              <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                <p className="text-2xl pl-2 text-white">Brand logo</p>
              </a>
            </div>
            <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
              <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                <li className="mr-3">
                  <a className="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
                </li>
                <li className="mr-3">
                  <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                </li>
                <li className="mr-3">
                  <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                </li>
                <li className="mr-3">
                  <a className="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="#">link</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </main>
    </div>
  )
}