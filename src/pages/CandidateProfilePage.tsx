import { TopBar } from "@/components/TopBar";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, MapPin, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const candidateData = {
  name: "Priya Sharma",
  email: "priya.sharma@email.com",
  phone: "+91 98765 43210",
  location: "Bangalore, India",
  role: "Senior Backend Engineer",
  experience: "7 years",
  currentCompany: "TechCorp India",
  appliedDate: "Feb 4, 2026",
  source: "LinkedIn",
  recommendation: "Strong Yes",
  confidence: "High",
};

const evaluationBreakdown = [
  { label: "Technical Understanding", score: 92 },
  { label: "Communication", score: 88 },
  { label: "Problem Solving", score: 95 },
  { label: "Behavioral Signals", score: 84 },
  { label: "Risk Indicators", score: 10 },
];

const timeline = [
  { event: "Application received", date: "Feb 4, 2026" },
  { event: "Resume pre-screened — passed", date: "Feb 4, 2026" },
  { event: "AI interview scheduled", date: "Feb 5, 2026" },
  { event: "AI interview completed", date: "Feb 5, 2026" },
  { event: "Report generated", date: "Feb 5, 2026" },
];

const tabs = ["Evaluation", "Interview", "Timeline", "Notes"] as const;

export default function CandidateProfilePage() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState<typeof tabs[number]>("Evaluation");

  return (
    <>
      <TopBar title="Candidate Profile" />
      <main className="p-6">
        <Link to="/candidates" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to candidates
        </Link>

        <div className="grid grid-cols-3 gap-6">
          {/* Left Panel — Identity */}
          <div className="col-span-1 space-y-6">
            <div className="border p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-primary-foreground text-lg font-semibold mb-4">
                PS
              </div>
              <h2 className="text-lg font-semibold">{candidateData.name}</h2>
              <p className="text-sm text-muted-foreground mt-0.5">{candidateData.role}</p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Mail className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {candidateData.email}
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <Phone className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {candidateData.phone}
                </div>
                <div className="flex items-center gap-2.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {candidateData.location}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Experience</span>
                  <span>{candidateData.experience}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Company</span>
                  <span>{candidateData.currentCompany}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Source</span>
                  <span>{candidateData.source}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Applied</span>
                  <span>{candidateData.appliedDate}</span>
                </div>
              </div>
            </div>

            <Button variant="outline" size="sm" className="w-full gap-2 text-xs">
              <FileText className="h-3.5 w-3.5" />
              View Resume
            </Button>
          </div>

          {/* Right Panel — Intelligence */}
          <div className="col-span-2">
            {/* Tabs */}
            <div className="flex border-b mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2.5 text-sm transition-colors border-b-2 -mb-px ${
                    activeTab === tab
                      ? "border-foreground text-foreground font-medium"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {activeTab === "Evaluation" && (
              <div className="space-y-6">
                <div className="flex gap-8 p-5 border">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Recommendation</p>
                    <p className="text-lg font-semibold">{candidateData.recommendation}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Confidence</p>
                    <p className="text-lg font-semibold">{candidateData.confidence}</p>
                  </div>
                </div>

                <div className="border divide-y">
                  {evaluationBreakdown.map((item) => (
                    <div key={item.label} className="flex items-center justify-between px-5 py-4">
                      <span className="text-sm">{item.label}</span>
                      <div className="flex items-center gap-3">
                        <div className="w-32 h-1.5 bg-secondary overflow-hidden">
                          <div
                            className="h-full bg-foreground transition-all"
                            style={{ width: `${item.label === "Risk Indicators" ? item.score : item.score}%` }}
                          />
                        </div>
                        <span className="text-sm font-medium w-8 text-right">{item.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "Timeline" && (
              <div className="border divide-y">
                {timeline.map((t, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-foreground" />
                      <span className="text-sm">{t.event}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{t.date}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "Interview" && (
              <div className="border p-6">
                <p className="text-sm text-muted-foreground">AI Interview transcript and recording will appear here.</p>
              </div>
            )}

            {activeTab === "Notes" && (
              <div className="border p-6">
                <p className="text-sm text-muted-foreground">Team notes and comments will appear here.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
