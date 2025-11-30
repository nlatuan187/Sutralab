"use client"

import dynamic from "next/dynamic"

/**
 * Client Component Wrapper for 3D Viewer
 * Required because dynamic import with ssr: false needs to be in a client component
 */
const AIFashion3DViewer = dynamic(
  () => import("@/components/ai-fashion-3d-viewer"),
  {
    loading: () => (
      <div className="w-full h-[600px] lg:h-[700px] rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-lg font-medium text-gray-700">Đang tải mô hình 3D...</p>
        </div>
      </div>
    ),
    ssr: false, // Disable SSR for 3D component (requires browser APIs)
  }
)

export default AIFashion3DViewer

