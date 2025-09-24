import { BarChart3, CheckCircle, Package } from "lucide-react";

const FeatureSection = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Everything you need to manage inventory
          </h2>
          <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
            Professional tools designed specifically for small businesses who
            demand precision and reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Feature 1 */}
          <div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-900/10 rounded-lg mb-6">
              <Package className="h-6 w-6 text-neutral-900" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Real-time Inventory Tracking
            </h3>
            <p className="text-neutral-500 mb-6 text-lg">
              Monitor stock levels across all locations with live updates. Get
              instant notifications when items run low and automate reorder
              processes to prevent stockouts.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-neutral-500">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Live stock level monitoring
              </li>
              <li className="flex items-center text-neutral-500">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Automated low-stock alerts
              </li>
              <li className="flex items-center text-neutral-500">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Multi-location support
              </li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-neutral-100 to-neutral-300 rounded-2xl p-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-neutral-600">
                  Inventory Status
                </span>
                <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Live
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">iPhone 15 Pro</span>
                  <span className="font-mono text-sm">247 units</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">MacBook Air M2</span>
                  <span className="font-mono text-sm text-red-600">
                    3 units ⚠️
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">AirPods Pro</span>
                  <span className="font-mono text-sm">89 units</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Feature 2 */}
          <div className="lg:order-2">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-900/10 rounded-lg mb-6">
              <BarChart3 className="h-6 w-6 text-neutral-900" />
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Advanced Analytics & Insights
            </h3>
            <p className="text-neutral-500 mb-6 text-lg">
              Make data-driven decisions with comprehensive reporting and
              visualization tools. Track trends, identify opportunities, and
              optimize your inventory strategy.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center text-neutral-500">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Interactive dashboards
              </li>
              <li className="flex items-center text-neutral-500">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Trend analysis & forecasting
              </li>
              <li className="flex items-center text-neutral-500">
                <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                Custom reporting tools
              </li>
            </ul>
          </div>
          <div className="lg:order-1 bg-gradient-to-br from-neutral-100 to-neutral-300 rounded-2xl p-8">
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-neutral-600">
                  Inventory Health Score
                </span>
                <span className="text-2xl font-bold text-green-600">94%</span>
              </div>
              <div className="w-full bg-neutral-200 rounded-full h-2 mb-4">
                <div
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: "94%" }}
                ></div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-lg font-bold text-neutral-900">
                    $847K
                  </div>
                  <div className="text-xs text-neutral-600">Total Value</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-neutral-900">
                    1,247
                  </div>
                  <div className="text-xs text-neutral-600">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
