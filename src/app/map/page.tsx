"use client";
import { MotionButton } from "@/components/ui/button";
import { MapIcon, XIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
export default function Map() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-center max-w-[600px] w-[95vw] h-[600px] relative flex-col">
        <MotionButton
          layoutId="map"
          onClick={() => setIsOpen(true)}
          variant={"outline"}
        >
          <motion.div
            layoutId="map-button"
            className="inline-flex items-center"
          >
            <MapIcon className="w-4 h-4 mr-2" />
            Open map
          </motion.div>
        </MotionButton>
        <AnimatePresence>
          {false ? (
            <motion.div layoutId="map" className="w-full h-full bg-green-500">
              Hello!
            </motion.div>
          ) : null}
          {isOpen ? (
            <motion.div
              layoutId="map"
              className="rounded-3xl overflow-hidden absolute w-full h-full"
            >
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed/v1/view?key=AIzaSyCyggaQCV9bQx3n2WSmpiOX2urGuZGtw78&center=44.7298843,-63.7528282&zoom=14"
              />
              <MotionButton
                layoutId="map-button"
                onClick={() => setIsOpen(false)}
                className="absolute top-2 right-2 rounded-2xl"
                size={"icon"}
                variant={"outline"}
              >
                <XIcon className="w-4 h-4" />
              </MotionButton>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
      <div className="text-sm text-center mt-10">
        Inspired by{" "}
        <Link
          href="https://x.com/nitishkmrk/status/1869270370458784036"
          className="underline"
          target="_blank"
        >
          this tweet
        </Link>
        , built by{" "}
        <Link href="https://yaser.ca" className="underline">
          Yaser
        </Link>
      </div>
    </div>
  );
}
