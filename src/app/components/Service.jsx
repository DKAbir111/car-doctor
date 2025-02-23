import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default async function Service() {
    const data = await fetch('http://localhost:3000/services.json')
    const services = await data.json()
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-40 container mx-auto gap-10">
            <div className="col-span-3 flex flex-col items-center text-center lg:w-1/2 mx-auto gap-5">
                <h3 className="text-lg font-semibold text-red-500">Service</h3>
                <h2 className="text-4xl font-semibold">Our Service Area</h2>
                <p className="text-gray-500">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>


            {
                services.map(service => <div key={service._id} className="card bg-base-100 border">
                    <figure className="px-5 pt-5">
                        <Image
                            src={service.img}
                            alt={service.title}
                            width={314}
                            height={208}
                            className="rounded-xl h-[208px] w-full" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{service.title}</h2>
                        <span className="flex justify-between text-red-500">
                            <p className="text-lg font-semibold">Price: ${service.price}</p>
                            <div className="card-actions">
                                <button > <ArrowRight /> </button>
                            </div>
                        </span>
                    </div>
                </div>)
            }
        </div>
    )
}

// {
//     "_id": "635a0c0b64a6d231228942ae",
//     "service_id": "04",
//     "title": "Engine Oil Change",
//     "img": "https://i.ibb.co/T2cpBd5/888.jpg",
//     "price": "20.00",
//     "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius veniam nostrum dolores nemo quas. Minima ullam, veniam, nesciunt quae dolore animi blanditiis deserunt, ea esse dolorum ipsum quibusdam ipsa! Corrupti at, excepturi, fugiat aut nihil neque aliquid sapiente dignissimos provident, animi molestiae ipsum. Repudiandae ipsa id nihil reiciendis soluta eos ducimus pariatur, nam architecto tenetur quo quos commodi est libero repellendus vitae. Fuga numquam nulla nam, facere neque expedita voluptatibus pariatur necessitatibus vel, dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum. Aspernatur ex quibusdam at cum nulla!",
//     "facility": [
//         {
//             "name": "Instant Car Services",
//             "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//         },
//         {
//             "name": "24/7 Quality Service",
//             "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//         },
//         {
//             "name": "Easy Customer Service",
//             "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//         },
//         {
//             "name": "Quality Cost Service",
//             "details": "Fuga numquam nulla nam, facere neque dignissimos ab esse magni accusamus eveniet ad corrupti, architecto nostrum."
//         }
//     ]
// },