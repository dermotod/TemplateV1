import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-y-0 w-full h-[500px] bg-gradient-to-r from-purple-600 to-purple-800 transform -skew-y-3 origin-top-right -translate-y-36"></div>
          <div className="relative max-w-7xl mx-auto pt-20 pb-16 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
              <span className="block text-white mb-1">Starter Template</span>
              <span className="block text-purple-200">Build anything you imagine</span>
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-xl text-purple-100 sm:max-w-3xl">
              A modern application template powered by Next.js, Supabase, and AI technologies
            </p>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Everything you need to get started
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Choose from multiple pre-built application templates
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {/* AI Chat App */}
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-90"></div>
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                      <div>
                        <h3 className="text-xl font-bold">AI Chat App</h3>
                        <p className="mt-2 text-sm text-white/90">
                          An intelligent conversational app powered by AI models, featuring real-time responses
                          and seamless integration with Next.js.
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900">AI-Powered Chat</h3>
                    <p className="mt-1 text-sm text-gray-500">Integrate with OpenAI and Anthropic</p>
                  </div>
                </div>

                {/* AI Image Generation App */}
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-600 opacity-90"></div>
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                      <div>
                        <h3 className="text-xl font-bold">AI Image Generation</h3>
                        <p className="mt-2 text-sm text-white/90">
                          Create images from text prompts using AI, powered by the Replicate API and Next.js.
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900">Image Generation</h3>
                    <p className="mt-1 text-sm text-gray-500">Create images with Replicate API</p>
                  </div>
                </div>

                {/* Social Media App */}
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-teal-600 opacity-90"></div>
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                      <div>
                        <h3 className="text-xl font-bold">Social Media App</h3>
                        <p className="mt-2 text-sm text-white/90">
                          A feature-rich social platform with user profiles, posts, and interactions using
                          Supabase and Next.js.
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z"></path>
                          <path d="M12 15.5A3.5 3.5 0 1 0 8.5 12a3.5 3.5 0 0 0 3.5 3.5Z"></path>
                          <path d="M17.5 7.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900">Social Platform</h3>
                    <p className="mt-1 text-sm text-gray-500">Build with Supabase authentication and database</p>
                  </div>
                </div>

                {/* Voice Notes App */}
                <div className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-orange-600 opacity-90"></div>
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                      <div>
                        <h3 className="text-xl font-bold">Voice Notes App</h3>
                        <p className="mt-2 text-sm text-white/90">
                          A voice-based note-taking app with real-time transcription using Deepgram API, 
                          Supabase integration for storage, and a clean interface.
                        </p>
                      </div>
                      <div className="flex justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
                          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
                          <line x1="12" y1="19" x2="12" y2="22"></line>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-sm font-medium text-gray-900">Voice Transcription</h3>
                    <p className="mt-1 text-sm text-gray-500">Integrate with Deepgram for real-time audio processing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base font-semibold text-purple-600 tracking-wide uppercase">Tech Stack</h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Built with modern technologies
              </p>
            </div>
            <div className="mt-12">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
                <div className="col-span-1 flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-900">Next.js</p>
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7c-2 0-3 1-3 3z" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-900">Supabase</p>
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-900">AI Integration</p>
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-100 text-cyan-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-900">Tailwind CSS</p>
                  </div>
                </div>
                <div className="col-span-1 flex justify-center items-center">
                  <div className="flex flex-col items-center">
                    <div className="flex items-center justify-center h-16 w-16 rounded-full bg-purple-100 text-purple-600">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <p className="mt-3 text-sm font-medium text-gray-900">TypeScript</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-purple-700">
          <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Ready to get started?</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-purple-200">
              Choose a template and start building your next great project with modern tools and technologies.
            </p>
            <a
              href="#"
              className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50 sm:w-auto"
            >
              View Documentation
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div className="flex justify-center space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base text-gray-400">
                &copy; 2023 Starter Template. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}