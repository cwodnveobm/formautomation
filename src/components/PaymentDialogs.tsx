import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface PaymentDialogsProps {
  showConfirmDialog: boolean;
  setShowConfirmDialog: (show: boolean) => void;
  showPaymentDialog: boolean;
  setShowPaymentDialog: (show: boolean) => void;
  onConfirmedSubmit: () => void;
  onPaymentConfirm: () => void;
}

export const PaymentDialogs = ({
  showConfirmDialog,
  setShowConfirmDialog,
  showPaymentDialog,
  setShowPaymentDialog,
  onConfirmedSubmit,
  onPaymentConfirm,
}: PaymentDialogsProps) => {
  return (
    <>
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Important Information</AlertDialogTitle>
            <AlertDialogDescription className="space-y-4">
              <p>We will send you the payment link shortly. Please complete the payment, take a screenshot of it, and wait for the next email with further instructions for the automation.</p>
              <p className="font-medium">
                Payment Link:{" "}
                <a
                  href="https://razorpay.com/payment-link/plink_PeElxYBNvgMGST"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Click here to make the payment
                </a>
              </p>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:flex-row gap-2">
            <AlertDialogCancel className="sm:w-auto">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onConfirmedSubmit} className="sm:w-auto">
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <AlertDialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
        <AlertDialogContent className="sm:max-w-[425px]">
          <AlertDialogHeader>
            <AlertDialogTitle>Payment Instructions</AlertDialogTitle>
            <AlertDialogDescription>
              Please ensure that you have made the payment through your UPI ID or number. Do not scan the QR code.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="sm:flex-row gap-2">
            <AlertDialogCancel className="sm:w-auto">Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={onPaymentConfirm} className="sm:w-auto">
              Proceed to Payment
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};