export default function Services() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        <h2 className="text-4xl font-bold mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          
          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-4 text-gold">
              Structured Leasing
            </h3>
            <p className="text-gray-600">
              We lease your property directly, ensuring stable monthly returns.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-4 text-gold">
              Corporate Occupancy
            </h3>
            <p className="text-gray-600">
              Verified corporate clients for reliable and secure occupancy.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-4 text-gold">
              Property Management
            </h3>
            <p className="text-gray-600">
              Cleaning, maintenance, and inspections handled professionally.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl mb-4 text-gold">
              End-to-End Operations
            </h3>
            <p className="text-gray-600">
              From onboarding to daily management — everything is taken care of.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}