import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, BookOpen, Code, Target } from "lucide-react"

export function AboutPage() {
  const projectInfo = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Academic Excellence",
      description:
        "This project demonstrates advanced ReactJS concepts and modern web development practices learned in our UX/UI program.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description:
        "Built through collaborative effort, showcasing teamwork and project management skills essential in professional development.",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Technologies",
      description:
        "Utilizing cutting-edge web technologies including ReactJS, Tailwind CSS, and responsive design principles.",
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Real-world Application",
      description:
        "Creating a functional e-commerce platform that demonstrates practical application of theoretical knowledge.",
    },
  ]

  const groupMembers = [
    {
      name: "Member 1",
      role: "Team Leader & Frontend Developer",
      image: "/placeholder.svg?key=member1",
      description: "Responsible for project coordination and main component development.",
    },
    {
      name: "Member 2",
      role: "UI/UX Designer",
      image: "/placeholder.svg?key=member2",
      description: "Focused on user interface design and user experience optimization.",
    },
    {
      name: "Member 3",
      role: "Frontend Developer",
      image: "/placeholder.svg?key=member3",
      description: "Specialized in component development and state management.",
    },
    {
      name: "Member 4",
      role: "Frontend Developer",
      image: "/placeholder.svg?key=member4",
      description: "Handled routing, navigation, and responsive design implementation.",
    },
    {
      name: "Member 5",
      role: "Quality Assurance & Testing",
      image: "/placeholder.svg?key=member5",
      description: "Ensured code quality, testing, and project documentation.",
    },
  ]

  const technologies = [
    "ReactJS",
    "JavaScript (JSX)",
    "Tailwind CSS",
    "Lucide React Icons",
    "Responsive Design",
    "Component Architecture",
  ]

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 to-accent/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">Academic Project</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground text-balance">
                PhsarKhmer <span className="text-primary">E-commerce</span> Platform
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                A comprehensive ReactJS final assignment project developed by ASB2_UX/UI students at Tux Global
                Institute. This e-commerce platform showcases modern web development skills and demonstrates practical
                application of ReactJS concepts in building real-world applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Explore Features</Button>
                <Button variant="outline" size="lg">
                  View Technologies
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-lg shadow-2xl p-8 text-center">
                <img
                  src="/placeholder.svg?height=200&width=300&text=Tux+Global+Institute+Logo"
                  alt="Tux Global Institute Logo"
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Tux Global Institute</h3>
                <p className="text-gray-600">Excellence in Technology Education</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Information */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-6">Project Objective</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            To develop a fully functional e-commerce website using ReactJS that demonstrates mastery of modern web
            development concepts, component architecture, state management, and responsive design principles while
            creating an authentic Cambodian marketplace experience.
          </p>
        </div>
      </section>

      {/* Course Information */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Course Information</h2>
            <p className="text-muted-foreground text-lg">Academic details and project context</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Class</h3>
                <p className="text-muted-foreground text-sm">ASB2_UX/UI</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Term & Shift</h3>
                <p className="text-muted-foreground text-sm">Term 2 - Afternoon</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Subject</h3>
                <p className="text-muted-foreground text-sm">ReactJS</p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Lecturer</h3>
                <p className="text-muted-foreground text-sm">[Lecturer Name]</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Project Highlights</h2>
          <p className="text-muted-foreground text-lg">Key aspects demonstrated in this project</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectInfo.map((info, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4 text-primary-foreground">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground text-sm">{info.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies Used */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Technologies Used</h2>
            <p className="text-muted-foreground text-lg">Modern web development stack</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="text-lg py-2 px-4">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Group Members */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Group Members</h2>
          <p className="text-muted-foreground text-lg">The dedicated team behind this project</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {groupMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3 text-sm">{member.role}</p>
                <p className="text-muted-foreground text-xs">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Project Vision */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-4">Project Vision</h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            To create an innovative e-commerce platform that not only demonstrates technical proficiency in ReactJS but
            also celebrates Cambodian culture and provides a foundation for future web development endeavors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Explore Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              View Source Code
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
