import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { AutomationFeatures } from "@/components/AutomationFeatures";
import { ContactForm } from "@/components/ContactForm";
import { PaymentDialogs } from "@/components/PaymentDialogs";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [showPaymentDialog, setShowPaymentDialog] = useState(false);
  const [formData, setFormData] = useState(new FormData());

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentFormData = new FormData(e.currentTarget);
    setFormData(currentFormData);
    setShowConfirmDialog(true);
  };

  const handleConfirmedSubmit = async () => {
    setIsSubmitting(true);
    setShowConfirmDialog(false);
    
    try {
      const response = await fetch("https://formspree.io/f/xovvkbea", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        },
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Thank you for your interest. We'll be in touch soon!",
        });
        (document.querySelector('form') as HTMLFormElement)?.reset();
        setShowPaymentDialog(true);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form. Please try again.",
        variant: "destructive",
      });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentConfirm = () => {
    window.open('https://razorpay.com/payment-link/plink_PeElxYBNvgMGST', '_blank');
    setShowPaymentDialog(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-indigo-100 py-4 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Card className="backdrop-blur-sm bg-white/90 shadow-xl">
          <CardHeader className="space-y-2 sm:space-y-4">
            <CardTitle className="text-xl sm:text-2xl lg:text-4xl font-bold text-center text-gray-900">
              Premium Automation Services
            </CardTitle>
            <CardDescription className="text-center space-y-2 sm:space-y-4">
              <span className="text-base sm:text-lg lg:text-xl text-gray-600 block">
                Transform your business with our comprehensive automation suite
              </span>
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary block mt-2 sm:mt-4">
                ₹888/month
              </span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              <AutomationFeatures />
              <ContactForm 
                onSubmit={handleSubmit}
                isSubmitting={isSubmitting}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <PaymentDialogs 
        showConfirmDialog={showConfirmDialog}
        setShowConfirmDialog={setShowConfirmDialog}
        showPaymentDialog={showPaymentDialog}
        setShowPaymentDialog={setShowPaymentDialog}
        onConfirmedSubmit={handleConfirmedSubmit}
        onPaymentConfirm={handlePaymentConfirm}
      />
    </div>
  );
};

export default Index;