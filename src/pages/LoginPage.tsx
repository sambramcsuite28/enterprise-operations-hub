import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [shake, setShake] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (!email || !password) {
        setError("Invalid credentials. Please try again.");
        setShake(true);
        setTimeout(() => setShake(false), 500);
        setLoading(false);
        return;
      }
      navigate("/");
    }, 1200);
  };
  return <div className="min-h-screen flex bg-sidebar">
      {/* Left — System Presence */}
      <div className="hidden lg:flex flex-col justify-between flex-1 p-12 relative overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 login-grid-bg" />

        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="h-7 w-7 rounded-md bg-foreground" />
            <span className="text-base font-semibold tracking-tight text-foreground">
              HireFlow
            </span>
          </div>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground leading-tight mb-4">
            Hiring infrastructure
            <br />
            for modern teams
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed mb-8">
            AI-powered interviews, structured pipelines, and
            <br />
            operational intelligence — in one system.
          </p>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/40 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary/60" />
            </span>
            12 interviews running right now
          </div>
        </div>

        <div className="relative z-10 text-xs text-muted-foreground">
          © {new Date().getFullYear()} HireFlow Systems
        </div>
      </div>

      {/* Right — Access Panel */}
      <div className="w-full lg:w-[480px] flex items-center justify-center p-8 lg:p-16 bg-background lg:border-l border-border">
        <div className="w-full max-w-[360px] animate-fade-in">
          {/* Mobile logo */}
          <div className="flex items-center gap-2.5 mb-10 lg:hidden">
            <div className="h-7 w-7 rounded-md bg-foreground" />
            <span className="text-base font-semibold tracking-tight text-foreground">
              HireFlow
            </span>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold tracking-tight text-foreground mb-1">
              Sign in
            </h2>
            <p className="text-sm text-muted-foreground">
              Access your workspace
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Work Email
              </Label>
              <Input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" className={`h-11 bg-background transition-colors duration-200 ${shake ? "animate-shake" : ""}`} autoComplete="email" autoFocus />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="password" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Password
              </Label>
              <Input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" className={`h-11 bg-background transition-colors duration-200 ${shake ? "animate-shake" : ""}`} autoComplete="current-password" />
            </div>

            {error && <p className="text-sm text-destructive animate-fade-in">
                {error}
              </p>}

            <div className="pt-1">
              

              <Button type="submit" disabled={loading} className="w-full h-11 text-sm font-medium transition-transform duration-150 active:scale-[0.98]">
                {loading ? <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Signing in
                  </span> : "Continue"}
              </Button>
            </div>
          </form>

          <div className="mt-6 flex items-center justify-between">
            <button type="button" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
              Forgot password
            </button>
            <button type="button" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
              Contact administrator
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default LoginPage;