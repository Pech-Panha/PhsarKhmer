import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  BookOpen,
  Code,
  Target,
  Sparkles,
  Handshake,
  Compass,
  Rocket,
} from "lucide-react";
import Image from "next/image";

export function AboutPage() {
  const projectInfo = [
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Academic Excellence",
      description:
        "Demonstrates advanced ReactJS concepts and modern web development practices from our UX/UI program.",
    },
    {
      icon: <Handshake className="w-6 h-6" />,
      title: "Team Collaboration",
      description:
        "Built through a collaborative effort, showcasing teamwork and project management skills.",
    },
    {
      icon: <Compass className="w-6 h-6" />,
      title: "Real-world Application",
      description:
        "A functional e-commerce platform that applies theoretical knowledge to a practical, real-world scenario.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Modern Technologies",
      description:
        "Utilizes cutting-edge web technologies like ReactJS, Tailwind CSS, and responsive design.",
    },
  ];

  const groupMembers = [
    {
      name: "Pech Panha",
      role: "Team Leader & Frontend Developer",
      image: "/Panha.png",
      description:
        "Responsible for project coordination and main component development.",
    },
    {
      name: "Heng Sokly",
      role: "Frontend Developer",
      image: "/Sokly.png",
      description: "Focused on product and its detail.",
    },
    {
      name: "Chorn Seavmey",
      role: "Frontend Developer",
      image: "/Mey.png",
      description: "Specialized in development Services page.",
    },
    {
      name: "Kheng Sokban",
      role: "Frontend Developer",
      image: "/Ban.png",
      description: "Handled About page.",
    },
    {
      name: "Seng Bonkim",
      role: "Frontend Developer",
      image: "/Kim.png",
      description: "Logo designer, Create login and Sign out.",
    },
  ];

  const technologies = [
    "ReactJS",
    "JavaScript (JSX)",
    "Tailwind CSS",
    "Shadcn/UI",
    "Lucide React Icons",
    "Responsive Design",
  ];

  return (
    <div className="space-y-20">
      {/* Hero & Introduction Section */}
      <section className="relative bg-gradient-to-br from-lime-50 to-green-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <Badge
            variant="secondary"
            className="bg-white/50 text-green-700 backdrop-blur-sm shadow-sm py-1.5 px-4 text-sm"
          >
            Academic Final Project
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-lime-600">
              PhsarKhmer
            </span>{" "}
            E-commerce Platform
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A comprehensive final assignment project showcasing the modern web
            development skills of ASB2_UX/UI students at Tux Global Institute.
            This platform demonstrates the practical application of ReactJS,
            creating a real-world e-commerce experience.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white shadow-lg transition-transform transform hover:scale-105"
            >
              Explore Project
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-green-200 text-green-700 hover:bg-green-100 transition-colors"
            >
              View Technologies
            </Button>
          </div>
        </div>
      </section>

      {/* Project Vision & Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Vision & Highlights
          </h2>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            We aimed to build an innovative platform that not only demonstrates
            technical proficiency but also celebrates Cambodian culture.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projectInfo.map((info, index) => (
            <Card
              key={index}
              className="text-center bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                  {info.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {info.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Course & Institute Information */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">
            Academic Context
          </h2>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 lg:gap-24">
            <div className="space-y-4 max-w-md">
              <Image
                src="/Tux.png"
                alt="Tux Global Institute Logo"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3 className="text-2xl font-bold text-gray-800">
                Tux Global Institute
              </h3>
              <p className="text-gray-600 text-sm">
                Excellence in Technology Education
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <BookOpen className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-semibold">Class:</span> ASB2_UX/UI
                </div>
                <div className="flex items-center text-gray-700">
                  <Target className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-semibold">Term & Shift:</span> Term 2 -
                  Afternoon
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center text-gray-700">
                  <Code className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-semibold">Subject:</span> ReactJS
                </div>
                <div className="flex items-center text-gray-700">
                  <Users className="w-5 h-5 text-green-500 mr-2" />
                  <span className="font-semibold">Lecturer:</span> Ngin Kimlong
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            The dedicated group of developers who poured their passion and
            skills into this project.
          </p>
        </div>

        {/* Lecturer card */}
        <div className="flex justify-center mb-12">
          <Card className="text-center shadow-lg w-full max-w-sm bg-white border-2 border-green-200">
            <CardContent className="p-6">
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src="/Kru.png"
                  alt="Lecturer Ngin Kimlong"
                  fill
                  className="rounded-full object-cover border-4 border-white shadow-md"
                />
              </div>
              <h3 className="font-bold text-xl text-gray-800">Ngin Kimlong</h3>
              <p className="text-sm font-semibold text-green-600">Lecturer</p>
              <p className="text-xs text-gray-500 mt-2">
                Guidance and support for the project.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Group members grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {groupMembers.map((member, index) => (
            <Card
              key={index}
              className="text-center bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover border-2 border-gray-200"
                  />
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {member.name}
                </h3>
                <p className="text-green-600 font-medium text-sm">
                  {member.role}
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Technologies Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Core Technologies
            </h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Our project is built on a robust foundation of modern web
              development tools and frameworks.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                className="text-sm md:text-md py-2 px-5 bg-white text-gray-800 font-semibold rounded-full shadow-sm hover:bg-gray-200 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
