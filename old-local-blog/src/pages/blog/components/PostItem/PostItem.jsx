import React from 'react'

export default function PostItem() {
  return (
    <div classname='flex flex-col items-center overflow-hidden rounded-lg border md:flex-row'>
      <div classname='group relative block h-48 w-full shrink-0 self-start overflow-hidden bg-gray-100 md:h-full md:w-32 lg:w-48'>
        <img
          src='https://images.unsplash.com/photo-1648184217069-34f0a57791bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
          loading='lazy'
          alt='Nơi nào có ý chí, nơi đó có con đường.'
          classname='absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110'
        />
      </div>
      <div classname='flex flex-col gap-2 p-4 lg:p-6'>
        <span classname='text-sm text-gray-400'>2022-10-16T11:35</span>
        <h2 classname='text-xl font-bold text-gray-800'>Nơi nào có ý chí, nơi đó có con đường.</h2>
        <p classname='text-gray-500'>
          Tôi có thể chấp nhận thất bại, mọi người đều thất bại ở một việc gì đó. Nhưng tôi không chấp nhận việc không
          cố gắng.
        </p>
        <div>
          <div classname='inline-flex rounded-md shadow-sm' role='group'>
            <button
              type='button'
              classname='rounded-l-lg border border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            >
              Edit
            </button>
            <button
              type='button'
              classname='rounded-r-lg border-t border-b border-r border-gray-200 bg-white py-2 px-4 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:ring-2 focus:ring-blue-700'
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
