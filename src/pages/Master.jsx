import TypeIt from "typeit-react";
import hero from "../assets/profile/profile.png";
import { IconBrandFacebook, IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';
import academy from '../assets/portfolio/academy.png'
import home from '../assets/portfolio/home.png'
import kereta from '../assets/portfolio/kereta.png'
import tokoonline from '../assets/portfolio/tokoonline.png'
import tour from '../assets/portfolio/tour.png'


export default function Master() {

    window.onscroll =function () {
      const header = document.querySelector('#header')
      const fixedNav = header.offsetTop;

      if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed')
      }else{
        header.classList.remove('navbar-fixed')
      }
      
    }

  

  const showMenu =()=>{
    document.querySelector('#hamburger').classList.toggle('hamburger-active');
    document.querySelector('#nav-menu').classList.toggle('hidden')

  }



  return (
<>
{/* Navbar */}
<div id="header" className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center relative lg:justify-between">
          <div className="px-4">
            <a href="" className="text-lg font-bold text-primary py-6 block">Parkah Nurhidayat</a>
          </div>
          <div className="flex items-center px-4">
            <button onClick={showMenu} id="hamburger" name="hamburger" className="block absolute right-4 lg:hidden">
              <span className="hamburger-line transition duration-300 ease-in-out origin-top-left"></span>
              <span className="hamburger-line transition duration-300 ease-in-out"></span>
              <span className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"></span>
            </button>
            <nav id="nav-menu" className="hidden absolute py-5 px-4 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none">
              <ul className="block lg:flex lg:gap-x-4   ">
                <li className="group">
                  <a href="/" className="text-base text-dark py-2 mx- flex group-hover:text-primary">Beranda</a>
                </li>
                <li className="group">
                  <a href="#portfolio" className="text-base text-dark py-2 mx- flex group-hover:text-primary">Portfolio</a>
                </li>
                <li className="group">
                  <a href="#contact" className="text-base text-dark py-2 mx- flex group-hover:text-primary">Contact</a>
                </li>
              </ul>
            </nav>

          </div>

        </div>
      </div>
    </div>

{/* Hero */}
 <div id="hero">
      <section className="pt-28 pb-32">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:w-1/2 ">
              <h1 className="text-base font-semibold text-primary md:text-xl">
              hello everyone👋, me
                <span className="block text-dark font-bold text-4xl mt-3">
                  Parkah Nurhidayat
                </span>
              </h1>
              <TypeIt 
                className="font-medium text-2xl text-slate-600 mb-5 "
                getBeforeInit={(instance) => {
                  instance
                    .type("Hi, I'm Student")
                    .pause(750)
                    .delete(7)
                    .pause(500)
                    .type("Frontend Developer");

                  // Remember to return it!
                  return instance;
                }}
              />

              <p className="font-medium text-slate-500 leading-relaxed mb-10 mt-4">
                I am an enthusiastic and talented Fresh Graduate with a passion
                for Frontend development
              </p>

              <a
                href="#"
                className="font-medium text-white bg-primary px-7 py-3 rounded-full hover:bg-cyan-600 transition duration-300 ease-in-out"
              >
                Contact Me
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10 relative lg:mt-9 lg:right-0" data-aos="zoom-in">
                <img
                  width={280}
                  src={hero}
                  alt="profil parkah"
                  className="max-w-full mx-auto"
                />
                <span className="absolute bottom-0 -z-10 left-1/2 -translate-x-1/2">
                  <svg
                    width={350}
                    height={300}
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#06B6D4"
                      d="M38.2,-37.8C48.2,-28.3,53.9,-14.1,54.8,0.9C55.7,16,51.8,31.9,41.9,47.5C31.9,63,16,78.1,-1.4,79.4C-18.7,80.8,-37.4,68.4,-51.7,52.9C-66.1,37.4,-76.1,18.7,-76.6,-0.5C-77.2,-19.8,-68.2,-39.5,-53.9,-49C-39.5,-58.5,-19.8,-57.7,-2.8,-54.9C14.1,-52.1,28.3,-47.2,38.2,-37.8Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/* About */}
    <div id='about'>
        <div >
        <div className="container">
            <div className="flex flex-wrap ">
                <div className="w-full self-center mb-12 lg:w-1/2 lg:px-8" data-aos="zoom-in-right">
                    <h1 className="font-semibold text-primary text-lg lg:text-xl">Tentang Saya</h1>
                    <h2 className="font-bold text-black text-2xl pt-4 lg:text-3xl">Mari Belajar Frontend Developer</h2>
                    <p className="text-slate-400 pt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa rem optio veritatis consectetur, itaque accusamus temporibus perferendis odit, quaerat repellendus vel assumenda ducimus nobis explicabo recusandae animi obcaecati fugit quo minima delectus architecto laudantium aspernatur.</p>
                </div>
                <div className="w-full self-center lg:w-1/2 lg:px-8 " data-aos="zoom-in-left">
                    <h1 className='text-black font-medium text-xl lg:text-2xl py-4'>Mari Berteman</h1>
                    <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tempore similique maiores autem excepturi explicabo ullam voluptates voluptate eius, saepe fuga doloremque et aspernatur iure.</p>

                    <div className="flex gap-x-4 pt-4 stroke-1">
                        <a href=""><IconBrandGithub size={30} className='hover:text-primary rounded-full flex justify-start items-center border border-slate-300'/> </a>
                        <a href=""><IconBrandLinkedin size={30} className='hover:text-primary rounded-full flex justify-start items-center border border-slate-300 '/></a>
                        <a href=""><IconBrandInstagram size={30} className='hover:text-primary rounded-full flex justify-start items-center border border-slate-300'/></a>
                        <a href=""><IconBrandFacebook size={30} className='hover:text-primary rounded-full flex justify-start items-center border border-slate-300'/></a>

                    </div>

                </div>
            </div>

        </div>
        </div>
    </div>

    {/* Fortfolio */}
    <div id="portfolio" className="mt-12 pt-36 pb-16 bg-slate-100">
        <div className="container">
          <div className="w-full px-4">
            <div className="max-w-xl mx-auto text-center mb-16">
              <h4 className="font-semibold text-primary text-lg">Portfolio</h4>
              <h2 className="font-bold text-dark text-3xl mb-4">Project Terbaru</h2>
              <p className="font-medium text-md text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, doloremque corporis? Ad inventore pariatur quos rerum. Rem soluta distinctio corporis?</p>

            </div>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">

            <div  data-aos="zoom-in-up" className="mb-12 p-4 md:w-1/2" >
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={academy} alt="" width={'w-full'}/>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Academy Web</h3>
              <p className='font-medium text-base text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae provident tenetur consectetur magni quod excepturi autem inventore placeat dolor.</p>

            </div>

            <div  data-aos="zoom-in-up"  className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={home} alt="" width={'w-full'}/>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Tour Service</h3>
              <p className='font-medium text-base text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae provident tenetur consectetur magni quod excepturi autem inventore placeat dolor.</p>

            </div>

            <div  data-aos="zoom-in-up" className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={kereta} alt="" width={'w-full'}/>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Station Web</h3>
              <p className='font-medium text-base text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae provident tenetur consectetur magni quod excepturi autem inventore placeat dolor.</p>

            </div>

            <div  data-aos="zoom-in-up" className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={tokoonline} alt="" width={'w-full'}/>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Ecommerce Web</h3>
              <p className='font-medium text-base text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae provident tenetur consectetur magni quod excepturi autem inventore placeat dolor.</p>

            </div>

            <div  data-aos="zoom-in-up" className="mb-12 p-4 md:w-1/2">
              <div className="rounded-md shadow-md overflow-hidden">
                <img src={tour} alt="" width={'w-full'}/>
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Travel Web </h3>
              <p className='font-medium text-base text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate molestiae provident tenetur consectetur magni quod excepturi autem inventore placeat dolor.</p>

            </div>


          </div>
        </div>
    </div>

    {/* Footer */}
    <section className="mt-44">
        <div data-aos="fade-up" className="container">
          <div className="w-full px-10 pb-4">
            <div className="text-center mx-auto max-w-xl">
              <h1 className="text-3xl font-bold text-primary">Massage</h1>
              <p className="text-slate-500 mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                at excepturi odit quam quidem laboriosam possimus animi non,
                quaerat voluptatem?
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-4 w-full" id="contact">
            <form>
              <label htmlFor="name" className="w-full text-lg text-slate-600">
                Name
              </label>
              <input
                type="text"
                className="border w-[300px] md:w-[800px] border-slate-400 focus:outline focus:outline-primary focus:border-none  rounded-lg block mb-4 mt-1 "
              />
              <label htmlFor="massage" className="w-full">
                Massage
              </label>
              <textarea
                name="massage"
                id=""
                cols="30"
                rows="10"
                className="block border border-slate-400 rounded-xl w-full mt-2 focus:outline focus:outline-primary focus:border-none"
              ></textarea>
            </form>
          </div>
        </div>
        <footer className=" bg-primary mt-24 text-center text-white py-4">
          <span className="text-sm">Created By</span>
          <p className="text-lg font-bold hover:text-black ">
            Parkah Nurhidayat👨‍💻
            </p> 
        </footer>
      </section>
</>
  );
}
