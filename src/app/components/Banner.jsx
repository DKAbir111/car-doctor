import { Carousel } from "flowbite-react";
import Image from "next/image";
import banner1 from "@/assets/images/banner/1.jpg";
import banner2 from "@/assets/images/banner/2.jpg";
import banner3 from "@/assets/images/banner/3.jpg";
import banner4 from "@/assets/images/banner/4.jpg";
import banner5 from "@/assets/images/banner/5.jpg";
import banner6 from "@/assets/images/banner/6.jpg";

export default function Banner() {
    return (
        <div className="container mx-auto relative rounded-lg overflow-hidden">
            <Carousel className="w-full h-[600px] relative">
                {[banner1, banner2, banner3, banner4, banner5, banner6].map((banner, index) => (
                    <div key={index} className="relative h-full">
                        {/* Black Shadow Overlay inside each slide */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent  z-10"></div>
                        <Image src={banner} alt={`Banner ${index + 1}`} className="object-cover h-full w-full" />
                    </div>
                ))}
            </Carousel>

            <div className="absolute w-full md:w-2/3 lg:w-1/2 flex flex-col top-0 justify-center items-center md:items-start h-full gap-5 md:left-20 text-center md:text-start">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white md:w-10/12">Affordable Price For Car Servicing</h2>
                <p className="text-gray-300 w-9/12 md:w-10/12">There are many variations of passages of  available, But the majority have suffered alteration in some form</p>
                <div className="flex gap-5">
                    <button className="btn btn-error rounded-sm text-white">Discover More</button>
                    <button className="btn btn-outline text-white rounded-sm hover:bg-white hover:text-black">Latest Project</button>
                </div>
            </div>
        </div>
    );
}
