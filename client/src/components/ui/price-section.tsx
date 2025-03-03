export default function PriceSection() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-[#D2973F]">
            越南服務價格指南
          </h2>
          <p className="text-gray-600 text-lg">
            透明的價格，卓越的服務，讓您的越南之旅物超所值
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-lg overflow-hidden shadow-lg">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4 text-left uppercase text-sm tracking-wider">服務類型</th>
                <th className="p-4 text-left uppercase text-sm tracking-wider">服務細項</th>
                <th className="p-4 text-left uppercase text-sm tracking-wider">價格 (USD)</th>
                <th className="p-4 text-left uppercase text-sm tracking-wider">備註</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-4 border-b" rowSpan={4}>旅遊簽證</td>
                <td className="p-4 border-b">30天單次出入境</td>
                <td className="p-4 border-b">TBC</td>
                <td className="p-4 border-b">快速處理</td>
              </tr>
              {/* Add other pricing rows */}
            </tbody>
          </table>
        </div>

        <div className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-[#0F6E9A]">
          <p className="text-gray-600 text-sm mb-2">
            * 所有價格均為參考價格，實際價格可能因季節和具體要求而變動
          </p>
          <p className="text-gray-600 text-sm">
            * 部分服務需提前預約，建議提早聯繫我們的客服團隊
          </p>
        </div>
      </div>
    </section>
  );
}
