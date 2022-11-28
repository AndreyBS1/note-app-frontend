import { useSpring } from '@react-spring/web'

export function useSidebarAnimation(isSidebarOpen: boolean) {
  const background = useSpring({
    from: { backgroundColor: 'rgba(242, 243, 244, 0)' },
    to: { backgroundColor: 'rgba(242, 243, 244, 0.9)' },
    reverse: !isSidebarOpen,
    config: { duration: 200 },
  })
  const sidebar = useSpring({
    from: { transform: 'translateX(-100%)' },
    to: { transform: 'translateX(0%)' },
    reverse: !isSidebarOpen,
    config: { duration: 200 },
  })

  return { animation: { background, sidebar } }
}
