import { Button } from "@/components/ui/button"
import { LogoMark } from "@/components/logos/logo-mark"
import { HomeScreen } from "./home-screen"

export default function Home() {
  return (
    <div>
      <HomeScreen />
      <LogoMark />
      <Button>Click me</Button>
    </div>
  )
}
