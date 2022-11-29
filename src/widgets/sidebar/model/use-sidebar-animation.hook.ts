import { useSpring } from '@react-spring/web'

const duration = 200

export function useSidebarAnimation(isSidebarOpen: boolean) {
  const background = useSpring({
    from: { backgroundColor: 'rgba(242, 243, 244, 0)' },
    to: { backgroundColor: 'rgba(242, 243, 244, 0.9)' },
    reset: true,
    reverse: !isSidebarOpen,
    config: { duration },
  })
  const sidebar = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    reset: true,
    reverse: !isSidebarOpen,
    config: { duration },
  })

  return { animation: { background, sidebar } }
}
