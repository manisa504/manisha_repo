import { Download, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume file
    console.log('Download resume clicked');
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
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a 
                  href="tel:360-989-0142" 
                  className="hover:text-primary transition-colors"
                >
                  360-989-0142
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

          {/* Professional Image Placeholder */}
          <div className="flex justify-center lg:justify-end fade-in animate" style={{ animationDelay: '0.3s' }}>
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border-4 border-primary/10">
              <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <div className="w-24 h-24 rounded-full bg-primary/20 mx-auto mb-4"></div>
                  <p className="text-subtle text-sm">Professional Photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;