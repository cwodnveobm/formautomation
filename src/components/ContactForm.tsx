import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface ContactFormProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isSubmitting: boolean;
}

export const ContactForm = ({ onSubmit, isSubmitting }: ContactFormProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Get Started Today</h3>
      <form onSubmit={onSubmit} className="space-y-3 sm:space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <Input
            required
            type="text"
            name="name"
            id="name"
            placeholder="Your full name"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            required
            type="email"
            name="email"
            id="email"
            placeholder="your@email.com"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <Input
            required
            type="tel"
            name="phone"
            id="phone"
            placeholder="Your phone number"
            className="w-full"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Message (Optional)
          </label>
          <Textarea
            name="message"
            id="message"
            placeholder="Any specific requirements or questions?"
            className="w-full min-h-[100px]"
          />
        </div>
        <Button
          type="submit"
          className="w-full mt-4"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Get Started Now"}
        </Button>
      </form>
    </div>
  );
};