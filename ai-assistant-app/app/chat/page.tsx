import dynamic from 'next/dynamic'

const ChatComponent = dynamic(() => import('./chat'), { ssr: false })

export default function ChatPage() {
  return <ChatComponent />
}