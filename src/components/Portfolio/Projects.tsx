import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Heart Disease Prediction",
    description: "Advanced ML model using ensemble methods to predict cardiovascular disease risk with 94% accuracy. Implemented comprehensive data preprocessing and feature selection techniques.",
    tech: ["Machine Learning", "Scikit-learn", "Pandas", "NumPy"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "primary"
  },
  {
    title: "Customer Churn Analysis Dashboard",
    description: "Interactive analytics dashboard for predicting customer churn patterns. Built end-to-end pipeline from data extraction to visualization with real-time insights.",
    tech: ["Python", "SQL", "Tableau", "pandas"],
    github: "https://github.com",
    demo: "https://demo.com", 
    color: "accent"
  },
  {
    title: "Image Classification with CNN",
    description: "Deep learning model for multi-class image classification achieving 97% accuracy. Implemented custom CNN architecture with data augmentation and transfer learning.",
    tech: ["TensorFlow", "Keras", "Computer Vision", "Python"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "primary"
  },
  {
    title: "Stock Price Forecasting",
    description: "Time series forecasting model using LSTM networks to predict stock market trends. Integrated technical indicators and sentiment analysis for enhanced accuracy.",
    tech: ["Time Series", "LSTM", "Neural Networks", "Finance"],
    github: "https://github.com",
    demo: "https://demo.com",
    color: "accent"
  }
];

export const Projects = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="bg-surface-elevated rounded-3xl p-8 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-xl lg:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className={`w-3 h-3 rounded-full ${project.color === 'primary' ? 'bg-primary' : 'bg-accent'} animate-glow-pulse`}></div>
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-surface rounded-full text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-surface hover:bg-surface-hover border-border hover:shadow-soft transition-all duration-300"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  
                  <Button
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};