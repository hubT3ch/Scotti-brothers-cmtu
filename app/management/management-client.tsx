"use client";

import { FormEvent, useEffect, useState } from "react";

type Submission = {
  submissionId: string;
  guestName: string;
  guestEmail: string;
  fields: Record<string, string>;
  agreementStoragePath: string;
  originalFilename: string;
  submittedAt: string;
  status: string;
  agreementUrl: string;
};

export default function ManagementClient({
  initialAuthenticated,
}: {
  initialAuthenticated: boolean;
}) {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(initialAuthenticated);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function loadSubmissions() {
    const response = await fetch("/api/management/submissions", {
      cache: "no-store",
    });
    const result = (await response.json()) as {
      submissions?: Submission[];
      error?: string;
    };

    if (!response.ok) {
      throw new Error(result.error ?? "The submissions could not be loaded.");
    }

    setAuthenticated(true);
    setSubmissions(result.submissions ?? []);
  }

  useEffect(() => {
    if (!initialAuthenticated) {
      return;
    }

    fetch("/api/management/submissions", { cache: "no-store" })
      .then(async (response) => {
        if (!response.ok) {
          setAuthenticated(false);
          return;
        }

        const result = (await response.json()) as {
          submissions?: Submission[];
        };
        setSubmissions(result.submissions ?? []);
      })
      .catch(() => setAuthenticated(false));
  }, [initialAuthenticated]);

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/management/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        throw new Error(result.error ?? "The login failed.");
      }

      setPassword("");
      await loadSubmissions();
    } catch (loginError) {
      setError(loginError instanceof Error ? loginError.message : "The login failed.");
    } finally {
      setLoading(false);
    }
  }

  async function handleLogout() {
    await fetch("/api/management/logout", { method: "POST" });
    setAuthenticated(false);
    setSubmissions([]);
  }

  if (!authenticated) {
    return (
      <main className="management-page">
        <section className="management-panel login-panel">
          <p className="management-eyebrow">CMTU MANAGEMENT</p>
          <h1>Management Hub</h1>
          <form onSubmit={handleLogin}>
            <label htmlFor="management-password">Password</label>
            <input
              id="management-password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            {error && <p className="management-error" role="alert">{error}</p>}
            <button type="submit" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="management-page">
      <section className="management-content">
        <header className="management-header">
          <div>
            <p className="management-eyebrow">CMTU MANAGEMENT</p>
            <h1>Guest Submissions</h1>
          </div>
          <button type="button" onClick={handleLogout}>Sign out</button>
        </header>
        {error && <p className="management-error" role="alert">{error}</p>}
        {submissions.length === 0 ? (
          <p className="management-empty">No guest submissions found.</p>
        ) : (
          <div className="submission-list">
            {submissions.map((submission) => (
              <article className="submission-panel" key={submission.submissionId}>
                <div className="submission-heading">
                  <div>
                    <h2>{submission.guestName}</h2>
                    <p>{submission.guestEmail}</p>
                  </div>
                  <a href={submission.agreementUrl} target="_blank" rel="noreferrer">
                    View Agreement
                  </a>
                </div>
                <dl className="submission-meta">
                  <div><dt>Submitted</dt><dd>{new Date(submission.submittedAt).toLocaleString()}</dd></div>
                  <div><dt>Status</dt><dd>{submission.status}</dd></div>
                  <div><dt>Agreement</dt><dd>{submission.originalFilename}</dd></div>
                  <div><dt>Storage path</dt><dd>{submission.agreementStoragePath}</dd></div>
                </dl>
                <details>
                  <summary>View complete submission fields</summary>
                  <dl className="submission-fields">
                    {Object.entries(submission.fields).map(([name, value]) => (
                      <div key={name}><dt>{name}</dt><dd>{value || "-"}</dd></div>
                    ))}
                  </dl>
                </details>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}