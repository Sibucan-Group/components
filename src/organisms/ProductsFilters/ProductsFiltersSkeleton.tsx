export const ProductFilterSkeleton = () => {
  return (
    <div className='w-96 rounded-2xl bg-stone-50 p-8 shadow-lg'>
      <div className='animate-pulse'>
        <div className='mx-auto my-2 h-5 w-2/3 rounded-full bg-gray-300' />
        <div className='h-6 rounded-full bg-gray-300' />
        <div className='my-10 space-y-4'>
          <div>
            <div className='my-2 h-5 w-1/3 rounded-full bg-gray-300' />
            <div className='h-12 rounded-2xl bg-gray-300' />
          </div>
          <div>
            <div className='my-2 h-5 w-1/3 rounded-full bg-gray-300' />
            <div className='h-12 rounded-2xl bg-gray-300' />
          </div>
          <div>
            <div className='my-2 h-5 w-1/3 rounded-full bg-gray-300' />
            <div className='h-12 rounded-2xl bg-gray-300' />
          </div>
        </div>
        <div className='my-8 flex items-center justify-between'>
          <div className='h-12 w-32 rounded-2xl bg-gray-300' />
          <div className='h-12 w-32 rounded-2xl bg-gray-300' />
        </div>
        <div className='mt-8'>
          <div className='h-12 rounded-full bg-gray-300' />
        </div>
      </div>
    </div>
  )
}
