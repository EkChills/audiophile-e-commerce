import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Aos from "aos"
import OrangeButton from "./buttons/OrangeButton"
import HomeSubImages from "./homepage-components/HomeSubImages"
import FooterDesc from "./footer description/FooterDesc"

const HeadPhonesList = () => {
  const { headphones } = useSelector((store) => store.allProducts)

  useEffect(() => {
    Aos.init({ duration: 1000 })
  }, [])
  return (
    <>
      <div className="bg-pureWhite flex flex-col space-y-[7rem] px-[1.3rem] md:px-[2.3rem] py-[7rem] lg:px-[7.3rem] ">
        {
          headphones.map((headphone) => {
            const { image: { mobile, tablet, desktop }, id, name, description, slug } = headphone
            let splitName = name.split(' ')
            console.log(splitName);
            return (
              <div className="grid lg:grid-cols-2 space-y-[2rem] lg:gap-40" data-aos="fade-up">
                <div className="w-full">
                  <img src={mobile} className="w-full  md:hidden rounded-lg" alt={name} />
                  <img src={desktop} className="w-full max-h-[30rem] hidden  md:block md:object-cover lg:hidden rounded-lg" alt={name} />
                  <img src={desktop} className="w-full hidden max-w-[30rem] lg:block rounded-lg" alt={name} />
                </div>

                <div className="flex flex-col space-y-[2rem] items-center lg:items-start">
                  {headphone.new && <h5 className="uppercase tracking-[.4rem] text-orange text-[14px]">new product</h5>}
                  <h3 className="text-[28px] font-bold md:text-[40px] text-center lg:text-left">{name}</h3>
                  <p className="text-[15px] text-darkGray text-center lg:text-left">{description}</p>
                  <Link to={`/headphones/${slug}`}>
                    <OrangeButton text="see product" bgColor='orange' bgColorHover={'lightOrange'} />
                  </Link>
                </div>

              </div>
            )
          })
        }
      </div>
      <section data-aos="zoom-in" className=' px-[1.3rem] md:px-[2.3rem] py-[7rem] lg:px-[7.3rem]'>
        <HomeSubImages />
      </section>

      <section data-aos="fade-up" className=' px-[1.3rem] md:px-[2.3rem] py-[7rem] lg:px-[7.3rem]'>
        <FooterDesc />
      </section>
    </>
  )
}

export default HeadPhonesList