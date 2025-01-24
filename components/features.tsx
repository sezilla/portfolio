import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Brush, Code, Layout } from "lucide-react"

const features = [
  {
    title: "Customizable Templates",
    description: "Choose from a variety of professional templates and customize them to fit your style.",
    icon: Brush,
  },
  {
    title: "Code-Free Design",
    description: "No coding skills required. Our intuitive drag-and-drop interface makes portfolio creation a breeze.",
    icon: Code,
  },
  {
    title: "Responsive Layouts",
    description: "Your portfolio will look great on any device, from desktops to smartphones.",
    icon: Layout,
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 px-6 bg-background">
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose PortfolioMaker?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-secondary/30">
              <CardHeader>
                <feature.icon className="w-10 h-10 text-primary mb-4" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

