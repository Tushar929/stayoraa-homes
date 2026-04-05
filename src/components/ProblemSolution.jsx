export default function ProblemSolution() {
  return (
    <section className="bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        
        {/* Problems */}
        <div className="bg-gray-900 p-8 rounded-lg border border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-red-400">
            The Reality of Traditional Renting
          </h2>

          <ul className="space-y-4 text-gray-400">
            <li>• Irregular income due to vacancies</li>
            <li>• Tenant-related uncertainties</li>
            <li>• Ongoing maintenance hassles</li>
            <li>• Time-consuming management</li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="bg-black p-8 rounded-lg border border-yellow-500">
          <h2 className="text-2xl font-bold mb-6 text-yellow-500">
            The Stayoraa Approach
          </h2>

          <ul className="space-y-4 text-gray-300">
            <li>• Fixed and predictable monthly income</li>
            <li>• No tenant interaction required</li>
            <li>• End-to-end professional management</li>
            <li>• Long-term leasing stability</li>
          </ul>
        </div>

      </div>
    </section>
  );
}