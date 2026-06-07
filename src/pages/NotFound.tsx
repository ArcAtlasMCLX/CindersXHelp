import { Link } from "react-router-dom";
import { Compass } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";

const NotFound = () => (
  <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-4 text-center text-foreground">
    <Compass className="h-10 w-10 text-primary" />
    <h1 className="text-2xl font-bold">Guide not found</h1>
    <p className="max-w-sm text-muted-foreground">
      That guide doesn't exist yet, or the link has changed. Head back to the Help Centre to find what you need.
    </p>
    <Link to="/" className={buttonClasses("default", "default")}>
      Back to all guides
    </Link>
  </div>
);

export default NotFound;
