export const AutomationFeatures = () => {
  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-900">Current Automations</h3>
        
        <div className="space-y-3 sm:space-y-4">
          <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900">WhatsApp & Instagram Job Promotion</h4>
            <span className="text-sm sm:text-base text-gray-600 block mt-1">
              Automates job details promotion on WhatsApp and Instagram.
            </span>
          </div>
          
          <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900">Facebook Messenger Notifications</h4>
            <span className="text-sm sm:text-base text-gray-600 block mt-1">
              Sends notifications to Gmail and WhatsApp for new Facebook Messenger messages.
            </span>
          </div>
          
          <div className="p-3 sm:p-4 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-md transition-shadow">
            <h4 className="font-semibold text-gray-900">Contact Management</h4>
            <span className="text-sm sm:text-base text-gray-600 block mt-1">
              Instant notifications when new contacts are added to your network.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};