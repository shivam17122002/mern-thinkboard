import { ZapIcon } from "lucide-react";
import React from "react";

const RateLimitedUi = () => {
  return (
    
      <div className="max-w-6xl mx-auto px-4 pt-8">
        <div className="bg-primary/15 border border-primary/30 rounded-lg shadow-md">
          <div className="flex items-start gap-4 p-4">
            {/* Icon */}
            <div className="flex-shrink-0 bg-primary/30 p-4 rounded-full">
              <ZapIcon className="size-6 text-primary" />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-1">
                Rate Limit Reached
              </h3>

              <p className="text-sm text-textMutedDark">
                You've made too many requests in a short period. Please wait a
                moment.
              </p>

              <p className="text-xs text-textMutedDark mt-1">
                Try again in a few seconds for the best experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default RateLimitedUi;
