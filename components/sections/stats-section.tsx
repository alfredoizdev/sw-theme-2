'use client'

import { Card } from '@/components/ui/card'

export interface StatCard {
  id: string
  title: string
  value: string
}

interface StatsSectionProps {
  stats: StatCard[]
}

export function StatsSection({ stats }: StatsSectionProps) {
  return (
    <div className="w-full flex justify-center mb-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-2xl">
        {stats.map((stat) => {
          return (
            <Card
              key={stat.id}
              className="p-4 text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex flex-col items-center space-y-1">
                <p className="text-xs text-muted-foreground leading-tight">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold">
                  {stat.value}
                </p>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}