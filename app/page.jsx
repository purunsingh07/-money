import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return <div className="flex flex-col pt-16">
  <section className="mt-20 pb-12 space-y-10 md:space-y-20 px-5">
    <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
      <Badge variant="outline" className="bg-green-100 text-green-700">
        Split expenses. Simplify life.
      </Badge>
      <h1 className="gradient-title mx-auto max-w-4xl text-4xl font-bold md:text-7xl">
        The smartest way to split expenses with friends and family
      </h1>
    </div>
  </section>
  </div>
}
