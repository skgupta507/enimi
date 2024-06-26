// react imports
import React from "react";

// shadcn components imports...
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

// lucide icons imports
import { Search } from "lucide-react";

// utility functions imports...
import { cn } from "@/lib/utils";

const SearchModal = () => {
  const [query, setQuery] = React.useState<string>("");

  // SENDING TO SEARCH ROUTE WITH THE QUERY
  const handleSearch = () => {
    const constructedURI = query.split(" ").join("-");
    window.location.assign(`/search?a=${constructedURI}`);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger
          className={cn(buttonVariants({ variant: "outline", size: "icon" }))}
        >
          <Search className="h-5 w-5" />
        </DialogTrigger>
        <DialogContent className="border-muted">
          <DialogHeader>
            <DialogTitle>Search Anime</DialogTitle>
            <DialogDescription>
              Search your favorite anime by there title.
            </DialogDescription>
          </DialogHeader>
          <div className="">
            <Input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Anime..."
            />
          </div>
          <DialogFooter className="w-full">
            <Button
              onClick={handleSearch}
              disabled={query.length < 4}
              variant="secondary"
              className="w-full font-logo tracking-wide text-lg"
            >
              Search <Search className="ml-2" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default SearchModal;
