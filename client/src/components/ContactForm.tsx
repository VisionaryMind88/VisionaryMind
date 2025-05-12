import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Phone, Mail, MapPin, Facebook, Linkedin, Github, Twitter } from 'lucide-react';

const contactFormSchema = z.object({
  company: z.string().min(1, "Bedrijfsnaam is vereist"),
  name: z.string().min(1, "Naam is vereist"),
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z.string().min(1, "Telefoonnummer is vereist"),
  message: z.string().min(10, "Bericht moet minimaal 10 karakters bevatten"),
  privacyConsent: z.boolean().refine(val => val === true, {
    message: "Je moet akkoord gaan met het privacybeleid"
  })
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      company: '',
      name: '',
      email: '',
      phone: '',
      message: '',
      privacyConsent: false
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true);
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Bericht verzonden!",
        description: "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
        variant: "default",
      });
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Er is een fout opgetreden",
        description: "Je bericht kon niet worden verzonden. Probeer het later nog eens.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-primary-light bg-opacity-30">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-primary-light border border-primary-lighter mb-4">
              <p className="text-sm text-text-secondary flex items-center">
                <span className="w-2 h-2 bg-accent-green rounded-full inline-block mr-2 animate-pulse"></span>
                Neem contact op
              </p>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Klaar om je bedrijf naar het volgende niveau te tillen?</h2>
            
            <p className="text-text-secondary mb-8">Laat ons weten hoe we je kunnen helpen. Vul het formulier in voor een vrijblijvend adviesgesprek of om meer informatie te ontvangen over onze AI-oplossingen.</p>
            
            {/* Alternate Contact Methods */}
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-blue bg-opacity-20 rounded-lg flex items-center justify-center text-accent-blue">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Telefonisch contact</h4>
                  <p className="text-text-secondary">+31 (0)20 123 4567</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-purple bg-opacity-20 rounded-lg flex items-center justify-center text-accent-purple">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">E-mail</h4>
                  <p className="text-text-secondary">info@visionarymind.nl</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-green bg-opacity-20 rounded-lg flex items-center justify-center text-accent-green">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-heading font-semibold mb-2">Kantoor</h4>
                  <p className="text-text-secondary">Innovatielaan 42, 1011 AB Amsterdam</p>
                </div>
              </div>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light border border-primary-lighter flex items-center justify-center text-text-secondary hover:text-accent-blue transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light border border-primary-lighter flex items-center justify-center text-text-secondary hover:text-accent-blue transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light border border-primary-lighter flex items-center justify-center text-text-secondary hover:text-accent-blue transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-primary-light border border-primary-lighter flex items-center justify-center text-text-secondary hover:text-accent-blue transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="gradient-border rounded-xl overflow-hidden">
              <div className="bg-primary-light p-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="company" className="block text-text-secondary text-sm font-medium mb-2">Bedrijfsnaam</label>
                      <Input
                        id="company"
                        {...register('company')}
                        className="w-full bg-primary-bg border border-primary-lighter rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue transition"
                        placeholder="Jouw bedrijf"
                      />
                      {errors.company && <p className="mt-1 text-red-500 text-xs">{errors.company.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="name" className="block text-text-secondary text-sm font-medium mb-2">Naam contactpersoon</label>
                      <Input
                        id="name"
                        {...register('name')}
                        className="w-full bg-primary-bg border border-primary-lighter rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue transition"
                        placeholder="Jouw naam"
                      />
                      {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-text-secondary text-sm font-medium mb-2">E-mail</label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        className="w-full bg-primary-bg border border-primary-lighter rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue transition"
                        placeholder="jouw@email.nl"
                      />
                      {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-text-secondary text-sm font-medium mb-2">Telefoonnummer</label>
                      <Input
                        id="phone"
                        type="tel"
                        {...register('phone')}
                        className="w-full bg-primary-bg border border-primary-lighter rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue transition"
                        placeholder="+31 6 12345678"
                      />
                      {errors.phone && <p className="mt-1 text-red-500 text-xs">{errors.phone.message}</p>}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-text-secondary text-sm font-medium mb-2">Bericht</label>
                    <Textarea
                      id="message"
                      {...register('message')}
                      rows={5}
                      className="w-full bg-primary-bg border border-primary-lighter rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-blue transition"
                      placeholder="Vertel ons over je bedrijf en wat je zoekt in een AI-oplossing..."
                    />
                    {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="flex items-center space-x-2">
                      <Checkbox 
                        id="privacy" 
                        {...register('privacyConsent')} 
                        className="data-[state=checked]:bg-accent-blue"
                      />
                      <label htmlFor="privacy" className="text-sm text-text-secondary">
                        Ik ga akkoord met de <a href="#" className="text-accent-blue">privacyverklaring</a>
                      </label>
                    </div>
                    {errors.privacyConsent && <p className="ml-2 text-red-500 text-xs">{errors.privacyConsent.message}</p>}
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full neon-button bg-accent-green text-white py-3 px-8 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-accent-green/25"
                  >
                    {isSubmitting ? "Verzenden..." : "Neem direct contact op"}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
