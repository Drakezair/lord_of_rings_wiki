"use client";
import { Subtitle, Title } from "@/components/atom";
import { RingScene } from "@/components/cell";
import React from "react";

export default function HeroSection() {
  return (
    <div>
      <div className="h-screen overflow-hidden">
        <video
          className="object-cover h-dvh opacity-75 absolute top-0"
          autoPlay
          loop
          muted
        >
          <source src="/video/hero.mp4#t=10" type="video/mp4" />
        </video>
        <div className="flex items-center relative z-10 h-dvh px-5 justify-center flex-col">
          <Title className="text-4xl text-center">
            Rings of Power: Unleashing Middle-Earth
          </Title>
          <RingScene />
          <Subtitle className="text-sm text-center">
            Your Ultimate Gateway to Tolkien’s Magical Universe
          </Subtitle>
        </div>
      </div>
    </div>
  );
}

/*
Template UI Pattern

In this example, the HeroSection component is a subtype of the Section component.
The HeroSection component is a template that defines the structure of the UI.
It uses the Title, Subtitle, and RingScene components to create the UI.
Static data is used to display the title and subtitle.

*/
