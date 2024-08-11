"use client";
import { GroupData } from "@/app/models/group";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useCreateGroup } from "@/hooks/sendGroupPayload";
import { useMutation } from "@tanstack/react-query";

interface Props {
  close: () => void;
  success: (success: boolean) => void
}

export function CreateGroups(props: Props) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(0);
  const [type, setType] = useState("");

  const { mutate: sendPayload, isError, error, isSuccess } = useCreateGroup()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendPayload({ name, description: 'test', ownerId: 1 });
    props.close()
  };

  if (isSuccess === true) {
    props.success(true)
  }

  if (isError) {
    console.log(error);
  }

  return (
    <Card className="w-[350px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-slide-in">
      <CardHeader>
        <CardTitle>Create group</CardTitle>
        <CardDescription>Create your new group in 1 click.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Name of your project"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="goal">Goal</Label>
              <Input
                id="goal"
                type="number"
                placeholder="What is your goal"
                value={goal}
                onChange={(e) => setGoal(Number(e.target.value))}
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="type">Group type</Label>
              <Select onValueChange={(value) => setType(value)}>
                <SelectTrigger id="type">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="saving">Saving</SelectItem>
                  <SelectItem value="bills">Bills</SelectItem>
                  <SelectItem value="something_else">Something else</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <CardFooter className="flex justify-between mt-2">
            <Button type="button" variant="outline" onClick={props.close}>
              Cancel
            </Button>
            <Button type="submit">Create group</Button>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}
