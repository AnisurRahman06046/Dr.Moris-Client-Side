import React from "react";

const DiscountBanner = () => {
  return (
    <div>
      <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
              Up to
              <br className="sm:hidden" />
              50% Off
            </h2>
            <div className="space-x-2 text-center py-2 lg:py-0">
              <span> Use code:</span>
              <span className="font-bold text-lg">Dr.Moris</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;
