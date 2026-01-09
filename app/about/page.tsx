import Section from "@/components/Section";

export const metadata = {
  title: "About - Shilin Chhabra",
  description: "Computer Science and Data Science student at UW-Madison with experience in cloud infrastructure, ML systems, and full-stack development.",
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
                I&apos;m a Computer Science and Data Science student at the University of Wisconsin–Madison,
                graduating in December 2026 with a Certificate in Entrepreneurship. My passion lies in
                building scalable cloud-native systems and production-grade ML infrastructure that solve
                real-world problems.
              </p>
              <p>
                Currently, I&apos;m a Software Engineering Research Intern at NSF NCAR, where I engineer
                Kubernetes platforms supporting atmospheric research for 150+ scientists. I&apos;ve deployed
                containerized HPC solutions, built CI/CD pipelines with GitOps, and strengthened security
                with automated vulnerability scanning. Beyond technical work, I serve as a House Fellow
                at UW-Madison and lead the Badger Cricket Club as Captain and President, where we won
                the 2024 NCCA National Championship.
              </p>
            </div>
          </div>

          {/* Interests Section */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold">Technical Interests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Cloud & Systems Engineering</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Kubernetes and container orchestration</li>
                  <li>• High-performance computing (HPC)</li>
                  <li>• CI/CD pipelines and GitOps</li>
                  <li>• Cloud infrastructure (AWS, GCP)</li>
                  <li>• Security and vulnerability management</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Data Science & Machine Learning</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Big data processing with Spark</li>
                  <li>• Machine learning model development</li>
                  <li>• Data analytics and visualization</li>
                  <li>• Statistical modeling and algorithms</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Full-Stack Development</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Modern web frameworks (React, Next.js)</li>
                  <li>• Backend APIs (Node.js, FastAPI, Flask)</li>
                  <li>• Database design and optimization</li>
                  <li>• Real-time applications</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Research Interests</h3>
                <ul className="space-y-2 text-foreground/70">
                  <li>• Algorithms and optimization</li>
                  <li>• Operating systems</li>
                  <li>• Artificial intelligence</li>
                  <li>• Cryptography and security</li>
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
                    "Python",
                    "Java",
                    "C",
                    "C++",
                    "C#",
                    "JavaScript",
                    "TypeScript",
                    "R",
                    "MySQL",
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
                    "Docker",
                    "Kubernetes",
                    "Apache Spark",
                    "AWS",
                    "GCP",
                    "React",
                    "Node.js",
                    "FastAPI",
                    "Flask",
                    "MongoDB",
                    "Snowflake",
                    "Argo CD",
                    "Harbor",
                    "Helm",
                    "Power BI",
                    "Cassandra",
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
                <h3 className="font-semibold mb-2">Production-First Mindset</h3>
                <p className="text-sm text-foreground/70">
                  I build systems with production in mind from day one—security, scalability,
                  and reliability aren&apos;t afterthoughts, they&apos;re foundations.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-foreground/[0.02] border border-border">
                <h3 className="font-semibold mb-2">Impact Through Code</h3>
                <p className="text-sm text-foreground/70">
                  The best code solves real problems. I focus on building tools that researchers,
                  engineers, and users actually need and want to use.
                </p>
              </div>
              <div className="p-6 rounded-xl bg-foreground/[0.02] border border-border">
                <h3 className="font-semibold mb-2">Team Player & Leader</h3>
                <p className="text-sm text-foreground/70">
                  From mentoring residents as House Fellow to leading championship teams,
                  I believe great work happens through collaboration and shared vision.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
