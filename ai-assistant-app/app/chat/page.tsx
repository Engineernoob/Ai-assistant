import dynamic from 'next/dynamic'

const ChatComponent = dynamic(() => import('./Chat'), { ssr: false })

export default function ChatPage() {
  return <ChatComponent />
}