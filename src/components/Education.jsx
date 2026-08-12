const Education = () => {
  const educationData = [
    {
      institution: "Gamuda AI Academy",
      degree: "Full-Time AI Apprenticeship",
      period: "2024 – Present",
      description: "A full-time AI apprenticeship designed to develop AI full-stack engineers through hands-on projects, team-based learning, and real-world problem solving.",
      technicalFocus: [
        "Designing and developing end-to-end full-stack applications using React, FastAPI, Firebase and PostgreSQL",
        "Integrating AI capabilities into full-stack systems including Computer Vision, NLP and API-based AI services",
        "Building and consuming RESTful APIs",
        "Implementing backend business logic",
        "Applying best practices in system design, data handling and model integration"
      ],
      highlight: "Capstone Champion – Gamuda AI Academy Cohort 5",
      color: "from-purple-500 to-indigo-500",
      isFeatured: true
    },
    {
      institution: "Asia Pacific University of Technology & Innovation (APU)",
      degree: "Bachelor of Computer Science (Hons) in Artificial Intelligence",
      period: "2022 – 2026 (Completed: April 2026)",
      description: "",
      technicalFocus: [],
      highlight: null,
      color: "from-blue-500 to-cyan-500",
      isFeatured: false
    },
    {
      institution: "Universiti Teknologi Malaysia (UTM)",
      degree: "Foundation in Physical Science",
      period: "2022",
      description: "",
      technicalFocus: [],
      highlight: null,
      color: "from-emerald-500 to-teal-500",
      isFeatured: false
    }
  ]

  return (
    <section id="education" className="min-h-screen py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Education</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`bg-darker/50 backdrop-blur-sm rounded-2xl p-8 border hover:border-primary/30 transition-all duration-300 ${
                edu.isFeatured 
                  ? 'border-primary/30 shadow-2xl shadow-primary/10' 
                  : 'border-primary/10 hover:shadow-xl'
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className={`text-2xl font-bold bg-gradient-to-r ${edu.color} bg-clip-text text-transparent mb-2`}>
                    {edu.institution}
                  </h3>
                  <h4 className="text-xl text-white font-semibold mb-2">{edu.degree}</h4>
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </div>
                {edu.highlight && (
                  <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-full shadow-lg">
                      {edu.highlight}
                    </span>
                  </div>
                )}
              </div>
              
              {edu.technicalFocus.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-white font-semibold mb-3">Technical Focus:</h5>
                  <ul className="space-y-2">
                    {edu.technicalFocus.map((focus, focusIndex) => (
                      <li key={focusIndex} className="flex items-start gap-2 text-gray-300">
                        <span className="text-primary mt-1">▹</span>
                        <span className="leading-relaxed">{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
