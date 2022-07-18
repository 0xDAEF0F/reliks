export function NoCreators() {
  return (
    <>
      {/* Container */}
      <div className='mx-auto mt-16 max-w-4xl px-4 sm:px-6 lg:px-8'>
        {/* Coming Soon Component */}
        <div className='rounded-md border p-4 text-center dark:border-darkMode-violet6 dark:bg-darkMode-violet10 dark:text-darkMode-violet12'>
          <p>There are currently no registered creators. 🤷‍♂️</p>
          <br />
          <p>Please come back in a day or two! 🙃</p>
        </div>
      </div>
    </>
  )
}
