import React, { useState } from 'react';
import { supabase } from '../supabaseClient';
import { Mail, Lock, User, Eye, EyeOff, ArrowRight, CheckCircle2, AlertCircle, ShoppingBag } from 'lucide-react';

interface AuthProps {
  onSuccess?: () => void;
}

export const Auth: React.FC<AuthProps> = ({ onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState<boolean>(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      if (forgotPasswordMode) {
        if (!email) {
          setErrorMsg('Please enter your email address to reset password.');
          setLoading(false);
          return;
        }
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin,
        });
        if (error) throw error;
        setSuccessMsg('Password reset instructions sent to your email.');
        setLoading(false);
        return;
      }

      if (isSignUp) {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              full_name: fullName,
            },
          },
        });

        if (error) throw error;

        if (data.session) {
          setSuccessMsg('Account created and logged in successfully!');
          if (onSuccess) onSuccess();
        } else {
          setSuccessMsg('Account registered! Please check your email to confirm your account.');
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        setSuccessMsg('Logged in successfully!');
        if (onSuccess) onSuccess();
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        {/* Brand Header */}
        <div className="brand-header">
          <div className="brand-icon">
            <ShoppingBag className="icon-bag" size={28} />
          </div>
          <h1 className="brand-title">E-Commerce Store</h1>
          <p className="brand-subtitle">
            {forgotPasswordMode
              ? 'Reset your account password'
              : isSignUp
              ? 'Create your account to start shopping'
              : 'Welcome back! Sign in to continue'}
          </p>
        </div>

        {/* Tab Toggle (Hidden during forgot password) */}
        {!forgotPasswordMode && (
          <div className="tabs-container">
            <button
              type="button"
              className={`tab-btn ${!isSignUp ? 'active' : ''}`}
              onClick={() => {
                setIsSignUp(false);
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
            >
              Sign In
            </button>
            <button
              type="button"
              className={`tab-btn ${isSignUp ? 'active' : ''}`}
              onClick={() => {
                setIsSignUp(true);
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
            >
              Create Account
            </button>
          </div>
        )}

        {/* Feedback Alerts */}
        {errorMsg && (
          <div className="alert alert-error">
            <AlertCircle size={18} />
            <span>{errorMsg}</span>
          </div>
        )}

        {successMsg && (
          <div className="alert alert-success">
            <CheckCircle2 size={18} />
            <span>{successMsg}</span>
          </div>
        )}

        {/* Auth Form */}
        <form onSubmit={handleAuth} className="auth-form">
          {/* Full Name for Sign Up */}
          {isSignUp && !forgotPasswordMode && (
            <div className="input-group">
              <label>Full Name</label>
              <div className="input-wrapper">
                <User size={18} className="field-icon" />
                <input
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
            </div>
          )}

          {/* Email Field */}
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <Mail size={18} className="field-icon" />
              <input
                type="email"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Password Field */}
          {!forgotPasswordMode && (
            <div className="input-group">
              <div className="label-with-link">
                <label>Password</label>
                {!isSignUp && (
                  <button
                    type="button"
                    className="link-btn"
                    onClick={() => {
                      setForgotPasswordMode(true);
                      setErrorMsg(null);
                      setSuccessMsg(null);
                    }}
                  >
                    Forgot Password?
                  </button>
                )}
              </div>
              <div className="input-wrapper">
                <Lock size={18} className="field-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={6}
                  required
                />
                <button
                  type="button"
                  className="eye-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {isSignUp && (
                <span className="input-hint">Must be at least 6 characters</span>
              )}
            </div>
          )}

          {/* Submit Button */}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? (
              <span className="spinner-text">Processing...</span>
            ) : forgotPasswordMode ? (
              <>
                Send Reset Link <ArrowRight size={18} />
              </>
            ) : isSignUp ? (
              <>
                Sign Up Now <ArrowRight size={18} />
              </>
            ) : (
              <>
                Sign In to Account <ArrowRight size={18} />
              </>
            )}
          </button>
        </form>

        {/* Footer / Switch Mode */}
        <div className="auth-footer">
          {forgotPasswordMode ? (
            <button
              type="button"
              className="link-btn back-to-login"
              onClick={() => {
                setForgotPasswordMode(false);
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
            >
              ← Back to Sign In
            </button>
          ) : (
            <p>
              {isSignUp ? 'Already have an account? ' : "Don't have an account yet? "}
              <button
                type="button"
                className="link-btn font-semibold"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrorMsg(null);
                  setSuccessMsg(null);
                }}
              >
                {isSignUp ? 'Sign In' : 'Sign Up'}
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
