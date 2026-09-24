export default function Loading() {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-10 animate-pulse">
      {/* Hero Skeleton */}
      <div className="bg-[#12141a] border border-[#1e222b] rounded-3xl p-8 sm:p-12 mb-12 h-80 flex flex-col justify-center gap-4">
        <div className="w-32 h-4 bg-[#1e232d] rounded-full"></div>
        <div className="w-3/4 max-w-lg h-10 bg-[#1e232d] rounded-xl"></div>
        <div className="w-1/2 max-w-md h-4 bg-[#1e232d] rounded-full"></div>
        <div className="w-40 h-10 bg-[#1e232d] rounded-lg mt-2"></div>
      </div>

      {/* Section Header Skeleton */}
      <div className="flex flex-col gap-2 mb-8">
        <div className="w-48 h-8 bg-[#1e232d] rounded-lg"></div>
        <div className="w-72 h-4 bg-[#1e232d] rounded-full"></div>
      </div>

      {/* Cards Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="bg-[#12141a] border border-[#1e222b] rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="w-full h-48 bg-[#181d26]"></div>
            <div className="p-5 flex flex-col gap-3">
              <div className="flex gap-2">
                <div className="w-14 h-4 bg-[#1e232d] rounded-full"></div>
                <div className="w-14 h-4 bg-[#1e232d] rounded-full"></div>
              </div>
              <div className="w-3/4 h-6 bg-[#1e232d] rounded-lg"></div>
              <div className="w-1/2 h-3 bg-[#1e232d] rounded-full"></div>
              <div className="pt-3 border-t border-[#1c222c] flex justify-between">
                <div className="w-16 h-3 bg-[#1e232d] rounded-full"></div>
                <div className="w-16 h-3 bg-[#1e232d] rounded-full"></div>
                <div className="w-12 h-3 bg-[#1e232d] rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
