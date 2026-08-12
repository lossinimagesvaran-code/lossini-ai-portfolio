const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: "💻",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Java",
        "C++"
      ]
    },
    {
      title: "AI / Machine Learning",
      icon: "🤖",
      skills: [
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "Hugging Face",
        "NumPy",
        "Pandas",
        "OpenCV",
        "YOLOv8",
        "RF-DETR"
      ]
    },
    {
      title: "Generative AI / LLM",
      icon: "✨",
      skills: [
        "Google Gemini API",
        "OpenAI APIs",
        "LangChain",
        "LangGraph",
        "RAG",
        "ChromaDB",
        "Sentence-BERT",
        "BM25",
        "Multi-Agent Systems"
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        "FastAPI",
        "Django",
        "Flask"
      ]
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        "React",
        "ReactJS",
        "Streamlit",
        "Bootstrap"
      ]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: [
        "PostgreSQL",
        "MongoDB",
        "SQLite",
        "Firebase",
        "Firestore",
        "ChromaDB"
      ]
    },
    {
      title: "Cloud / Development",
      icon: "☁️",
      skills: [
        "Google Cloud Platform",
        "Firebase",
        "Git",
        "GitHub",
        "AWS QuickSight",
        "AWS Lambda",
        "Amazon S3"
      ]
    },
    {
      title: "AI / Multimedia",
      icon: "🎬",
      skills: [
        "Whisper",
        "Vosk",
        "librosa",
        "FFmpeg",
        "ElevenLabs",
        "DeepFace"
      ]
    }
  ]

  return (
    <section id="skills" className="min-h-screen py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-bold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-primary/10 border border-primary/20 rounded-full hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechnicalSkills