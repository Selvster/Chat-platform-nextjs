import React from 'react';
import Image from 'next/image'; 
import CallToActionButtons from '@/components/landing/CallToActionsButtons';
import chatImage from '../../public/images/chat.png'; 

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white flex flex-col justify-center font-sans">
      <div className="container mx-auto p-4 sm:p-8 flex flex-col md:flex-row items-center justify-center gap-8"> {/* Added container and flex for columns */}
        <section className="text-center md:text-left py-8 md:py-16 px-4 md:w-1/2 flex flex-col items-center md:items-start">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 md:mb-6 drop-shadow-lg">
            Connect Instantly, Chat Freely.
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-6 md:mb-8 opacity-90">
            Your real-time chat application for seamless conversations and vibrant communities.
          </p>
          <CallToActionButtons />
        </section>

        <section className="py-8 md:py-16 px-4 md:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-md">
            <Image
              src={chatImage}
              alt="People chatting illustration"
              priority={true} 
              className='animate-float'
              objectFit='contain'
            />
          </div>
        </section>
      </div>
    </div>
  );
}