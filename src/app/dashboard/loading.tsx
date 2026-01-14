import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
    return (
        <div className="flex flex-1 flex-col p-4 md:p-8 space-y-8">
            <div className="flex items-center justify-between">
                <Skeleton className="h-8 w-[200px]" />
                <Skeleton className="h-10 w-[100px]" />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} className="h-[120px] w-full rounded-xl" />
                ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Skeleton className="col-span-4 h-[400px] w-full rounded-xl" />
                <Skeleton className="col-span-3 h-[400px] w-full rounded-xl" />
            </div>
        </div>
    )
}
