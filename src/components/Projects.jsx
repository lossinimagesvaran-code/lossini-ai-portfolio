import { useState } from 'react'

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className={`bg-darker/50 backdrop-blur-sm rounded-xl border hover:border-primary/30 transition-all duration-300 group ${
      project.achievement ? 'border-primary/30 shadow-xl shadow-primary/10' : 'border-primary/10 hover:shadow-lg'
    }`}>
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{project.title}</h3>
          {project.achievement && (
            <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full whitespace-nowrap ml-2 shadow-lg">
              {project.achievement}
            </span>
          )}
        </div>
        
        <p className="text-gray-300 mb-4 leading-relaxed text-sm">{project.summary}</p>
        
        <div className="mb-4">
          <h4 className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 6).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 6 && (
              <span className="px-2 py-1 bg-primary/5 text-gray-400 text-xs rounded-full border border-primary/10">
                +{project.techStack.length - 6} more
              </span>
            )}
          </div>
        </div>

        {project.technicalHighlights && project.technicalHighlights.length > 0 && (
          <div className="mb-4">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-xs text-secondary hover:text-white transition-colors flex items-center gap-1"
            >
              {isExpanded ? '▼' : '▶'} Technical Highlights
            </button>
            {isExpanded && (
              <ul className="mt-2 space-y-1 text-xs text-gray-400">
                {project.technicalHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-200 text-sm font-medium w-full justify-center"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          View on GitHub
        </a>
      </div>
    </div>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "Resume AI Optimizer",
      summary: "Built a career platform to help job seekers with resume analysis, tailoring, video interview coaching, clothing recommendations, and career recommendations.",
      techStack: ["Python", "Django", "Bootstrap", "Gemini AI", "PyMuPDF", "Vosk", "librosa", "DeepFace", "Sentence-BERT", "OpenCV", "FFmpeg"],
      technicalHighlights: [
        "Resume Analyzer comparing resumes against job descriptions",
        "Resume tailoring based on job descriptions",
        "Video Interview Coach for interview practice",
        "Clothing Recommender based on skin tone",
        "Career Recommendation system"
      ],
      achievement: "2nd Merit Award – MD APICTA 2025",
      github: "https://github.com/lossinimagesvaran-code/resume-ai-optimizer"
    },
    {
      title: "CASE.AI – Evidence Management System",
      summary: "Developed a multimodal AI platform designed to help police officers analyze and manage evidence such as images, videos, audio recordings and documents.",
      techStack: ["React", "TypeScript", "Python", "FastAPI", "YOLOv8", "RF-DETR", "Whisper", "Firebase"],
      technicalHighlights: [
        "Multimodal AI analysis pipeline achieving 87% detection accuracy using fine-tuned YOLOv8 models",
        "Real-time video analysis processing 30+ frames per second",
        "Automated incident reconstruction module achieving 92% accuracy",
        "Speech-to-text analysis achieving 89% transcription accuracy for Malay and English"
      ],
      achievement: "Capstone Champion",
      github: "#GITHUB_PLACEHOLDER"
    },
    {
      title: "Research Paper RAG System with Citation Support",
      summary: "Built a Retrieval-Augmented Generation system that enables intelligent Q&A over research papers with page-level citations.",
      techStack: ["Python", "LangChain", "ChromaDB", "BM25", "Sentence Transformers", "FastAPI"],
      technicalHighlights: [
        "Hybrid retrieval combining semantic embeddings and keyword search",
        "PDF dataset ingestion and text normalization",
        "API backend for document upload and query endpoints",
        "87% relevant chunk retrieval precision",
        "15% improvement using cross-encoder reranking",
        "92% citation accuracy for generated answers"
      ],
      achievement: null,
      github: "https://github.com/lossinimagesvaran-code/ai-intelligence-assistant"
    },
    {
      title: "Multi-Agent Email Response System with RAG",
      summary: "Engineered an intelligent email automation system using LangGraph and multiple AI agents to automatically manage customer support emails.",
      techStack: ["Python", "LangGraph", "LangChain", "RAG", "FastAPI", "Streamlit", "Gmail API", "ChromaDB", "Gemini Embeddings"],
      technicalHighlights: [
        "Continuously monitors Gmail inbox",
        "Categorizes emails into complaints, inquiries, feedback or unrelated",
        "Uses specialized AI agents for different workflows",
        "Generates appropriate responses",
        "Uses RAG to retrieve relevant information from a company knowledge base",
        "FastAPI backend with Streamlit frontend"
      ],
      achievement: null,
      github: "#GITHUB_PLACEHOLDER"
    },
    {
      title: "AI Translator with Gemini API",
      summary: "Developed a real-time translation application powered by Google's Gemini AI API supporting 9 languages including English, French, German, Spanish, Hindi, Tamil, Telugu and Marathi.",
      techStack: ["Python", "Google Gemini API", "Streamlit", "LangChain", "python-dotenv"],
      technicalHighlights: [
        "Real-time translation",
        "Error handling",
        "Character counting",
        "Session-based translation history",
        "LLM-powered NLP"
      ],
      achievement: null,
      github: "https://github.com/lossinimagesvaran-code/language-translator-using-Gemini-API"
    },
    {
      title: "Fake Reviews Detection System",
      summary: "Created a machine learning system to detect computer-generated fake reviews from authentic human-written reviews.",
      techStack: ["Python", "scikit-learn", "NLTK", "Streamlit", "TF-IDF", "CountVectorizer", "SVM", "NLP"],
      technicalHighlights: [
        "Compared SVC, Logistic Regression, Random Forest, Decision Tree, KNN and Multinomial Naive Bayes",
        "NLP preprocessing with stopword removal, stemming, and lemmatization",
        "TF-IDF vectorization",
        "Best SVC model achieved 88% accuracy",
        "Interactive Streamlit application with confidence scores",
        "Feature importance visualization"
      ],
      achievement: null,
      github: "https://github.com/lossinimagesvaran-code/fake-reviews-detector"
    },
    {
      title: "Hybrid AI Skincare Recommendation System",
      summary: "Developed a hybrid recommendation system providing personalized skincare recommendations based on skin type, concerns, budget and ingredient preferences.",
      techStack: ["Python", "scikit-learn", "TF-IDF", "Cosine Similarity", "Gemini AI", "Streamlit", "pandas", "NLP", "Sentiment Analysis"],
      technicalHighlights: [
        "Content-based filtering with TF-IDF and cosine similarity",
        "Collaborative filtering using user rating patterns",
        "Sentiment analysis using TextBlob",
        "Gemini AI natural language consultation",
        "237 products with 8,000+ user reviews",
        "Personalized recommendations, ingredient analysis, product comparison and skincare routine advice"
      ],
      achievement: null,
      github: "https://github.com/lossinimagesvaran-code/hybrid-ai-skincare-recommendation-system"
    },
    {
      title: "Movie Recommendation System",
      summary: "Designed a content-based movie recommendation system that suggests similar films based on user preferences analyzing genres, keywords, cast, director and tagline.",
      techStack: ["Python", "scikit-learn", "TF-IDF", "Cosine Similarity", "Streamlit", "pandas", "NumPy"],
      technicalHighlights: [
        "Analyzes genres, keywords, cast, director, and tagline",
        "Uses TF-IDF and cosine similarity",
        "Fuzzy title matching",
        "Movie search with similarity score display",
        "Interactive Streamlit interface"
      ],
      achievement: null,
      github: "https://github.com/lossinimagesvaran-code/movie-recommendation-system"
    },
    {
      title: "Calories Burnt Prediction",
      summary: "Engineered a regression system to predict calories burned during exercise based on gender, age, height, weight, exercise duration, heart rate and body temperature.",
      techStack: ["Python", "XGBoost", "scikit-learn", "pandas", "matplotlib", "seaborn"],
      technicalHighlights: [
        "XGBoost Regressor",
        "Exploratory data analysis and feature engineering",
        "Correlation analysis",
        "Data visualization",
        "Multiple evaluation metrics",
        "Low Mean Absolute Error"
      ],
      achievement: null,
      github: "https://github.com/lossinimagesvaran-code/calories-burnt-prediction"
    },
    {
      title: "Diabetes Prediction System",
      summary: "Created a machine learning classification system to predict diabetes using the PIMA Indian Diabetes Dataset.",
      techStack: ["Python", "scikit-learn", "SVM", "StandardScaler", "pandas", "NumPy"],
      technicalHighlights: [
        "SVM classifier",
        "Feature standardization",
        "Data analysis and feature scaling",
        "Model training and accuracy evaluation",
        "Confusion matrix analysis"
      ],
      achievement: null,
      github: "https://github.com/lossinimagesvaran-code/diabetes-prediction"
    },
    {
      title: "SONAR Rock vs Mine Prediction",
      summary: "Developed a machine learning system to classify sonar signals as rocks or underwater mines using logistic regression analyzing 60 frequency features from sonar returns.",
      techStack: ["Python", "scikit-learn", "pandas", "NumPy", "Logistic Regression"],
      technicalHighlights: [
        "Data preprocessing and feature scaling",
        "Logistic Regression classifier",
        "Model training and classification evaluation",
        "Analyzes 60 frequency features from sonar returns"
      ],
      achievement: null,
      github: "https://github.com/lossinimagesvaran-code/sonar-rock-mine-prediction"
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 bg-darker">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Projects</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A collection of AI/ML projects showcasing expertise in machine learning, computer vision, NLP, and full-stack AI development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
