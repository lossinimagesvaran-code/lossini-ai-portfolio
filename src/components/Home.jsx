const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 bg-gradient-to-br from-darker via-dark to-darker relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-subtle-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-secondary/5 rounded-full blur-3xl animate-subtle-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8 animate-fade-in-up">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-subtle-pulse"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl group-hover:opacity-75 transition duration-500"></div>
              <img 
                src="/profile.jpg" 
                alt="Lossini Magesvaran" 
                className="relative w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-dark shadow-2xl group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
              <span className="text-gradient">Lossini Magesvaran</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              AI Engineer & Computer Science Graduate
            </h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Building intelligent systems that solve real-world problems
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base text-gray-400">
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">Artificial Intelligence</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">Machine Learning</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">Generative AI</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">Agentic AI</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">Computer Vision</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">NLP</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">RAG</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">AI Engineering</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">Full-Stack AI</span>
            <span className="px-4 py-2 bg-dark/50 rounded-full border border-primary/30 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">Robotics</span>
          </div>
          
          <div className="pt-8 flex justify-center">
            <button
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-primary hover:opacity-90 text-white rounded-full font-medium transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore My Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
