import { Skeleton } from '@/components/ui/skeleton';

export const SkeltonPostComponent = () => {
  return (
    <div className="flex items-start  border-b  border-border pb-3">
      <div className="p-4 mr-10">
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
      <div className="space-y-4 mt-4">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
};
