import TextTyper from './components/switchingtext/page';
import Year from './components/year/page';
import ExternalLink from './components/externalLinks/EksternalLinks';
import Image from 'next/image'
import Link from "next/link";
import MusicPlayer from './components/music/page';


export default function Home() {
  return (
  <main className="sm:m-0">
      {/* Navbar */}
      <nav className="bg-opacity-30 sticky bg-[#ffffff] backdrop-blur-lg rounded-3xl shadow-inner py-3 flex justify-between items-center lg:w-[500px] sm:w-12 px-8 lg:max-w-[700px] sm:max-w-[50px] mx-auto top-8">
        {/* Logo */}
        <a className="font-bold text-xl" href="#00">
          /
        </a>

        {/* Menu */}
        <ul 
        className="
        flex 
        lg:space-x-10 
        sm:px-10
        ">
          <li>
            <a href="#01" className="hover:text-[#186F3B]">Skills</a>            
          </li>
          <li>
            <a href="#02" className="hover:text-[#186F3B]">Projects</a>
          </li>
          <li>
            <a href="#03" className="hover:text-[#186F3B]">Fun</a>
          </li>
        </ul>
      </nav>


      {/* Konten Halaman */}
        {/* About Me */}
        <div className="mt-0 mb-[10rem]">
          <div id='00'className='h-[550px] mt-[18%] sm:mt-[20%]'>
            <div className=" flex flex-col ">
              <p className="font-medium opacity-[40%]">
              00. <span className='text-[#186F3B]'>About Me</span></p>
            </div>
            
            <div>
              <p 
                className='font-bold lg:text-5xl sm:text-base -mb-[33%] lg:-mt-10 sm:mt-0'>Hello
                <span className='text-[#186F3B] lg:text-9xl sm:text-5xl ml-2'>I&apos;m Willy
                </span>
              </p>
              <div className="text-black font-bold lg:text-7xl flex justify-start mt-[35%] sm:text-sm">
              <TextTyper />
              </div>
            </div>
            
            <div className="font-normal text-xl mt-16 text-balance ">
              <p className='caret-[#186F3B]'>
                A Junior Website Developer and UI Designer who is passionate about creating responsive and visually appealing websites.
              </p>
            </div>

            {/* Social Media */}
              <div className='relative -mt-[20rem]'>
                <div className='absolute right-0 mt-3 cursor-pointer'>
                  <a href="https://www.instagram.com/willyythegreat/" target='_blank'>
                    <svg className='w-5 hover:fill-[#186F3B]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                  </a>
                  <svg className='w-5 mt-5 hover:fill-[#186F3B]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                    <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                  </svg>
                  <svg className='w-5 mt-5 hover:fill-[#186F3B]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                  </svg>
                </div>
              </div>
          </div>
        </div>
        
        <div 
        id='01'
        className='flex justify-center mt-20 p-10 pb-0'>

        </div>
          
        <div id="01" className="mb-96">
          <div className="h-[550px] flex items-start ml-10">
            <p className="font-medium opacity-[50%]">01. <span className='text-[#186F3B]'>Skills</span></p>
            <div className="h-px mt-3 bg-gray-400 ml-4 w-[85%]"></div>
          </div>

          <MusicPlayer />

        </div>

        {/* Projects */}
        <div id="02" className='mb-96'>
          <div className="h-[550px] flex items-start ml-10">
            <p className="font-medium opacity-[50%]">02. <span className='text-[#186F3B]'>Projects</span></p>
            <div className="h-px mt-3 bg-gray-400 ml-4 w-[85%]"></div>
          </div>

          <div className='-mt-[30rem] ml-10 font-light'>
            Here are some projects I have done
          </div>
        
          {/* <div className='flex flex-col gap-36'>
            <div>
              <ExternalLink href="https://www.reduktordev.org/">
              <div className=' flex justify-center mx-10 mt-16 pb-0' title='Spam W in the Chat!'>
                <Image 
                  src="/src/img/reduk.png" 
                  alt="Reduktor" 
                  width={1000} 
                  height={300}
                  priority  
                />
              </div>
                <span className='font-light text-xl ml-10 hover:text-[#186F3B]' title='Spam W in the Chat!'>Reduktor Team</span>
              </ExternalLink>
            </div>

            <a href="/Projek Akhir" className="external-link" rel="noopener noreferrer">
              <div className="flex justify-center mt-20 p-10 pb-0">
                <Image 
                  src="/src/img/project-1.png" 
                  alt="School Website Project" 
                  width={1000} 
                  height={300} 
                />
              </div>
              <span className='font-light text-xl ml-10 hover:text-[#186F3B] sm:text-sm'>
                My Vocational Schools Website (Unfinished)
              </span>
            </a>
          </div> */}

          <div>
            <p className='font-normal text-xl flex justify-center align-middle mt-[300px]'><span className='text-[#186F3B]'>Stay tuned</span>, other projects coming soon!</p>
          </div>
        </div>

        <div id="03" className="mb-96">
          <div className="h-[550px] flex items-start ml-10">
            <p className="font-medium opacity-[50%]">02. <span className='text-[#186F3B]'>Fun</span></p>
            <div className="h-px mt-3 bg-gray-400 ml-4 w-[85%]"></div>
          </div>

          <div className='-mt-[30rem]'>
              <p className='ml-10 font-light'>
                Get to know me better!
              </p>
              <div className=' ml-10 font-light'>
                Here, I like to share a short list of some of my favorite songs that I&apos;ve been listening to lately.
              </div>

              <div className='ml-10'>
                <ul className='font-light ml-10 mt-10 list-square'>
                  <li><a href="https://open.spotify.com/track/7b2zwT2Wf0bwVIpJTiNyt4?si=a3740f7b18ed4470" target="_blank" className='underline underline-offset-[6px] hover:decoration-dashed'>Any Other Way - Particle House</a></li>
                  <li><a href="https://open.spotify.com/track/73CKjW3vsUXRpy3NnX4H7F?si=f63c279198d649db" target="_blank" className='underline underline-offset-[6px] hover:decoration-dashed'>Fake Plastic Trees - Radiohead</a></li>
                  <li><a href="https://open.spotify.com/track/40l4DYTW2jfArPOL63YogV?si=7336cc8855794c6b" target="_blank" className='underline underline-offset-[6px] hover:decoration-dashed'>Driftwood - Travis</a></li>
                  <li><a href="https://open.spotify.com/track/6K4t31amVTZDgR3sKmwUJJ?si=30574c07aa684616" target="_blank" className='underline underline-offset-[6px] hover:decoration-dashed'>The Less I Know The Better - Tame Impala</a></li>
                  <li><a href="https://open.spotify.com/track/1XpLT8r6TSEGxonhzAZbfT?si=6fcc183f04bc400c" target="_blank" className='underline underline-offset-[6px] hover:decoration-dashed'>Pemain Lama - Wijaya 80</a></li>
                  <li><a href="https://open.spotify.com/track/5SuOikwiRyPMVoIQDJUgSV?si=ff719b3504294c3f" target="_blank" className='underline underline-offset-[6px] hover:decoration-dashed'>comedy - Gen hoshino</a></li>
                  <li><a href="https://open.spotify.com/track/0cXm3QqepHVzXKdm73sqkl?si=069e82409a0b4d15" target="_blank" className='underline underline-offset-[6px] hover:decoration-dashed'>Beetlebum - Blur</a></li>
                  <li><a href="https://open.spotify.com/track/0GgN4MhR5GKn5IcKN0e0rG?si=abb6500684f24f8c" target="_blank" className='underline underline-offset-[6px] hover:decoration-dashed'>Cancer - My Chemical Romance</a></li>
                  <li><a href="https://open.spotify.com/track/4WiiRw2PHMNQE0ad6y6GdD?si=888f4ad46fce4296" target="_blank" className='underline underline-offset-[6px] hover:decoration-dashed'>Chocolate - The 1975</a></li>
                </ul>
              </div>
            </div>
        </div>

        <footer>
          <div className='relative p-5 mb-10'>
            <div className='flex justify-left'>&copy; &nbsp; <Year></Year></div>
            <div className='flex justify-end -mt-7'>
              <a className='relative hover:text-[#186F3B] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#186F3B] after:transition-all after:duration-300 hover:after:w-full' href="/sillycat/me.html">Spirit Animal</a>
            </div>
          </div>
        </footer>
    
  </main>
  
  );
}
