export const About = () => {
  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 bg-gradient-text bg-clip-text text-transparent animate-fade-in">
            About Me
          </h2>
          
          <div className="bg-surface-elevated rounded-3xl p-8 lg:p-12 shadow-card animate-fade-in-up">
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a passionate Machine Learning and Data Science Engineer with over a year of hands-on experience 
              in developing intelligent systems and extracting meaningful insights from complex datasets. My expertise 
              lies in the intersection of advanced algorithms, statistical analysis, and practical business applications.
            </p>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8">
              I specialize in end-to-end machine learning pipeline development, from data preprocessing and feature 
              engineering to model deployment and monitoring. My work focuses on creating scalable, production-ready 
              solutions that drive real business value through data-driven decision making.
            </p>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              When I'm not training models or analyzing data, I enjoy staying up-to-date with the latest developments 
              in AI research, contributing to open-source projects, and sharing knowledge with the data science community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};