import { Download, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // Resume path in public folder
    const resumePath = '/assets/documents/Manisha_Shah_Resume.pdf';
    
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Manisha_Shah_Resume.pdf';
    
    // Try to download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center section-padding bg-hero">
      <div className="bg-orbs">
        <div className="orb"></div>
        <div className="orb"></div>
        <div className="orb"></div>
      </div>
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 fade-in animate">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
                Manisha
                <span className="gradient-text block">Shah</span>
              </h1>
              <p className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Data Scientist
              </p>
              <div className="section-divider !mx-0"></div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-subtle">
              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-accent" />
                <span>Portland, OR</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a 
                  href="mailto:Manisa.doc@gmail.com" 
                  className="hover:text-primary transition-colors"
                >
                  Manisa.doc@gmail.com
                </a>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button 
                onClick={handleDownloadResume}
                className="btn-primary flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </Button>
              <Button 
                variant="outline"
                onClick={handleContactClick}
                className="btn-outline"
              >
                Contact Me
              </Button>
            </div>
          </div>

          {/* Professional Image */}
          <div className="flex justify-center lg:justify-end fade-in animate" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl bg-muted/20">
                <img 
                  src="/assets/images/profile-photo.jpg" 
                  alt="Manisha Shah - Data Scientist" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to existing image if profile photo doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src = "/lovable-uploads/8dda7f20-2879-47dd-82bf-ff8f0b91d5df.png";
                  }}
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;