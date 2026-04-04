export default function Income() {
  return (
    <section className="bg-black text-white py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        
        <h2 className="text-4xl font-bold mb-12">
          Designed for Predictability
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="border border-gray-700 p-8 rounded-lg">
            <p className="text-gray-400">Monthly Income</p>
            <h3 className="text-3xl font-bold text-gold mt-2">
              ₹60,000
            </h3>
          </div>

          <div className="border border-gray-700 p-8 rounded-lg">
            <p className="text-gray-400">Annual Income</p>
            <h3 className="text-3xl font-bold text-gold mt-2">
              ₹7,20,000
            </h3>
          </div>

          <div className="border border-gray-700 p-8 rounded-lg">
            <p className="text-gray-400">3-Year Income</p>
            <h3 className="text-3xl font-bold text-gold mt-2">
              ₹21,60,000
            </h3>
          </div>

        </div>

        <p className="text-gray-400 mt-10">
          Stable returns. No vacancy loss. No uncertainty.
        </p>

      </div>
    </section>
  );
}