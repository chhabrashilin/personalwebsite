import Section from "@/components/Section";

export const metadata = {
  title: "About - Your Name",
  description: "Learn more about my background, interests, and values.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <Section className="mx-auto max-w-4xl px-6 lg:px-8 py-16 md:py-24">
        <div className="space-y-16">
          {/* Bio Section */}
          <div className="space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold">About Me</h1>
            <div className="space-y-4 text-foreground/70 leading-relaxed">
              <p>
                I&apos;m a Computer Science student with a passion for building systems that scale
                and solve real-world problems. My journey in tech started with curiosity about how
                things work under the hood, which naturally led me to distributed systems,
                infrastructure, and low-level optimizations.
              </p>
              <p>
                Beyond systems engineering, I&apos;m deeply interested in applied machine learning—not
                just training models, but building the infrastructure that makes ML systems
                production-ready. I believe the future lies at the intersection of robust systems and
                intelligent software.
              </p>
            </div>
          </div>

          {/* Interests Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Technical Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Systems Engineering</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Distributed systems architecture</li>
                  <li>• Database internals and optimization</li>
                  <li>• High-performance computing</li>
                  <li>• Cloud infrastructure and orchestration</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Machine Learning</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• ML infrastructure and deployment</li>
                  <li>• Model optimization and quantization</li>
                  <li>• Computer vision and NLP applications</li>
                  <li>• MLOps and production ML systems</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Web Technologies</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Modern web frameworks (React, Next.js)</li>
                  <li>• Real-time applications and WebSockets</li>
                  <li>• API design and GraphQL</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Blockchain & Web3</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Smart contract development</li>
                  <li>• DeFi protocol architecture</li>
                  <li>• Cryptographic primitives</li>
                  <li>• Decentralized application design</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Tools I Enjoy</h2>
            <div className="space-y-8">
              <div>
                <h3 className="font-semibold mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "TypeScript",
                    "Python",
                    "Go",
                    "Rust",
                    "Solidity",
                    "C++",
                    "Java",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-sm font-mono bg-foreground/5 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Technologies & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "React",
                    "Next.js",
                    "Node.js",
                    "PyTorch",
                    "TensorFlow",
                    "Docker",
                    "Kubernetes",
                    "PostgreSQL",
                    "Redis",
                    "GraphQL",
                    "gRPC",
                    "AWS",
                  ].map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1.5 text-sm font-mono bg-foreground/5 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">How I Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-foreground/[0.02] border border-border">
                <h3 className="font-semibold mb-2">First Principles Thinking</h3>
                <p className="text-sm text-foreground/70">
                  I approach problems by breaking them down to fundamental truths and building up
                  from there, rather than relying on assumptions.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-foreground/[0.02] border border-border">
                <h3 className="font-semibold mb-2">Pragmatic Engineering</h3>
                <p className="text-sm text-foreground/70">
                  I believe in choosing the right tool for the job. Simple solutions that work are
                  better than complex ones that might.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-foreground/[0.02] border border-border">
                <h3 className="font-semibold mb-2">Continuous Learning</h3>
                <p className="text-sm text-foreground/70">
                  Technology evolves rapidly. I stay current by reading papers, contributing to open
                  source, and building side projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
