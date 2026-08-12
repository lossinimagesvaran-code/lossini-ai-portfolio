const About = () => {
  return (
    <section id="about" className="min-h-screen py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-darker/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-primary/10 shadow-xl">
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I enjoy experimenting with <span className="text-primary font-semibold">AI</span> and turning ideas into practical systems that can make people's lives easier. 
                I'm naturally curious and enjoy exploring new technologies, building projects, and learning through hands-on experience.
              </p>
              
              <p>
                I believe learning is a never-ending process, and every project is an opportunity to discover something new. 
                My focus spans across <span className="text-secondary font-semibold">Artificial Intelligence, Machine Learning, Generative AI, and Agentic AI</span>, 
                with hands-on experience in building intelligent systems that solve real-world problems.
              </p>
              
              <p>
                Based in <span className="text-white font-semibold">Selangor, Malaysia</span>, I'm passionate about pushing the boundaries of what's possible with AI — 
                from <span className="text-primary font-semibold">Computer Vision and NLP to RAG systems and Full-Stack AI development</span>. 
                I love the challenge of turning complex concepts into working solutions.
              </p>
            </div>
            
            <div className="mt-10 pt-8 border-t border-primary/20">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-dark/30 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">Selangor</div>
                  <div className="text-gray-400">Location</div>
                </div>
                <div className="p-4 bg-dark/30 rounded-xl">
                  <div className="text-3xl font-bold text-secondary mb-2">AI Engineer</div>
                  <div className="text-gray-400">Role</div>
                </div>
                <div className="p-4 bg-dark/30 rounded-xl">
                  <div className="text-3xl font-bold text-primary mb-2">CS Graduate</div>
                  <div className="text-gray-400">Education</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
