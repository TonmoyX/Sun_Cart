import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-6">
      <div className="text-center">

        {/* Big number */}
        <p className="text-[160px] font-black leading-none text-stone-200 select-none tracking-tighter">
          404
        </p>

        {/* Icon */}
        <div className="flex justify-center -mt-6 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-white border border-stone-200 shadow-sm flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-stone-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>

        {/* Text */}
        <h1 className="text-xl font-semibold text-stone-700 tracking-tight">
          Page not found
        </h1>
        <p className="mt-2 text-sm text-stone-400 max-w-xs mx-auto leading-relaxed">
          This page doesn&apos;t exist or was removed. Check the URL or go back home.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-white text-sm font-medium transition-colors"
          >
            Go home
          </Link>
          <Link
            href={'/'}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl border border-stone-200 bg-white hover:bg-stone-50 text-stone-600 text-sm font-medium transition-colors"
          >
            Go back
          </Link>
        </div>

      </div>
    </div>
  );
}