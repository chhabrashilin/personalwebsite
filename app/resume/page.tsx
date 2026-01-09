"use client";

import { Download } from "lucide-react";
import Button from "@/components/Button";
import Section from "@/components/Section";

export default function ResumePage() {
  return (
    <div className="w-full">
      <Section className="mx-auto max-w-5xl px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Resume</h1>
              <p className="text-sm text-foreground/60 font-mono">
                Last updated: January 2026
              </p>
            </div>
            <Button
              onClick={() => {
                // In production, this would download the actual PDF
                alert("Resume download would start here. Add your resume.pdf to /public folder.");
              }}
              className="w-full sm:w-auto"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>

          {/* Key Focus Areas */}
          <div className="border border-border rounded-xl p-6 bg-foreground/[0.02]">
            <h2 className="font-semibold mb-3">Key Focus Areas</h2>
            <div className="flex flex-wrap gap-2">
              {[
                "Cloud Infrastructure & Kubernetes",
                "Big Data Systems",
                "Machine Learning & Data Science",
                "Full-Stack Development",
              ].map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 text-sm bg-background rounded-md border border-border"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Resume Preview */}
          <div className="border border-border rounded-xl overflow-hidden bg-white">
            <div className="aspect-[8.5/11] w-full flex items-center justify-center bg-foreground/[0.02]">
              <div className="text-center space-y-4 p-8">
                <p className="text-foreground/60">Resume preview will appear here</p>
                <p className="text-sm text-foreground/50">
                  Place your resume.pdf in the /public folder and update the iframe src below
                </p>
              </div>
            </div>
            {/*
            Uncomment and update the src when you have a PDF resume:
            <iframe
              src="/resume.pdf"
              className="w-full aspect-[8.5/11]"
              title="Resume PDF"
            />
            */}
          </div>

          {/* Instructions */}
          <div className="border-l-4 border-foreground/20 pl-4 py-2">
            <p className="text-sm text-foreground/60">
              <strong>To add your resume:</strong> Place your resume.pdf in the{" "}
              <code className="px-1.5 py-0.5 bg-foreground/5 rounded text-xs font-mono">
                /public
              </code>{" "}
              folder and uncomment the iframe in this component.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
