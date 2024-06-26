import Button from './Button'

const ErrorModal = ({ handleError }) => {
  return (
    <>
      <div className='fixed z-40 flex w-full h-full p-8 white-text bg-neutral-900 opacity-40'></div>
      <div className='fixed z-50 flex flex-col items-center w-4/5 gap-2 p-4 transform -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/5 white-text main-bg top-1/2 left-1/2'>
        <p className=''>Error</p>
        <p className='text-center'>
          The location&apos;s weather can&apos;t be found
        </p>
        <Button
          className={
            'bg-red-500 white-text text-xl rounded-md py-1 px-8 self-end'
          }
          onClick={handleError}
        >
          <p>Close</p>
        </Button>
      </div>
    </>
  )
}

export default ErrorModal
