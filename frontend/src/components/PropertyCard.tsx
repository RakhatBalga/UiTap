import type { Property } from '../types/property'

export const PropertyCard = ({ property }: { property: Property }) => {
    return (
        <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white">
            <div className="relative h-48 bg-gray-200">
                <img src="" alt="" />
                <div className="absolute top-2 left-2 bg-brand text-white text-xs px-2 py-1 rounded">
                    blabla
                </div>
            </div>
            <div className="p-4">
                <div className="text-xl font-bold text-gray-800 leading-tight">
                    {property.price.toLocaleString()} ₸ 

                </div>
                <div className="text-gray-700 font-medium mt-1">
                    {property.rooms} rooms, {property.area} м²
                </div>
                <div className="text-gray-500 text-sm mt-1">
                    {property.city}, {property.district}
                </div>
            </div>
        </div>
    )
}