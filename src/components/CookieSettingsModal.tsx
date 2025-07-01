import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import { CookieConsent } from '@/contexts/CookieConsentContext';

interface CookieSettingsModalProps {
  consent: CookieConsent;
  onSave: (consent: CookieConsent) => void;
  onClose: () => void;
}

export const CookieSettingsModal: React.FC<CookieSettingsModalProps> = ({ 
  consent, 
  onSave, 
  onClose 
}) => {
  const [localConsent, setLocalConsent] = useState<CookieConsent>(consent);

  const handleToggle = (key: keyof CookieConsent) => {
    setLocalConsent(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    onSave(localConsent);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Cookie Settings</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500 dark:text-gray-300 dark:hover:text-white"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="space-y-6">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Manage your cookie preferences. You can change these settings at any time by clicking the "Cookie Settings" link in the footer.
            </p>

            {/* Necessary Cookies - Always on */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="necessary-cookies"
                  name="necessary-cookies"
                  type="checkbox"
                  checked={true}
                  disabled
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="necessary-cookies" className="font-medium text-gray-700 dark:text-gray-300">
                  Necessary Cookies
                </label>
                <p className="text-gray-500 dark:text-gray-400">
                  These cookies are essential for the website to function and cannot be switched off.
                </p>
              </div>
            </div>

            {/* Analytics Cookies */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="analytics-cookies"
                  name="analytics-cookies"
                  type="checkbox"
                  checked={localConsent.analytics}
                  onChange={() => handleToggle('analytics')}
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="analytics-cookies" className="font-medium text-gray-700 dark:text-gray-300">
                  Analytics Cookies
                </label>
                <p className="text-gray-500 dark:text-gray-400">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                </p>
              </div>
            </div>

            {/* Marketing Cookies */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="marketing-cookies"
                  name="marketing-cookies"
                  type="checkbox"
                  checked={localConsent.marketing}
                  onChange={() => handleToggle('marketing')}
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="marketing-cookies" className="font-medium text-gray-700 dark:text-gray-300">
                  Marketing Cookies
                </label>
                <p className="text-gray-500 dark:text-gray-400">
                  These cookies are used to track visitors across websites to display more relevant ads.
                </p>
              </div>
            </div>

            {/* Preferences Cookies */}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="preferences-cookies"
                  name="preferences-cookies"
                  type="checkbox"
                  checked={localConsent.preferences}
                  onChange={() => handleToggle('preferences')}
                  className="h-4 w-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="preferences-cookies" className="font-medium text-gray-700 dark:text-gray-300">
                  Preferences Cookies
                </label>
                <p className="text-gray-500 dark:text-gray-400">
                  These cookies allow the website to remember choices you make to provide better functionality and personalization.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end space-x-3">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              type="button"
              onClick={handleSave}
            >
              Save Preferences
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
