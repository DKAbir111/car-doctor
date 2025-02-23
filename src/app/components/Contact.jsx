import image1 from '@/assets/group/Group.png'
import image2 from '@/assets/group/Group1.png'
import image3 from '@/assets/group/Group2.png'
import Image from 'next/image'
export default function Contact() {
    return (
        <div className="container mx-auto bg-gray-900 py-16 px-10 flex justify-between mt-20 rounded-lg flex-wrap gap-7">
            <div className='flex items-center gap-3'>
                <Image src={image1} alt='Contact image 1' height={40} width={40} />
                <span>
                    <p className='text-white'>Have a question?</p>
                    <h3 className='text-xl font-bold text-white'>+2546 251 2658</h3>
                </span>
            </div>

            <div className='flex items-center gap-3'>
                <Image src={image2} alt='Contact image 1' height={40} width={40} />
                <span>
                    <p className='text-white'>We are open monday-friday</p>
                    <h3 className='text-xl font-bold text-white'>7:00 am - 9:00 pm</h3>
                </span>
            </div>

            <div className='flex items-center gap-3'>
                <Image src={image3} alt='Contact image 1' height={40} width={40} />
                <span>
                    <p className='text-white'>Need a repair? our address</p>
                    <h3 className='text-xl font-bold text-white'>Liza Street, New York</h3>
                </span>
            </div>
        </div>
    )
}
