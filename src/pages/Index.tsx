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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="backdrop-blur-sm bg-white/90">
          <CardHeader>
            <CardTitle className="text-4xl font-bold text-center text-gray-900 mb-4">
              Premium Automation Services
            </CardTitle>
            <CardDescription className="text-center space-y-2">
              <p className="text-xl text-gray-600">
                Transform your business with our comprehensive automation suite
              </p>
              <div className="text-3xl font-bold text-primary mt-4">₹888/month</div>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900">Current Automations</h3>
                  
                  <div className="space-y-4">
                    <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                      <h4 className="font-semibold text-gray-900">WhatsApp & Instagram Job Promotion</h4>
                      <p className="text-gray-600 mt-1">Automates job details promotion on WhatsApp and Instagram.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                      <h4 className="font-semibold text-gray-900">Facebook Messenger Notifications</h4>
                      <p className="text-gray-600 mt-1">Sends notifications to Gmail and WhatsApp for new Facebook Messenger messages.</p>
                    </div>
                    
                    <div className="p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50">
                      <h4 className="font-semibold text-gray-900">Contact Management</h4>
                      <p className="text-gray-600 mt-1">Instant notifications when new contacts are added to your network.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-900">Get Started Today</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Get Started Now"}
                  </Button>
                </form>
              </div>
            </div>
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