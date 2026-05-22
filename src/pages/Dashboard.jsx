import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Bar, BarChart, CartesianGrid, XAxis, Label,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart, } from "recharts"
import { Card, CardContent, CardFooter, CardHeader, CardDescription, CardTitle } from '@/components/ui/card'
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart"
import { BiohazardIcon, Code, Globe, LayoutDashboard, OptionIcon, PlusIcon, VideoIcon, TrendingUp, PauseIcon, Square } from "lucide-react"
import { InputGroup, InputGroupAddon, InputGroupInput } from '@/components/ui/input-group'
import { ArrowUpRightIcon, Bell, ChevronUp, MessageCircle, Plus, Search } from 'lucide-react'


function Dashboard() {   

  const totalVisitors = 70;

  return (
    <section className='p-2'>
      <div className="header_bar mb-2 rounded-lg bg-sidebar p-2 flex items-center justify-between gap-2 flex-col-reverse md:flex-row">
        <div className="search_bar ">
          <InputGroup className="border-[#C32148]">
            <InputGroupInput  placeholder="search..." />
            <InputGroupAddon>
              <Search color='#C32148' />
            </InputGroupAddon>
            <InputGroupAddon align='inline-end' >12 results</InputGroupAddon>
          </InputGroup>
        </div>
        <div className="icons_container flex gap-2">
          <button className='p-2 cursor-pointer bg-white border border-[#C32148] rounded-full flex items-center justify-center'>
            <MessageCircle size="20" />
          </button>
          <button className='p-2 cursor-pointer bg-white border border-[#C32148] rounded-full flex items-center justify-center'>
            <Bell size="20"/>
          </button>
          <Avatar className="block">
            <AvatarImage src="https://images.pexels.com/photos/37593671/pexels-photo-37593671.jpeg" />
          </Avatar>
          <div className="content leading-normal">
            <h2 className='text-sm font-bold'>User Name</h2>
            <span className='text-xs block -mt-1'>username@email.com</span>
          </div>
        </div>
      </div>

      <div className="dashboard_items rounded-lg bg-sidebar p-3">
        <div className="upper_stripe flex items-center justify-between">
          <div className="content">
            <h2 className='text-5xl font-bold'>Dashboard</h2>
            <p className='text-base'>Plan, prioritizem, and accomplish your tasks with ease.</p>
          </div>
          <div className="actions_container flex flex-column md:flex-row gap-3">
            <Button className="rounded-full cursor-pointer p-7 bg-linear-to-b from-[#C32148] to-[#eb476d]">
              <Plus color='#ffffff' size="30"/>
              <span className='text-md'>Add Project</span>
            </Button>
            <Button variant='outline' className="rounded-full cursor-pointer bg-transparent p-7">
              Import Data
            </Button>
          </div>
        </div>

        <div className="cards_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
          {
            projects.map((project, index) => (
              <Card key={index} className={index === 0 ? 'bg-[#C3214833]' : 'hover:bg-[#C3214833]'}>
                <CardHeader className="flex items-center justify-between">
                  <h2 className='text-lg'>{project.title}</h2>
                  <button className='p-2 cursor-pointer bg-white border border-[#C32148] rounded-full flex items-center justify-center'>
                    <ArrowUpRightIcon size="20" />
                  </button>
                </CardHeader>
                <CardContent>
                  <h3 className='text-6xl font-bold'>{project.count}</h3>
                </CardContent>
                <CardFooter className="bg-none">
                  <Badge variant={index === 0 ? 'default' : 'outline'} className={index === 0 ? 'bg-white text-black mr-1' : 'bg-transparent mr-1'}>
                    {project.progress}
                    <ChevronUp size="25" />
                  </Badge>
                  <p className='text-base'>{project.message}</p>
                </CardFooter>
              </Card>
            ))
          }
        </div>

        {/* grid grid-cols-1 md:grid-cols-8 gap-3 mt-3 grid-flow-row-dense */}
        <div className="flex gap-3 mt-3">
          <div className="flex-1 grid gap-3 grid-cols-1 md:grid-cols-5">
            <div className=" graph_container col-span-3">
              <Card className='h-full'>
                <CardHeader>
                  <CardTitle>Project Analytics</CardTitle>
                  <CardDescription>January - June 2024</CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[130px] w-full m-auto">
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <Bar dataKey="desktop" fill="#C32148" radius={12} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <div className=" reminder_collection col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Reminders</CardTitle>
                </CardHeader>
                <CardContent>
                  <h2 className='text-bold text-2xl'>Metting with Arc Company</h2>
                  <p className='text-base text-body'> Time: 02.00 pm - 04.00 pm </p>
                </CardContent>
                <CardFooter>
                  <Button className="rounded-full text-lg w-full cursor-pointer p-7 bg-linear-to-b from-[#C32148] to-[#eb476d]">
                    <VideoIcon size="40" className='mr-1' />
                    Start Meeting
                  </Button>
                </CardFooter>
              </Card>
            </div>


            <div className=" single_project col-span-2">
              <Card className="flex flex-col h-full">
                <CardHeader className="items-center pb-0">
                  <CardTitle>Projects</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-1 items-center pb-0">
                  <ChartContainer
                    config={chartConfigRadial}
                    className="aspect-video mx-auto w-full"
                  >
                    <RadialBarChart
                      data={chartDataRadial}
                      endAngle={180}
                      innerRadius={120}
                      outerRadius={160}
                    >
                      <RadialBar
                        dataKey="pending"
                        fill={chartConfigRadial.pending.color}
                        stackId="a"
                        cornerRadius={10}
                        className="stroke-transparent stroke-4"
                      />
                      <RadialBar
                        dataKey="progress"
                        fill={chartConfigRadial.progress.color}
                        stackId="a"
                        cornerRadius={10}
                        className="stroke-transparent stroke-4"
                      />
                      <RadialBar
                        dataKey="completed"
                        fill={chartConfigRadial.completed.color}
                        stackId="a"
                        cornerRadius={10}
                        className="stroke-transparent stroke-4"
                      />
                      <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                      />
                      <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                        <Label
                          content={({ viewBox }) => {
                            if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                              return (
                                <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                                  <tspan
                                    x={viewBox.cx}
                                    y={(viewBox.cy || 0) - 20}
                                    className="fill-foreground text-7xl font-bold"
                                  >
                                    {totalVisitors.toLocaleString()}
                                  </tspan>
                                  <tspan
                                    x={viewBox.cx}
                                    y={(viewBox.cy || 0) + 4}
                                    className="fill-muted-foreground text-xl"
                                  >
                                    Projects
                                  </tspan>
                                </text>
                              )
                            }
                          }}
                        />
                      </PolarRadiusAxis>
                    </RadialBarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>

            <div className=" membership_container col-span-3">
              <Card className="h-full">
                <CardHeader className='flex items-center justify-between'>
                  <CardTitle>
                    Team Collaboration
                  </CardTitle>
                  <Button variant='outline' className="rounded-full cursor-pointer bg-transparent p-4">
                    <PlusIcon className='mr-1' />
                    Import Data
                  </Button>
                </CardHeader>
                <CardContent>
                  {
                    employees.map((employee, index) => (
                      <div key={index} className="stack flex gap-2 mb-1 items-center justify-between">
                        <Avatar key={index} className="w-12 block">
                          <AvatarImage src={employee.icon} /> 
                        </Avatar>
                        <div className="content flex-1 pl-2">
                          <p className='text-md font-semibold'>{employee.name}</p>
                          <span className='text-xs'>Working on: {employee.project}</span>
                        </div>
                        <div className={`py-1 px-2 rounded-full`}
                          style={{
                            backgroundColor: colors[employee.status] + 33,
                            color: colors[employee.status],
                            border: `1px solid ${colors[employee.status]}`
                          }}
                        >
                          {employee.status}
                        </div>
                      </div>
                    ))
                  }
                </CardContent>
              </Card>
            </div>
            

          </div>

          <div className="flex flex-col gap-3">
            <div className=" projects_container col-span-3 row-start-1 row-end-2">
              <Card>
                <CardHeader className='flex items-center justify-between'>
                  <CardTitle>
                    Project
                  </CardTitle>
                  <Button variant='outline' className="rounded-full cursor-pointer bg-transparent p-4">
                    <PlusIcon className='mr-1' />
                    New
                  </Button>
                </CardHeader>
                <CardContent>
                  {
                    currentProjects.map((project, index) => (
                      <div key={index} className="stack flex gap-2 mb-2 items-center justify-between bg-sidebar px-2 py-1 rounded-sm">
                        {project.icon}
                        <div className="content flex-1 pl-2">
                          <p className='text-md font-semibold'>{project.title}</p>
                          <span className='text-xs'>{project.date}</span>
                        </div>
                      </div>
                    ))
                  }
                </CardContent>
              </Card>
            </div>

            <div className=" time_tracker col-span-3 row-start-2 row-end-2">
              <div className='w-full relative h-auto bg-[url(https://images.pexels.com/photos/4814047/pexels-photo-4814047.jpeg)] bg-center bg-cover py-2 px-2 rounded-xl overflow-hidden'>
                <div className="background_wrapper absolute w-full h-full top-0 left-0 bg-[#00000044] z-1"></div>
                <div className="relative z-2">
                  <h2 className='text-2xl text-white'>Time Tracker</h2>
                  <h2 className='text-5xl text-white text-center mt-4 font-bold'>01:24:08</h2>
                  <div className='mt-8 flex items-center justify-center gap-2'>
                    <Button variant='default' className="w-12 h-12 flex items-center justify-center cursor-pointer rounded-full text-[#C32148] bg-white font-bold">
                      <PauseIcon color='#C32148' />
                    </Button>
                    <Button variant='default' className="w-12 h-12 p-3 flex items-center justify-center cursor-pointer rounded-full bg-[#C32148] text-white font-bold">
                      <Square color='#fff' />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Dashboard


const employees = [
  {
    name: "Alexendra Deff",
    project: "Github Project Repository",
    status: "Completed",
    icon: "https://images.pexels.com/photos/11791525/pexels-photo-11791525.jpeg"
  },
  {
    name: "Advin Adenike",
    project: "Anthropic Repository",
    status: "In-Progress",
    icon: "https://images.pexels.com/photos/34200843/pexels-photo-34200843.jpeg"
  },
  {
    name: "Isaac Olving",
    project: "Optimum Circular Twin",
    status: "Pending",
    icon: "https://images.pexels.com/photos/29901417/pexels-photo-29901417.jpeg"
  },
  {
    name: "Maaria Chrone",
    project: "Quantum Subject Itanim",
    status: "In-Progress",
    icon: "https://images.pexels.com/photos/18271863/pexels-photo-18271863.jpeg"
  },
]

const currentProjects = [
  {
    title: "Develop API Endpoints",
    date: "Due date: Nov 26, 2024",
    icon: <Code />
  },
  {
    title: "Onboarding Flow",
    date: "Due date: Aug 18, 2025",
    icon: <BiohazardIcon />
  },
  {
    title: "Build Dashboard",
    date: "Due date: Jan 22, 2026",
    icon: <LayoutDashboard />
  },
  {
    title: "Optimize Page Load",
    date: "Due date: Feb 24, 2026",
    icon: <OptionIcon />
  },
  {
    title: "Cross-Browser Testing",
    date: "Due date: Feb 24, 2024",
    icon: <Globe />
  },
]

const colors = {
  "In-Progress": "#3B82F6",
  "Completed": "#10B981",
  "Pending": "#F59E0B"
}

const projects = [
  {
    title: "Total Projects",
    count: 70,
    message: "Increased from last month",
    progress: 5
  },
  {
    title: "Ended Projects",
    count: 40,
    message: "Increased from last month",
    progress: 6
  },
  {
    title: "Running Projects",
    count: 20,
    message: "Increased from last month",
    progress: 2
  },
  {
    title: "Pending Projects",
    count: 10,
    message: "On Discuss",
    progress: 0
  },
]


const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
]
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
}


const chartDataRadial = [
  {
    month: "january", 
    completed: 40, 
    progress: 20,
    pending: 10,
  }
]
const chartConfigRadial = {
  completed: {
    label: "completed",
    color: "#10B981",
  },
  progress: {
    label: "progress",
    color: "#3B82F6",
  },
  pending: {
    label: "pending",
    color: "#F59E0B",
  },
}
