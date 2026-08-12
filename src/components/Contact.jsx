const Contact = () => {
  return (
    <section id="contact" className="min-h-screen py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Open to professional opportunities, collaboration, and connections in AI and technology.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-6 bg-dark/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
              <div className="text-3xl">📧</div>
              <div className="flex-1">
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <a href="mailto:lossiniimagesvaran@gmail.com" className="text-primary hover:text-secondary transition-colors text-lg">
                  lossiniimagesvaran@gmail.com
                </a>
              </div>
              <a
                href="mailto:lossiniimagesvaran@gmail.com"
                className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all font-medium"
              >
                Email Me
              </a>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-dark/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
              <div className="text-3xl">💼</div>
              <div className="flex-1">
                <div className="text-sm text-gray-400 mb-1">LinkedIn</div>
                <a 
                  href="https://www.linkedin.com/in/lossini-magesvaran" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors text-lg"
                >
                  linkedin.com/in/lossini-magesvaran
                </a>
              </div>
              <a
                href="https://www.linkedin.com/in/lossini-magesvaran"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all font-medium"
              >
                Connect
              </a>
            </div>
            
            <div className="flex items-center gap-4 p-6 bg-dark/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-all">
              <div className="text-3xl">🔗</div>
              <div className="flex-1">
                <div className="text-sm text-gray-400 mb-1">GitHub</div>
                <a 
                  href="https://github.com/lossinimagesvaran-code" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary transition-colors text-lg"
                >
                  github.com/lossinimagesvaran-code
                </a>
              </div>
              <a
                href="https://github.com/lossinimagesvaran-code"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all font-medium"
              >
                View Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
