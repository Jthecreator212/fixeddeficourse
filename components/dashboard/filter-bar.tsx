import { DateRangePicker } from '@/components/ui/date-range-picker'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { DateRange } from 'react-day-picker'
import { Search, Filter } from 'lucide-react'

interface FilterOptions {
  dateRange: DateRange | undefined
  courseStatus: 'all' | 'active' | 'completed'
  sortBy: 'recent' | 'progress' | 'difficulty'
  searchTerm: string
}

interface FilterBarProps {
  filters: FilterOptions
  onFiltersChange: (filters: FilterOptions) => void
}

export function FilterBar({ filters, onFiltersChange }: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="flex-1">
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search courses..."
            value={filters.searchTerm}
            onChange={(e) => onFiltersChange({ ...filters, searchTerm: e.target.value })}
            className="pl-8"
          />
        </div>
      </div>

      <div className="flex gap-2">
        <DateRangePicker
          dateRange={filters.dateRange}
          onDateRangeChange={(range) => onFiltersChange({ ...filters, dateRange: range })}
        />

        <Select
          value={filters.courseStatus}
          onValueChange={(value) => 
            onFiltersChange({ ...filters, courseStatus: value as FilterOptions['courseStatus'] })
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Course Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Courses</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        <Select
          value={filters.sortBy}
          onValueChange={(value) => 
            onFiltersChange({ ...filters, sortBy: value as FilterOptions['sortBy'] })
          }
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recent">Most Recent</SelectItem>
            <SelectItem value="progress">Progress</SelectItem>
            <SelectItem value="difficulty">Difficulty</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
} 