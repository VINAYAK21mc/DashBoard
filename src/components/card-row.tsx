import { DialogTrigger } from "@radix-ui/react-dialog";
import { BellRing, Check, Edit2Icon } from "lucide-react";
import PerformanceChart from "./chart";
import LeadsBarChart from "./lead-bar-chart";
import SalesLineChart from "./saleline-chart";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./ui/card";

export default function CardRow() {
  return (
    <>
    <Card className="col-span-4 md:col-span-2 lg:col-span-1 flex flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">Your sales <IconTrigger/></CardTitle>
        <CardDescription>You have 3 recent orders.</CardDescription>
      </CardHeader>
      <CardContent className="gap-4">
        <div className=" flex items-center space-x-4 rounded-md border p-4">
          <BellRing />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Push Notifications
            </p>
            <p className="text-sm text-muted-foreground">
              Send order confirmations.
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Check /> Confirm oders
        </Button>
      </CardFooter>
    </Card>
    <Card className="col-span-4 md:col-span-2 lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">$1329 <IconTrigger/></CardTitle>
        <CardDescription>Total sales curve</CardDescription>
      </CardHeader>
      <CardContent className="gap-4">
        <div className="flex items-center w-full h-full">
          <PerformanceChart />
        </div>
      </CardContent>
    </Card>
    <Card className="col-span-4 md:col-span-2 lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">Conversion Rates  <IconTrigger/></CardTitle>
        <CardDescription>Lead converted over last 6 months</CardDescription>

      </CardHeader>
      <CardContent className="gap-4">
        <div className="flex items-center w-full h-full">
          <SalesLineChart/>
        </div>
      </CardContent>
    </Card>
    <Card className="col-span-4 md:col-span-2 lg:col-span-1">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">Deals Overview  <IconTrigger/></CardTitle>
        <CardDescription>Deals over Leads</CardDescription>

      </CardHeader>
      <CardContent className="gap-4">
        <div className=" flex items-center w-full h-full">
          <LeadsBarChart/>            
        </div>
      </CardContent>
    </Card>
    
    </>
  )
}

export function IconTrigger(){
    return (
      <DialogTrigger><Edit2Icon/></DialogTrigger>
    );
  }