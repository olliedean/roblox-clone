import Image from 'next/image';

export default function Custom404() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="bg-white bg-opacity-10 mt-20 flex p-6">
        <div className="flex-1">
          <div className="w-[55%] flex flex-col h-full">
            <div className="text-4xl w-full">
              Page cannot be found or no longer exists
            </div>
            <div className="mt-6 text-lg">
              404 | Page not found
            </div>
            <div className="flex-1 flex items-end">
              <div>
                <button
                  className="bg-white text-gray-700 p-1
                                    font-medium px-6 rounded-lg text-lg"
                  type="button"
                >
                  Back
                </button>
                <button
                  className="bg-opacity-0 text-slate-300 p-1
                                    font-medium px-6 rounded-lg text-lg
                                    border-[1px] border-slate-300 ml-3"
                  type="button"
                >
                  Home
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="https://images.rbxcdn.com/9281912c23312bc0d08ab750afa588cc.png"
            height={300}
            width={300}
          />
        </div>
      </div>
    </div>
  );
}
