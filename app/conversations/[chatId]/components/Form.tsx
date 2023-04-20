import { DocumentPlusIcon, MicrophoneIcon, PaperAirplaneIcon, PhotoIcon } from "@heroicons/react/24/solid";

import Input from "@/app/components/Input";

const Form = () => {
  return ( 
    <div className="py-4 px-4 bg-white border-t flex items-center gap-2 lg:gap-4">
      <PhotoIcon className="h-10 text-sky-500" />
      <Input placeholder="Write a message" />
      <div className="rounded-full p-2 bg-sky-500 cursor-pointer hover:bg-sky-600 transition">
        <PaperAirplaneIcon className="lg:h-5 h-4 text-white" />
      </div>
    </div>
  );
}
 
export default Form;