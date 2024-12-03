"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {
    redirect('/home');
  }, []);

} 