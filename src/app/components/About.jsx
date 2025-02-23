
import aboutImage from '@/assets/images/about_us/person.jpg'
import partsImage from '@/assets/images/about_us/parts.jpg'
import Image from 'next/image'
export default function About() {
    return (
        <div className='container mx-auto grid grid-cols-1 lg:grid-cols-2 mt-20 gap-32 lg:gap-10'>
            <div className='relative'>
                <Image src={aboutImage} alt='About image' className='rounded-lg h-[473px] object-cover lg:w-[460px]' />
                <div className='flex absolute top-2/3 lg:top-1/2 lg:left-1/3 justify-center w-full lg:justify-start'>
                    <span className="rounded-lg p-3 bg-white lg:p-0">
                        <Image src={partsImage} alt='Parts Image' className='object-cover h-[250px] w-[250px] lg:h-[330px] lg:w-[330px]' />
                    </span>
                </div>
            </div>
            <div className='flex flex-col lg:gap-7'>
                <h3 className='text-lg font-semibold text-red-500 p-3 lg:p-0'>About Us</h3>
                <h2 className='text-5xl font-semibold lg:w-3/5 p-3 lg:p-0'>We are qualified & of experience in this field</h2>
                <p className='text-gray-500 p-3 lg:w-10/12 lg:p-0'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-gray-500 lg:w-10/12 p-3 lg:p-0'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <div className='p-3 lg:p-0'>
                    <button className='btn btn-error text-white'>Get More Info</button>
                </div>
            </div>
        </div>
    )
}
