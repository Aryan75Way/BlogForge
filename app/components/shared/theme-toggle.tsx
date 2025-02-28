"use client";

import { LaptopMinimal, Moon, Sun } from "lucide-react"
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/ui/toggle-group"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
    <ToggleGroup type="single" size="sm" className="border rounded-full px-1">
      <ToggleGroupItem value="light" aria-label="Toggle light"  onClick={() => setTheme("light")}>
        <Sun className="h-2 w-2" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark"  onClick={() => setTheme("dark")}>
        <Moon className="h-2 w-2" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle system"  onClick={() => setTheme("system")}>
        <LaptopMinimal className="h-2 w-2" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
