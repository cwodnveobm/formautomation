import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch("https://formspree.io/f/xovvkbea", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for your interest. We'll be in touch soon!",
        });
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center text-gray-900">
              Premium Automation Services
            </CardTitle>
            <CardDescription className="text-center mt-2 text-xl text-gray-600">
              Transform your business with our comprehensive automation suite
              <div className="text-2xl font-bold mt-2 text-primary">₹888/month</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8 space-y-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Job promotion on WhatsApp and Instagram</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>VIP notifications via Gmail and WhatsApp</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>High-value contact alerts</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Lead capture and nurturing systems</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <Input required type="text" name="name" id="name" placeholder="Your full name" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <Input required type="email" name="email" id="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <Input required type="tel" name="phone" id="phone" placeholder="Your phone number" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message (Optional)</label>
                  <Textarea name="message" id="message" placeholder="Any specific requirements or questions?" />
                </div>
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Get Started Now"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Voiceflow Chat Widget Script */}
      <script type="text/javascript" dangerouslySetInnerHTML={{
        __html: `
          (function(d, t) {
              var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
              v.onload = function() {
                window.voiceflow.chat.load({
                  verify: { projectID: '6775582baf88ef4857052f89' },
                  url: 'https://general-runtime.voiceflow.com',
                  versionID: 'production'
                });
              }
              v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
          })(document, 'script');
        `
      }} />
    </div>
  );
};

export default Index;