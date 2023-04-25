'use client';

import Avatar from "@/app/components/Avatar";
import { classNames } from "@/app/helpers";
import { useState } from "react";
import ImageModal from "./ImageModal";
import { useSession } from "next-auth/react";
import { Message, User } from "@prisma/client";

interface MessageBoxProps {
  data: Message & {
    sender: User
  };
}

const MessageBox: React.FC<MessageBoxProps> = ({ data }) => {
  const session = useSession();
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session.data?.user?.email === data?.sender?.email

  const container = classNames('flex gap-3 p-4', isOwn ? 'justify-end' : '');
  const avatar = classNames(isOwn ? 'order-2' : '');
  const body = classNames('flex flex-col gap-2', isOwn ? 'items-end' : '');
  const message = classNames('text-sm w-fit overflow-hidden', isOwn ? 'bg-sky-500 text-white' : 'bg-gray-100', data.imageUrl ? 'rounded-md p-0' : 'rounded-full py-2 px-3');

  return ( 
    <div className={container}>
      <div className={avatar}>
        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
      </div>
      <div className={body}>
        <div className="flex items-center gap-1">
          <div className="text-sm text-gray-500">
            {data.sender.name}
          </div>
          <div className="text-xs text-gray-400">
            11:00 AM
          </div>
        </div>
        <div className={message}>
          <ImageModal src={data.imageUrl} isOpen={imageModalOpen} onClose={() => setImageModalOpen(false)} />
          {data.imageUrl ? <img onClick={() => setImageModalOpen(true)} src={data.imageUrl} className="h-72 cursor-pointer hover:scale-110 transition translate" /> : <div>{data.body}</div>}
        </div>
      </div>
    </div>
   );
}
 
export default MessageBox;
