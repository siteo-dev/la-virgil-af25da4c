import { useState, useEffect, useRef } from 'react';
import { 
  ChefHat, 
  MapPin, 
  Phone, 
  Mail, 
  Star, 
  Clock, 
  Users, 
  Award, 
  Heart,
  Instagram,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import { cn } from '@/lib/utils';
import DemoBanner from './DemoBanner';
import LightRays from './LightRays';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 350, suffix: '+', label: 'Happy Customers' },
    { value: 2017, suffix: '', label: 'Years in Business' },
    { value: 50, suffix: '+', label: 'Dishes Served' },
    { value: 4.9, suffix: '', label: 'Average Rating' }
  ];

  const services = [
    {
      name: "Ciorba de perisoare",
      description: "Traditional meat soup with tender chunks of pork",
      price: "32 RON"
    },
    {
      name: "Ciorba de burta",
      description: "Rich stomach soup with aromatic spices",
      price: "37 RON"
    },
    {
      name: "Ciorba de vita",
      description: "Hearty wheat soup with vegetables and herbs",
      price: "34 RON"
    },
    {
      name: "Paste carbonara",
      description: "Creamy pasta with pancetta and pecorino cheese",
      price: "50 RON"
    },
    {
      name: "Vita",
      description: "Slow-braised beef with potatoes and seasonal vegetables",
      price: "89 RON"
    }
  ];

  const whyUs = [
    {
      title: "Authentic Recipes",
      description: "Passed down through generations, prepared with traditional techniques"
    },
    {
      title: "Local Ingredients",
      description: "Sourced from regional farms to ensure freshness and quality"
    },
    {
      title: "Cozy Atmosphere",
      description: "Warm, welcoming environment perfect for family dinners or romantic dates"
    },
    {
      title: "Family Run",
      description: "Personal attention and genuine hospitality that makes every visit special"
    }
  ];

  const reviews = [
    {
      name: "Maria I.",
      text: "The ciorba de burta is absolutely incredible. The flavors were rich and perfectly balanced.",
      rating: 5,
      avatar: "/assets/people/girl_1.jpg"
    },
    {
      name: "Andrei M.",
      text: "Best Romanian food in the city. The vita was tender and cooked to perfection.",
      rating: 5,
      avatar: "/assets/people/boy_1.jpg"
    },
    {
      name: "Elena S.",
      text: "Cozy setting with excellent service. The carbonara exceeded my expectations.",
      rating: 5,
      avatar: "/assets/people/girl_1.jpg"
    }
  ];

  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We're open Tuesday through Sunday from 12 PM to 10 PM."
    },
    {
      question: "Do you offer vegetarian options?",
      answer: "Yes, we have several traditional soups and vegetable dishes available."
    },
    {
      question: "Can I make reservations?",
      answer: "Reservations are recommended, especially for weekend dinners."
    },
    {
      question: "Are you wheelchair accessible?",
      answer: "Yes, our restaurant is fully accessible with wide doorways and ramps."
    },
    {
      question: "Do you accommodate dietary restrictions?",
      answer: "We can adjust most dishes upon request. Please inform us at least 24 hours in advance."
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we provide delivery within our service area with a minimum order of 100 RON."
    }
  ];

  const galleryItems = [
    { name: "Traditional decor with local art", image: "/assets/cars/car_audi.jpg" },
    { name: "Warm lighting and cozy seating", image: "/assets/cars/car_bmw.jpg" },
    { name: "Chef preparing signature dishes", image: "/assets/cars/car_tesla.jpg" },
    { name: "Family-style dining atmosphere", image: "/assets/people/boy_1.jpg" },
    { name: "Seasonal ingredient displays", image: "/assets/people/girl_1.jpg" }
  ];

  return (
    <>
      <DemoBanner />
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-5xl mx-auto mt-4 px-4 sm:px-6 h-14 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
          <div className="flex items-center justify-between h-full">
            <div className="text-base font-semibold tracking-tight">La Virgil</div>
            <nav className="hidden md:flex gap-1">
              <Button variant="ghost" className="rounded-full text-white hover:bg-white/5">Home</Button>
              <Button variant="ghost" className="rounded-full text-white hover:bg-white/5">Menu</Button>
              <Button variant="ghost" className="rounded-full text-white hover:bg-white/5">About</Button>
              <Button variant="ghost" className="rounded-full text-white hover:bg-white/5">Contact</Button>
            </nav>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden rounded-full text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </header>

      <main className="relative min-h-screen pt-40 pb-24 sm:pt-48 sm:pb-32">
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#ff9933" 
            raysSpeed={1} 
            lightSpread={0.5} 
            rayLength={3} 
            followMouse={true} 
            mouseInfluence={0.1} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <AnimatedShinyText className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-6 hero-blur hero-delay-1">
              <span className="text-sm font-medium">Authentic Romanian Cuisine</span>
            </AnimatedShinyText>
            
            <h1 className="hero-blur hero-delay-2 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent mb-6">
              Where Tradition Meets Taste
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg text-muted-foreground max-w-xl mx-auto mb-12 leading-relaxed">
              La Virgil brings you the soul of Romanian cuisine with modern flair. Every dish tells a story of family recipes and local ingredients.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-blur hero-delay-4 mb-16">
              <ShimmerButton className="shadow-2xl btn-hover" background="rgba(255,153,51,1)">
                <span className="text-sm font-medium text-white">Book Your Table</span>
              </ShimmerButton>
              <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover">
                Call Now
              </Button>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 hero-blur hero-delay-5">
              {stats.map((stat, i) => (
                <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                  <NumberTicker 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(255,153,51,0.6)]" 
                  />
                  <p className="text-sm text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-0 pointer-events-none">
          <DotPattern opacity={0.05} width={24} height={24} cx={1} cy={1} cr={1} />
        </div>
      </main>

      <section id="about" className="py-24 sm:py-32 lg:py-40 relative">
        <div className="absolute inset-0 pointer-events-none">
          <DotPattern opacity={0.05} width={32} height={32} cx={1} cy={1} cr={1} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Founded in 2017, La Virgil is more than a restaurant—it's a celebration of Romanian culture through food. We source locally and prepare each dish with passion and tradition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="animate-on-scroll card-hover bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 mb-4">
                  <ChefHat className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-lg font-semibold">Authentic Recipes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Traditional Romanian dishes prepared using time-honored techniques passed down through generations.
                </p>
              </CardContent>
            </Card>

            <Card className="animate-on-scroll card-hover bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 mb-4">
                  <MapPin className="w-6 h-6 text-orange-400" />
                </div>
                <CardTitle className="text-lg font-semibold">Local Sourcing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Ingredients sourced from regional farms to ensure the freshest and most authentic flavors.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 sm:py-32 lg:py-40 relative">
        <div className="absolute inset-0 pointer-events-none">
          <DotPattern opacity={0.05} width={28} height={28} cx={1} cy={1} cr={1} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Handcrafted Dishes</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Authentic Romanian specialties made with care and local ingredients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className={`animate-on-scroll card-hover ${index === 1 ? 'relative' : ''}`}>
                {index === 1 && (
                  <BorderBeam size={200} duration={12} colorFrom="#ff9933" colorTo="#ff9933" />
                )}
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 mb-4">
                    <ChefHat className="w-6 h-6 text-orange-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  <p className="text-base font-bold text-orange-400">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="why-us" className="py-24 sm:py-32 lg:py-40 relative">
        <div className="absolute inset-0 pointer-events-none">
          <DotPattern opacity={0.05} width={24} height={24} cx={1} cy={1} cr={1} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Why Choose La Virgil?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyUs.map((item, index) => (
              <Card key={index} className="animate-on-scroll card-hover bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-500/10 mb-4">
                    {index === 0 && <Award className="w-6 h-6 text-orange-400" />}
                    {index === 1 && <MapPin className="w-6 h-6 text-orange-400" />}
                    {index === 2 && <Users className="w-6 h-6 text-orange-400" />}
                    {index === 3 && <Heart className="w-6 h-6 text-orange-400" />}
                  </div>
                  <CardTitle className="text-lg font-semibold">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-24 sm:py-32 lg:py-40 relative">
        <div className="absolute inset-0 pointer-events-none">
          <DotPattern opacity={0.05} width={32} height={32} cx={1} cy={1} cr={1} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Asta spun clientii nostri</h2>
          </div>

          <div className="relative max-w-4xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card key={index} className="animate-on-scroll card-hover w-[300px] sm:w-[350px] mr-6">
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={review.avatar} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="ml-3">
                        <CardTitle className="text-sm font-semibold">{review.name}</CardTitle>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${i < review.rating ? 'fill-orange-400 text-orange-400' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{review.text}</p>
                  </CardContent>
                </Card>
              ))}
            </Marquee>
            
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 sm:py-32 lg:py-40 relative">
        <div className="absolute inset-0 pointer-events-none">
          <DotPattern opacity={0.05} width={28} height={28} cx={1} cy={1} cr={1} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Intrebarile puse frecvent de clienti</h2>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto animate-on-scroll">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10 rounded-xl mb-4">
                <AccordionTrigger className="text-left py-4 px-6 hover:bg-white/[0.02] transition-colors duration-200">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contact" className="py-24 sm:py-32 lg:py-40 relative">
        <div className="absolute inset-0 pointer-events-none">
          <DotPattern opacity={0.05} width={24} height={24} cx={1} cy={1} cr={1} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Contacteaza-ne oricand</h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              Come taste the flavors of Romania in our warm, inviting setting.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6 animate-on-scroll">
              {[
                { icon: MapPin, label: "Address", value: "soseaua. tudor vladimirescu, domnesti, ilfov" },
                { icon: Phone, label: "Phone", value: "+40757289374" },
                { icon: Mail, label: "Email", value: "contact@virgil.com" }
              ].map((item, index) => (
                <Card key={index} className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm card-hover">
                  <CardHeader>
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500/10 mr-4">
                        <item.icon className="w-5 h-5 text-orange-400" />
                      </div>
                      <div>
                        <CardTitle className="text-lg font-semibold">{item.label}</CardTitle>
                        <CardDescription className="text-muted-foreground">{item.value}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <ShimmerButton className="shadow-2xl btn-hover flex-1">
                  <span className="text-sm font-medium text-white">Book Appointment</span>
                </ShimmerButton>
                <Button variant="outline" className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover flex-1">
                  Call Now
                </Button>
              </div>
            </div>

            <div className="animate-on-scroll">
              <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm h-[500px] overflow-hidden">
                <div className="h-full rounded-2xl overflow-hidden">
                  <iframe
                    src={"https://www.google.com/maps?q=" + encodeURIComponent("soseaua. tudor vladimirescu, domnesti, ilfov") + "&output=embed"}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 sm:py-32 lg:py-40 relative">
        <div className="absolute inset-0 pointer-events-none">
          <DotPattern opacity={0.05} width={32} height={32} cx={1} cy={1} cr={1} />
        </div>
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="animate-on-scroll text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">Our Dining Experience</h2>
          </div>

          <BentoGrid className="lg:grid-rows-3">
            {galleryItems.map((item, index) => (
              <BentoCard
                key={index}
                name={item.name}
                description=""
                cta="View Details"
                Icon={ChefHat}
                className={index === 0 ? "lg:col-span-2 lg:row-span-2" : ""}
                background={
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent" />
                }
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      <footer className="py-8 border-t border-white/[0.05] relative">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <Separator className="mb-6" />
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © {new Date().getFullYear()} La Virgil. All rights reserved.
            </div>
            <div className="flex gap-3">
              <a href="https://instagram.com/virgil" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="rounded-full bg-white/[0.05] hover:bg-white/10">
                  <Instagram className="w-4 h-4 text-white" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block"><ProgressiveBlur position="bottom" height="250px" /></div><div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden"><ProgressiveBlur position="bottom" height="150px" /></div>
    </>
  );
}
