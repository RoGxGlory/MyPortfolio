import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const handleSubmit = (data: ContactFormData) => {
    toast.success("Message sent! I'll get back to you soon.");
    form.reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's collaborate on your next project
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="bg-background/50 border-border"
                          placeholder="Your name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          className="bg-background/50 border-border"
                          placeholder="your.email@example.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          className="bg-background/50 border-border min-h-[150px]"
                          placeholder="Your message..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 glow-primary gap-2"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="glass-card p-6 rounded-xl text-center">
              <Mail className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Email</h3>
              <p className="text-muted-foreground text-sm">benabdeljalilrayane1@gmail.com</p>
            </div>
            
            <div className="glass-card p-6 rounded-xl text-center">
              <MessageSquare className="w-8 h-8 mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-1">Discord</h3>
              <p className="text-muted-foreground text-sm">rog_</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;