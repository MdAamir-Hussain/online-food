
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";


export default function Home() {
  return (
    
    <>
      
      <Hero />
      <HomeMenu />
      <section className="text-center my-16">
        <SectionHeaders
          subHeader={'Out Story'}
          mainHeader={'About us'}
          />
          <div className="text-gray-500 max-w-md mx-auto  mt-8 flex flex-col gap-4">
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
           ullamco laboris nisi ut aliquip ex ea commodo consequat.

          </p>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmod tempor incididunt ut labore et dolore magna 
           aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
           ullamco laboris nisi ut aliquip ex ea commodo consequat.

          </p>
          </div>
      </section>
      <section className="text-center my-8">
        <SectionHeaders
          subHeader={'Don\'t hesitate'}
          mainHeader={'Contact us'}
          />
          <div className="mt-8">
          <a className="text-4xl" href="tel:+46738123123">
            +46 735 123 123
          </a>
          </div>
      </section>
      
    </>
  );
}
