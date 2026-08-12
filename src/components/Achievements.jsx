const Achievements = () => {
  const achievements = [
    {
      title: "MD APICTA 2025",
      award: "2nd Merit Award",
      category: "Student – Tertiary Category",
      project: "Resume AI Optimizer",
      description: "Represented Malaysia in Taiwan",
      color: "from-purple-500 to-indigo-500",
    },
    {
      title: "Gamuda AI Academy",
      award: "Capstone Champion – Cohort 5",
      category: "",
      project: "CASE.AI – Evidence Management System",
      description: "",
      color: "from-blue-500 to-cyan-500",
    }
  ]

  return (
    <section id="achievements" className="min-h-screen py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Achievements</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Recognition and awards for innovative AI projects and technical excellence.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="text-5xl flex-shrink-0">{achievement.icon}</div>
                <div className="flex-1">
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
                    {achievement.title}
                  </h3>
                  <div className="mb-4">
                    <span className="inline-block px-4 py-2 bg-gradient-primary text-white font-semibold rounded-full shadow-lg">
                      {achievement.award}
                    </span>
                  </div>
                  
                  {achievement.category && (
                    <p className="text-gray-400 mb-3">{achievement.category}</p>
                  )}
                  
                  <div className="space-y-2">
                    <p className="text-white font-semibold">
                      Project: <span className="text-primary">{achievement.project}</span>
                    </p>
                    {achievement.description && (
                      <p className="text-gray-300">{achievement.description}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
