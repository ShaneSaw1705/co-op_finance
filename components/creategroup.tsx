import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface Props {
  close: () => void
}

export function CreateGroups(props: Props) {
  return (
    <Card className="w-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-slide-in">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Name of your project" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="goal">Goal</Label>
              <Input id="goal" type="number" placeholder="What is your goal" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Group type</Label>
              <Select>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="next">Saving</SelectItem>
                  <SelectItem value="sveltekit">Bills</SelectItem>
                  <SelectItem value="astro">something else</SelectItem>
                  <SelectItem value="nuxt">something else</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={() => props.close()}>Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter>
    </Card>
  )
}
