import { 
  Brain, 
  Database, 
  BarChart3, 
  Code2, 
  GitBranch, 
  Container,
  FileCode,
  TrendingUp,
  Settings,
  Cpu
} from "lucide-react";

const skills = [
  { name: "Machine Learning", icon: Brain, color: "text-primary" },
  { name: "Deep Learning", icon: Cpu, color: "text-accent" },
  { name: "Data Science", icon: TrendingUp, color: "text-primary" },
  { name: "Data Visualization", icon: BarChart3, color: "text-accent" },
  { name: "Python", icon: FileCode, color: "text-primary" },
  { name: "SQL", icon: Database, color: "text-accent" },
  { name: "Statistics", icon: BarChart3, color: "text-primary" },
  { name: "Feature Engineering", icon: Settings, color: "text-accent" },
  { name: "MLOps", icon: GitBranch, color: "text-primary" },
  { name: "APIs", icon: Code2, color: "text-accent" },
];

const techStack = [
  "Python", "Pandas", "NumPy", "Scikit-learn", "TensorFlow", 
  "PyTorch", "Matplotlib", "Seaborn", "SQL", "Git", "Docker", "React"
];

export const Skills = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
            Skills & Expertise
          </h2>
          
          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16 animate-fade-in-up">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-surface rounded-2xl p-6 shadow-card hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <skill.icon className={`w-8 h-8 ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`} />
                <h3 className="font-semibold text-foreground text-sm text-center">{skill.name}</h3>
              </div>
            ))}
          </div>
          
          {/* Tech Stack */}
          <div className="bg-surface-elevated rounded-3xl p-8 lg:p-12 shadow-card animate-fade-in-delay">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8 text-foreground">
              Technology Stack
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-surface rounded-full text-sm font-medium text-muted-foreground hover:text-primary hover:bg-surface-hover transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};