import { useState, useEffect } from 'react';
import type { Session, User } from '@supabase/supabase-js';
import { supabase } from './supabaseClient';
import { Auth } from './components/Auth';
import { Dashboard } from './components/Dashboard';
import { Database, GitBranch } from 'lucide-react';
import './App.css';

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="spinner"></div>
        <p>Connecting to Supabase...</p>
      </div>
    );
  }

  if (session && session.user) {
    return (
      <Dashboard
        user={session.user as User}
        onSignOut={() => setSession(null)}
      />
    );
  }

  return (
    <div className="app-layout">
      {/* Top Banner showing connected status */}
      <div className="top-status-bar">
        <div className="status-item">
          <Database size={15} className="status-icon active" />
          <span>Supabase Connected: <strong>osdwapwpjovhrrnbtfmk</strong></span>
        </div>
        <div className="status-item">
          <GitBranch size={15} className="status-icon active" />
          <span>GitHub Synced: <strong>neetadevi/ecommerces</strong></span>
        </div>
      </div>

      <Auth onSuccess={() => {}} />
    </div>
  );
}
