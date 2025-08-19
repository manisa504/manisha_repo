const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: ["Regression", "Classification", "NLP", "Deep Learning", "Neural Networks", "XGBoost", "Random Forest", "SVM"]
    },
    {
      title: "Programming Languages",
      skills: ["Python", "R", "SQL", "C++", "Java", "JavaScript", "HTML/CSS", "Scala"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["Scikit-learn", "Pandas", "NumPy", "TensorFlow", "Keras", "Matplotlib", "Seaborn"]
    },
    {
      title: "Data Visualization & BI",
      skills: ["Power BI", "Tableau", "Excel", "SSRS"]
    },
    {
      title: "Databases",
      skills: ["SQL Server", "PostgreSQL", "MySQL", "Hive", "MongoDB"]
    },
    {
      title: "Cloud & Deployment",
      skills: ["AWS", "Azure", "ONNX", "REST APIs"]
    },
    {
      title: "Statistical Software",
      skills: ["R", "SAS", "SPSS", "MATLAB"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="container-max">
        <div className="text-center mb-16 fade-in animate">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <div className="section-divider"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit spanning machine learning, data engineering, and analytics
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-minimal fade-in animate"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-3"></div>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skill}
                    className="skill-badge"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-16 text-center fade-in animate" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
            <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
            <span className="text-foreground font-medium">
              Specialized in Production ML Deployment & Real-time Analytics
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;