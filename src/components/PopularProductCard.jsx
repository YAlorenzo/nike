import { star } from "../assets/icons"

const PopularProductCard = ({ imgURL, name, price, rating }) => {
    const starRating = (rating) => {
        const arr = [];
        for (let i = 0; i < rating; i++) {
            arr.push(i);
        }
        return arr;
    }
  return (
      <div className="flex flex-1 flex-col w-full max-sm:w-full cursor-pointer
       hover:scale-[1.05] rounded-[25px] transition-transform">
          <img src={imgURL} alt={name} className="w-full" />
          <div className="mt-8 flex justify-start gap-2.5">
               {starRating(rating).map((number) => (
                  <img src={star} alt="rating" width={24} height={24} key={number}/>
              ))}
              <p className="font-montserrat text-xl leading-normal text-slate-gray">({rating})</p>
          </div>
          <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin">
              {name}
          </h3>
          <p className="mt-2 font-semibold font-montserrat text-coral-red text-2lx leading-normal">
              {price}
          </p>
      </div>
  )
}

export default PopularProductCard