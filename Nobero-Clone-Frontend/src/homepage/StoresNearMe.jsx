import { MapPin } from 'lucide-react'
import React from 'react'

const StoresNearMe = () => {
    return (
        <div>
            <img src="https://nobero.com/cdn/shop/files/store-locator-banner.webp?v=1742377605&width=720"
                alt="Nobero" className='w-full h-auto lg:hidden' />
            <div className='m-4 p-2 lg:p-4 lg:mx-60 lg:my-24 lg:flex items-center justify-center lg:border-[1px]'>
                <img src="https://nobero.com/cdn/shop/files/image_1.png?v=1741855007"
                    alt="Nobero" className='w-full h-auto lg:w-72 lg:h-48' />
                <div className='border-x-2 border-b-2 lg:border-0 px-2 lg:px-8 space-y-2 lg:space-y-3'>
                    <h2 className='text-2xl font-bold'>Nobero - Hyberabad</h2>
                    <p>First Floor, Sarath City Mall, Gachibowli - Miyapur Rd, Whitefields, HITEC City, Kondapur, Telangana 500084</p>
                    <p>Timings : 10 AM to 10 PM (Mon - Sun)</p>
                    <a href="https://www.google.com/maps/place/17%C2%B027'28.6%22N+78%C2%B021'50.3%22E" 
                    target='_blank'className='p-1' >
                        <div className='border-[1px] flex items-center justify-center p-2 lg:px-4 gap-2 text-blue-950 font-semibold'>
                            <MapPin className='w-4 h-4' />
                            <h4 className='text-sm'>Get Directions</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default StoresNearMe