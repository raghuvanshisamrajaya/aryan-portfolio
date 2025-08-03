export default function Custom404() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold gradient-text mb-4">404</h1>
        <p className="text-xl text-gray-400 mb-8">Page Not Found</p>
        <a 
          href="/aryan-portfolio"
          className="btn-primary inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  )
}
