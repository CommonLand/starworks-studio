import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/portal/")({
  // The portal is private. Nothing internal renders publicly — visitors are
  // sent to the sign-in screen.
  beforeLoad: () => {
    throw redirect({ to: "/portal/login" });
  },
});
