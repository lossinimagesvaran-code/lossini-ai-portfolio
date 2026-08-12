import { useState } from 'react'

const CertificationCard = ({ certification }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="bg-dark/50 backdrop-blur-sm rounded-xl p-6 border border-primary/10 hover:border-primary/30 transition-all duration-300">
      <div className="flex flex-col h-full">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{certification.title}</h3>
          <p className="text-primary font-semibold mb-1">{certification.issuer}</p>
          <p className="text-gray-400 text-sm mb-4">{certification.date}</p>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-200 text-sm font-medium"
            >
              View Credential →
            </a>
          )}
          
          {certification.image && (
            <>
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg border border-secondary/20 hover:border-secondary/40 transition-all duration-200 text-sm font-medium"
              >
                View Certificate
              </button>
              
              {isModalOpen && (
                <div 
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  onClick={() => setIsModalOpen(false)}
                >
                  <div 
                    className="relative max-w-4xl max-h-[90vh] bg-dark rounded-xl overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="absolute top-4 right-4 z-10 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
                    >
                      ✕
                    </button>
                    <img 
                      src={certification.image} 
                      alt={certification.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const Certifications = () => {

  const certifications = [

    {
      title: "Beyond the Hype: Unpacking the Planning and Reasoning Abilities of LLMs and LRMs",
      issuer: "Asia Pacific Analytics Club (APAC)",
      date: "June 2025",
      credentialUrl: "",
      image: "/Lossini Magesvaran.png"
    },

    {
      title: "Gen AI Study Jam 2025 – 5-Week Course on Generative AI",
      issuer: "Kaggle & AI/ML Malaysia",
      date: "June 2025",
      credentialUrl: "",
      image: "/Gen AI Study Jam 2025.jpg"
    },

    {
      title: "Code; Without Barriers Mentorship Program",
      issuer: "Microsoft & iTrain Asia",
      date: "June 2025",
      credentialUrl: "",
      image: "/Mentee Circle 1 (Lossini Magesvaran).png"
    },

    {
      title: "IBM Qiskit Fall Fest 2025",
      issuer: "QubitHUB in collaboration with IBM Quantum",
      date: "November 2025",
      credentialUrl: "",
      image: "/42.-Certificate of Participation_Lossini Magesvaran_page-0001.jpg"
    },

    {
      title: "Zero to Cyber Hero: Hands-on Hacking Workshop",
      issuer: "Asia Pacific University of Technology and Innovation",
      date: "September 2025",
      credentialUrl: "https://www.credly.com/earner/earned/badge/f6637dd4-2c6e-4381-931e-a13412a172f6",
      image: "/ZEROTOCYBERHEROHands-onHackingWorkshop_Badge20260606-32-7fy4aq_page-0001.jpg"
    },

    {
      title: "APICTA Awards 2025 Nominee – Resume AI Optimizer",
      issuer: "Asia Pacific Information and Communications Technology Alliance (APICTA)",
      date: "December 2025",
      credentialUrl: "",
      image: "/APICTA.jpg"
    },

    {
      title: "Google AI Fundamentals",
      issuer: "Google via Coursera",
      date: "May 2026",
      credentialUrl: "https://www.credly.com/earner/earned/badge/7e1e0f95-267f-449f-984a-6f57f4fb7c61",
      image: "/GoogleAIFundamentals_Badge20260523-31-t1h0ph_page-0001.jpg"
    },

    {
      title: "CGM Academy for Youth",
      issuer: "CGM Academy for Youth",
      date: "May 2026",
      credentialUrl: "",
      image: "/CGM.jpeg"
    },

    {
      title: "AWS AI Practitioner Challenge",
      issuer: "Udacity",
      date: "May 2026",
      credentialUrl: "https://www.udacity.com/certificate/e/e4491754-34da-11f1-aeae-57f43e5e7ebd",
      image: "/aws_practitioner.png"
    },

    {
      title: "AWS Scholars Program Project Badge: Build Your First AI Productivity App",
      issuer: "Udacity",
      date: "May 2026",
      credentialUrl: "https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/AWS%20AI%20%26%20ML%20Scholarship%20Badges%20-%20Project%20-%20Build%20your%20first%20AI%20-%20Dark%403x.jpg",
      image: ""
    },

    {
      title: "AWS Scholars Program Project Badge: Analyze Data using AI with PartyRock",
      issuer: "Udacity",
      date: "May 2026",
      credentialUrl: "https://cdn.getblueshift.com/bee/images/ed5b8755-0989-4944-9ca5-287bb68e4a22/AWS%20AI%20%26%20ML%20Scholarship%20Badges%20-%20Project%20-%20Analyze%20Data%20-%20Dark%403x.jpg",
      image: ""
    },

    {
      title: "AI Skills Fest 2026",
      issuer: "Microsoft",
      date: "June 2026",
      credentialUrl: "https://www.credly.com/badges/1708ad5c-4ed1-4880-90ab-b56da1e594be/public_url",
      image: ""
    }

  ];

  // ...

  return (
    <section id="certifications" className="min-h-screen py-20 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and credentials in AI, machine learning, and software development.
          </p>
        </div>
        
        {certifications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <CertificationCard key={index} certification={cert} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Certifications will be added soon.</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
