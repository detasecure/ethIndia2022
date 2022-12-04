import React from 'react'

const WalletList = () => {
  return (
    <div className=''>

<div className="px-4 sm:px-8  m-auto">
        <h1 className="text-center font-semibold text-sm">Wallet Addresses</h1>
        {/* <p className="mt-2 text-center text-xs mb-4 text-gray-500">Same class for each list item</p> */}
        <ul className="border border-gray-200 rounded overflow-hidden shadow-md h-full scr">
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">First Item</li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Second Item</li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Third Item</li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Another Item</li>
            <li className="px-4 py-2 bg-white hover:bg-sky-100 hover:text-sky-900 border-b last:border-none border-gray-200 transition-all duration-300 ease-in-out">Item for the Nth time</li>
        </ul>
        {/* <a href="mailto:jefte_caro@yahoo.com" className="text-xs text-center block mt-4 hover:underline">@me</a> */}
    </div>
    </div>
  )
}

export default WalletList