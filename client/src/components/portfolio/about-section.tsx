export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative" data-testid="about-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text" data-testid="about-title">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-muted-foreground" data-testid="about-description">
              Full Stack Java Developer with 4+ years of experience delivering cloud-native, secure, and scalable applications across enterprise and product environments.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="glassmorphism p-6 rounded-xl text-center card-hover" data-testid="stat-experience">
                <div className="text-3xl font-bold gradient-text">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="glassmorphism p-6 rounded-xl text-center card-hover" data-testid="stat-apis">
                <div className="text-3xl font-bold gradient-text">20+</div>
                <div className="text-sm text-muted-foreground">APIs Developed</div>
              </div>
              <div className="glassmorphism p-6 rounded-xl text-center card-hover" data-testid="stat-users">
                <div className="text-3xl font-bold gradient-text">10K+</div>
                <div className="text-sm text-muted-foreground">End Users Served</div>
              </div>
              <div className="glassmorphism p-6 rounded-xl text-center card-hover" data-testid="stat-uptime">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Application Uptime</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Chakresh Doddi - Professional Photo" 
              className="w-full h-auto rounded-xl glassmorphism p-1 animate-float"
              data-testid="about-photo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
