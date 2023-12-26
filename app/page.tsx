import Link from 'next/link'

export default function Home() {
  return (
   <main className='h-screen bg-gradient-radial flex justify-center items-center'>
    <div className='w-1/2 bg-slate-800 p-10 border-2 rounded-lg flex flex-col gap-10 justify-center items-center'>
      <h2 className='font-bold text-3xl my-5'>
        Strings
      </h2> 
      <Link className='bg-slate-900 w-full text-center rounded-lg py-3 px-8 hover:bg-slate-700 hover:text-blue-200' href='/signin'>Sign In</Link>
      <Link className='bg-slate-900 w-full text-center rounded-lg py-3 px-8 hover:bg-slate-700 hover:text-blue-200' href='/signup'>Sign Up</Link>
    </div>
   </main>
  )
}
