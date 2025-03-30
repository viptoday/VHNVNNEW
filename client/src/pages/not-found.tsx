export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#0F1F3F] mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">页面不存在</p>
        <a
          href="/"
          className="inline-block px-6 py-3 bg-[#0F1F3F] text-white rounded-md hover:bg-[#1A2F4F] transition-colors"
        >
          返回首页
        </a>
      </div>
    </div>
  );
}
