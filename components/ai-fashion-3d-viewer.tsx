"use client"

import { Suspense, useRef, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, useGLTF, Environment, ContactShadows } from "@react-three/drei"
import { Mesh, Group } from "three"
import { Loader2 } from "lucide-react"

/**
 * AI Fashion 3D Viewer Component
 * Hiển thị mô hình 3D GLB với đầy đủ tương tác: rotate, zoom, pan, click
 */

interface ModelProps {
  url: string
  onModelClick?: () => void
}

/**
 * Model Component - Load và hiển thị GLB model
 */
function Model({ url, onModelClick }: ModelProps) {
  const { scene } = useGLTF(url)
  const modelRef = useRef<Group>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  // Auto-rotate animation (nhẹ nhàng và mượt mà)
  useFrame((state, delta) => {
    if (modelRef.current && !hovered && !clicked) {
      // Sử dụng lerp để animation mượt hơn
      const targetRotation = modelRef.current.rotation.y + delta * 0.2
      modelRef.current.rotation.y += (targetRotation - modelRef.current.rotation.y) * 0.1
    }
  })

  // Handle click on model
  const handleClick = (event: any) => {
    event.stopPropagation()
    setClicked(!clicked)
    if (onModelClick) {
      onModelClick()
    }
  }

  return (
    <group
      ref={modelRef}
      onClick={handleClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={hovered ? 1.05 : 1}
    >
      <primitive
        object={scene}
        scale={1}
        position={[0, 0, 0]}
      />
    </group>
  )
}

/**
 * Loading Spinner Component
 */
function LoadingSpinner() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin" />
        <p className="text-lg font-medium text-gray-700">Đang tải mô hình 3D...</p>
      </div>
    </div>
  )
}

/**
 * Error Component
 */
function ErrorDisplay({ message }: { message: string }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="text-center p-8">
        <p className="text-lg font-medium text-red-600 mb-2">Không thể tải mô hình</p>
        <p className="text-sm text-gray-600">{message}</p>
      </div>
    </div>
  )
}

interface AIFashion3DViewerProps {
  modelUrl?: string
  className?: string
  onModelClick?: () => void
}

/**
 * Main 3D Viewer Component
 */
export default function AIFashion3DViewer({
  modelUrl = "/AI FASHION/Dior 3D 1.glb",
  className = "",
  onModelClick,
}: AIFashion3DViewerProps) {
  const [error, setError] = useState<string | null>(null)

  return (
    <div className={`relative w-full h-[600px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl ${className}`}>
      {error ? (
        <ErrorDisplay message={error} />
      ) : (
        <Suspense fallback={<LoadingSpinner />}>
          <Canvas
            gl={{ 
              antialias: true, 
              alpha: true,
              powerPreference: "high-performance",
              stencil: false,
              depth: true,
            }}
            dpr={typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1} // Giới hạn DPR để tránh giật
            frameloop="always"
            performance={{ min: 0.5 }} // Giảm quality khi FPS thấp
            onCreated={({ gl }) => {
              gl.setClearColor("#ffffff", 0) // Transparent background
              // Tối ưu renderer
              gl.shadowMap.enabled = true
              gl.shadowMap.type = 1 // PCFSoftShadowMap
            }}
          >
            {/* Camera */}
            <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={50} />

            {/* Lighting */}
            <ambientLight intensity={0.6} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <directionalLight position={[-10, -10, -5]} intensity={0.5} />
            <pointLight position={[0, 10, 0]} intensity={0.8} />

            {/* Environment for better lighting - Tối ưu performance */}
            <Environment 
              preset="studio" 
              resolution={256} // Giảm resolution để tăng performance
            />

            {/* Model */}
            <Model url={modelUrl} onModelClick={onModelClick} />

            {/* Contact shadows for realism - Tối ưu performance */}
            <ContactShadows
              position={[0, -1.5, 0]}
              opacity={0.4}
              scale={10}
              blur={1.5} // Giảm blur để tăng performance
              far={4}
              resolution={256} // Giảm resolution
            />

            {/* Controls - Full interaction với damping để mượt mà */}
            <OrbitControls
              enablePan={true} // Pan: Giữ phím và kéo
              enableZoom={true} // Zoom: Scroll
              enableRotate={true} // Rotate: Kéo chuột
              minDistance={2}
              maxDistance={10}
              minPolarAngle={0}
              maxPolarAngle={Math.PI / 2}
              autoRotate={false}
              autoRotateSpeed={0.5}
              // Damping để tương tác mượt mà hơn
              dampingFactor={0.05} // Giảm damping để responsive hơn
              enableDamping={true} // Bật damping
              // Tối ưu touch controls
              touches={{
                ONE: 2, // Rotate
                TWO: 1, // Zoom
              }}
            />
          </Canvas>
        </Suspense>
      )}

      {/* Interaction Instructions */}
      <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <span className="font-semibold">🖱️ Kéo:</span>
            <span>Xoay mô hình</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">🔍 Scroll:</span>
            <span>Phóng to/Thu nhỏ</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">⌨️ Giữ + Kéo:</span>
            <span>Di chuyển</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-semibold">👆 Click:</span>
            <span>Xem chi tiết</span>
          </div>
        </div>
      </div>
    </div>
  )
}


