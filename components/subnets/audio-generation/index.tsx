"use client"
import { PlayArrow } from "@mui/icons-material";
import { UploadFile} from '@mui/icons-material';
import MusicPlayer from "@/components/MusicPlayer";

const Audio_generation = () => {
  return (
    <div className="mt-[90px]">
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-pink-800 drop-shadow-md dark:text-white hover:bg-gray-200 dark:hover:bg-pink-700" role="alert">
            <img src="assets/subnet16.png" className="rounded-full w-48"></img>
          </a>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Audio Generation by powered Comtensor</h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Enter prompt to generate your own audio.</p>
          <div className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48">
            <textarea name="" className="w-full rounded-md bg-transparent" cols={50} rows={10} placeholder="Enter your text and press generate button"></textarea>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-pink-800 dark:focus:ring-primary-900">
              <PlayArrow />
              Generate
            </a>
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-pink-800 dark:focus:ring-primary-900">
              <UploadFile />
              <label htmlFor="
              "></label>Upload
              <input type="file" className="hidden" />
            </a>
          </div>
        </div>
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <a href="#" className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-green-800 dark:text-white hover:bg-gray-200 dark:hover:bg-pink-700" role="alert">
            <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">Comtensor</span> <span className="text-sm font-medium">audio list</span>
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"><hr /></h1>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-pink-10 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-500 dark:focus:ring-pink-800">
              <MusicPlayer title_pro="The wind blowing from the calm seaside" duration={56} />
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-pink-10 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-500 dark:focus:ring-pink-800">
              <MusicPlayer title_pro="Exhilaration in a tropical forest" duration={23} />
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-pink-10 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-500 dark:focus:ring-pink-800">
              <MusicPlayer title_pro="The enchanting world of space" duration={32} />
            </div>
          </div>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <div className="inline-flex justify-center items-center py-3 px-5 text-xl font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-pink-10 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-500 dark:focus:ring-pink-800">
              <MusicPlayer title_pro="The sun rising from the sea" duration={85} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}


export default Audio_generation;