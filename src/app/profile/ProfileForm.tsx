"use client";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { useTransition } from "react";
import updateProfile from "@/app/profile/actions";
import { ProfileFormSchema, type ProfileFormValues } from "./schema";

export function ProfileForm({ name, profile }: Partial<ProfileFormValues>) {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: {
      name,
      profile,
    },
  });

  const [isPending, startTransition] = useTransition();

  function onSubmit(data: ProfileFormValues) {
    startTransition(() => {
      updateProfile(data);
    });
  }

  return (
    <Form {...form}>
      <form
        className="mt-10 w-full max-w-2xl flex flex-col gap-y-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Your display name..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="profile"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile</FormLabel>
              <FormControl>
                <Textarea placeholder="Your profile..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="ml-auto w-fit" type="submit">
          {isPending ? "Updating..." : "Update"}
        </Button>
      </form>
    </Form>
  );
}
