import { ArrowRight, Sparkles } from 'lucide-react'

export const Hero = () => {
  return (
    <section className="px-4 pb-20 pt-32 sm:px-6">
      <div className="mx-auto flex max-w-[720px] flex-col items-center text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1 text-sm font-medium text-[#E91E63]">
          <Sparkles className="size-4 shrink-0" aria-hidden />
          <span>AI-Powered Real Estate Assistant</span>
        </div>

        <h1 className="!mt-0 !mb-5 text-balance text-4xl font-bold leading-[1.15] tracking-tight text-gray-900 sm:text-5xl md:!mb-6 md:text-6xl md:leading-[1.12]">
          Find and verify
          <br />
          <span className="text-[#E91E63]">The perfect home</span>{' '}
          <span className="text-gray-900">with AI</span>
        </h1>

        <div className="flex w-full flex-col items-center gap-10 sm:gap-12 md:gap-14">
          <p className="max-w-[34rem] text-pretty text-lg leading-[1.55] text-gray-600 text-balance md:text-xl md:leading-relaxed">
            A safer path to buying and renting.
          </p>

          <div className="relative w-full max-w-2xl">
            <input
              type="search"
              name="hero-search"
              autoComplete="off"
              placeholder="Paste a listing URL or describe what you're looking for…"
              className="w-full rounded-3xl border-2 border-gray-100 bg-white py-4 pl-5 pr-[4.25rem] text-left text-base text-gray-900 shadow-xl placeholder:text-gray-400 focus:border-[#E91E63] focus:outline-none md:py-5 md:pl-6 md:pr-[4.75rem] md:text-lg"
            />
            <button
              type="button"
              className="absolute right-2.5 top-1/2 flex size-11 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#E91E63] text-white transition-colors hover:bg-[#d01a57] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E91E63] md:right-3 md:size-12"
              aria-label="Search"
            >
              <ArrowRight className="size-5 md:size-6" aria-hidden />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}