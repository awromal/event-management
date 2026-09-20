import React from 'react';

export default async function MockupPage({ searchParams }: { searchParams: Promise<{ url?: string }> }) {
  const { url } = await searchParams;
  const targetUrl = url || '/';

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-background">
      {/* Background Frame - Shows the template scaled up and slightly blurred to create the "theme" background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <iframe 
          src={targetUrl} 
          className="w-full h-full border-none pointer-events-none"
          style={{ transform: 'scale(1.2)', transformOrigin: 'center center', filter: 'blur(5px)' }}
        />
      </div>

      {/* Foreground Phone Mockup */}
      <div className="absolute inset-0 z-10 flex items-center justify-center p-8">
        <div className="relative w-[340px] h-[720px] bg-black rounded-[40px] shadow-2xl p-3 border-4 border-gray-800">
          
          {/* Top Notch / Dynamic Island */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-black rounded-b-3xl z-20"></div>
          
          {/* Side Buttons */}
          <div className="absolute top-[120px] -left-[6px] w-[3px] h-[30px] bg-gray-800 rounded-l-md"></div>
          <div className="absolute top-[170px] -left-[6px] w-[3px] h-[50px] bg-gray-800 rounded-l-md"></div>
          <div className="absolute top-[230px] -left-[6px] w-[3px] h-[50px] bg-gray-800 rounded-l-md"></div>
          <div className="absolute top-[180px] -right-[6px] w-[3px] h-[70px] bg-gray-800 rounded-r-md"></div>

          {/* Screen Content */}
          <div className="w-full h-full bg-white rounded-[32px] overflow-hidden relative">
            <iframe 
              src={targetUrl} 
              className="w-full h-full border-none"
            />
          </div>
          
        </div>
      </div>
    </main>
  );
}
