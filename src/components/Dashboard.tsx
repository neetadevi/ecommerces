import React from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase } from '../supabaseClient';
import { ShoppingBag, LogOut, CheckCircle, Database, GitBranch, ShieldCheck, UserCheck } from 'lucide-react';

interface DashboardProps {
  user: User;
  onSignOut: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ user, onSignOut }) => {
  const handleLogout = async () => {
    await supabase.auth.signOut();
    onSignOut();
  };

  const fullName = user.user_metadata?.full_name || user.email?.split('@')[0] || 'Customer';

  return (
    <div className="dashboard-container">
      {/* Top Navbar */}
      <header className="navbar">
        <div className="navbar-brand">
          <ShoppingBag className="brand-logo" />
          <span className="brand-name">E-Commerce Store</span>
        </div>
        <div className="navbar-actions">
          <span className="user-email-badge">
            <UserCheck size={16} />
            {user.email}
          </span>
          <button onClick={handleLogout} className="logout-btn">
            <LogOut size={16} />
            <span>Sign Out</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        <div className="welcome-banner">
          <h1>Welcome, {fullName}! 👋</h1>
          <p>You have successfully logged in via Supabase Authentication.</p>
        </div>

        {/* Integration Status Cards */}
        <div className="cards-grid">
          <div className="status-card">
            <div className="card-header">
              <div className="icon-wrapper supabase-icon">
                <Database size={24} />
              </div>
              <span className="badge badge-success">
                <CheckCircle size={14} /> Connected
              </span>
            </div>
            <h3>Supabase Database & Auth</h3>
            <p>Project ID: <code>osdwapwpjovhrrnbtfmk</code></p>
            <span className="detail-meta">Authentication service is live & functional</span>
          </div>

          <div className="status-card">
            <div className="card-header">
              <div className="icon-wrapper github-icon">
                <GitBranch size={24} />
              </div>
              <span className="badge badge-success">
                <CheckCircle size={14} /> Connected
              </span>
            </div>
            <h3>GitHub Repository</h3>
            <p>Repo: <code>neetadevi/ecommerces</code></p>
            <span className="detail-meta">Synced with remote origin</span>
          </div>

          <div className="status-card">
            <div className="card-header">
              <div className="icon-wrapper security-icon">
                <ShieldCheck size={24} />
              </div>
              <span className="badge badge-success">
                <CheckCircle size={14} /> Secure
              </span>
            </div>
            <h3>Active Session</h3>
            <p>User ID: <code>{user.id.substring(0, 14)}...</code></p>
            <span className="detail-meta">Session managed securely via Supabase JWT</span>
          </div>
        </div>

        {/* User Profile Card */}
        <div className="profile-details-card">
          <h2>Your Account Information</h2>
          <div className="details-list">
            <div className="detail-row">
              <span className="label">Full Name:</span>
              <span className="value">{fullName}</span>
            </div>
            <div className="detail-row">
              <span className="label">Email Address:</span>
              <span className="value">{user.email}</span>
            </div>
            <div className="detail-row">
              <span className="label">User ID (UID):</span>
              <span className="value"><code>{user.id}</code></span>
            </div>
            <div className="detail-row">
              <span className="label">Email Confirmed:</span>
              <span className="value">
                {user.email_confirmed_at ? 'Yes (Verified)' : 'Pending verification (if required)'}
              </span>
            </div>
            <div className="detail-row">
              <span className="label">Created At:</span>
              <span className="value">
                {user.created_at ? new Date(user.created_at).toLocaleString() : 'N/A'}
              </span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

