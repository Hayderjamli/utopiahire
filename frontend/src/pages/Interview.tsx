import React, { useEffect, useRef, useState } from 'react'
import { useServices } from '../ServiceContext'

export default function Interview() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const streamRef = useRef<MediaStream | null>(null)
  const [camOn, setCamOn] = useState(true)
  const [micOn, setMicOn] = useState(true)
  const [useTyping, setUseTyping] = useState(false)
  const [testText, setTestText] = useState('')
  const { interviewConfig } = useServices()

  useEffect(() => {
    const start = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        streamRef.current = stream
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          await videoRef.current.play()
        }
      } catch (err) {
        console.warn('Media error', err)
      }
    }
    start()
    return () => {
      streamRef.current?.getTracks()?.forEach(t => t.stop())
    }
  }, [])

  const toggleCam = () => {
    const track = streamRef.current?.getVideoTracks?.()[0]
    if (track) {
      track.enabled = !track.enabled
      setCamOn(track.enabled)
    }
  }

  const toggleMic = () => {
    const track = streamRef.current?.getAudioTracks?.()[0]
    if (track) {
      track.enabled = !track.enabled
      setMicOn(track.enabled)
    }
  }

  const startInterview = () => {
    alert('Starting interview (demo). In production, connect to your real-time backend/AI here.')
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold text-gray-900">Interview Session</h1>
      <p className="text-gray-600 mt-1">{interviewConfig.jobTitle} — {interviewConfig.seniority} @ {interviewConfig.company}</p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-white rounded-2xl p-4 border border-gray-200">
          <div className="aspect-video bg-black/5 rounded-lg overflow-hidden">
            <video ref={videoRef} className="w-full h-full object-cover" muted playsInline></video>
          </div>
          <div className="flex gap-3 mt-4">
            <button onClick={toggleMic} className={`px-4 py-2 rounded-lg border ${micOn ? 'border-gray-300' : 'border-red-300 text-red-600'} bg-white`}>{micOn ? 'Mute mic' : 'Unmute mic'}</button>
            <button onClick={toggleCam} className={`px-4 py-2 rounded-lg border ${camOn ? 'border-gray-300' : 'border-red-300 text-red-600'} bg-white`}>{camOn ? 'Turn off camera' : 'Turn on camera'}</button>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-gray-900">Mic test / Typing</h2>
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" checked={useTyping} onChange={(e) => setUseTyping(e.target.checked)} />
              Type instead of speaking
            </label>
          </div>
          <div className="mt-3">
            {useTyping ? (
              <textarea
                className="w-full min-h-[160px] rounded-xl border-2 border-gray-200 p-3 focus:border-primary-500"
                placeholder="Type your answer for testing..."
                value={testText}
                onChange={(e) => setTestText(e.target.value)}
              />
            ) : (
              <div className="text-sm text-gray-600">Speak to your mic to test levels (visualizer omitted in demo).</div>
            )}
          </div>
          <button onClick={startInterview} className="mt-4 w-full py-3 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold shadow hover:shadow-lg">
            Start Interview
          </button>
        </div>
      </div>
    </div>
  )
}
