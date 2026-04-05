export default function Services() {
  return (
    <section className="bg-black py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900">
            <h3 className="font-bold text-xl mb-4 text-yellow-500">
              Structured Leasing
            </h3>
            <p className="text-gray-400">
              We lease your property directly, ensuring stable monthly returns.
            </p>
          </div>

          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900">
            <h3 className="font-bold text-xl mb-4 text-yellow-500">
              Corporate Occupancy
            </h3>
            <p className="text-gray-400">
              Verified corporate clients for reliable and secure occupancy.
            </p>
          </div>

          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900">
            <h3 className="font-bold text-xl mb-4 text-yellow-500">
              Property Management
            </h3>
            <p className="text-gray-400">
              Cleaning, maintenance, and inspections handled professionally.
            </p>
          </div>

          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900">
            <h3 className="font-bold text-xl mb-4 text-yellow-500">
              End-to-End Operations
            </h3>
            <p className="text-gray-400">
              From onboarding to daily management — everything is taken care of.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}