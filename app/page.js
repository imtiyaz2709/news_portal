import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='flex w-full gap-10'>
        <div className='w-3/12'>
          <h1>Category here</h1>
        </div>
        <div className='w-9/12'>
          <h1 className='text-2xl font-semibold'>Post here</h1>
          <div flex flex-col gap-3>
           <div className='w-full bg-slate-200 border border-black rounded-xl shadow-lg p-4'>
           <h1 className='text-3xl font-black text-blue-600'>Title</h1>
            <p className='text-lg font-semibold text-slate-900'>This is my post</p>
            <div className='flex justify-end'>
                <Link href="" className='bg-blue-500 hover:bg-blue-900 text-white px-3 py-2 rounded'>Read More</Link>
            </div>
           </div>
          </div>
        </div>
      </div>
    </main>
  )
}