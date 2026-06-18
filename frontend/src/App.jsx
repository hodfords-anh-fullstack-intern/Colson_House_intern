import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [apiStatus, setApiStatus] = useState({
    loading: true,
    online: false,
    message: '',
    timestamp: '',
    error: null
  });

  const checkStatus = async () => {
    setApiStatus(prev => ({ ...prev, loading: true, error: null }));
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
      const response = await fetch(`${apiUrl}/status`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        }
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setApiStatus({
        loading: false,
        online: true,
        message: data.message || 'Connected successfully',
        timestamp: data.timestamp || new Date().toISOString(),
        error: null
      });
    } catch (err) {
      setApiStatus({
        loading: false,
        online: false,
        message: 'Backend server offline. Please start it using "php artisan serve" in the backend directory.',
        timestamp: '',
        error: err.message
      });
    }
  };

  useEffect(() => {
    checkStatus();
  }, []);

  return (
    <div className="portal-container">
      {/* Premium Header */}
      <header className="portal-header">
        <div className="brand-logo">
          <span className="logo-icon">✨</span>
          <span className="brand-name">Colson Hotel</span>
        </div>
        <div className="env-badge">
          <span className="pulse-dot"></span>
          Environment: LOCAL DEVELOPMENT
        </div>
      </header>

      {/* Hero Welcome */}
      <main className="portal-main">
        <section className="welcome-section">
          <h1>EPIC 1: Setup & Discovery</h1>
          <p className="welcome-subtitle">
            Welcome to the local development portal for <strong>Colson Hotel</strong>. This dashboard provides 
            real-time environment verification, git branch discovery, and backend connectivity diagnostics.
          </p>
        </section>

        {/* Control Grid */}
        <section className="status-grid">
          {/* Card 1: Frontend Status */}
          <div className="status-card glassmorphic">
            <div className="card-header">
              <h3>Frontend Service</h3>
              <span className="badge success">Active</span>
            </div>
            <div className="card-body">
              <div className="tech-stack">
                <img src={viteLogo} className="tech-logo" alt="Vite" />
                <img src={reactLogo} className="tech-logo spin" alt="React" />
                <span>React + Vite SPA</span>
              </div>
              <ul className="details-list">
                <li><strong>Port:</strong> 5173 (default)</li>
                <li><strong>Secure Env:</strong> Configured (.env)</li>
                <li><strong>Aesthetics:</strong> Vanilla CSS</li>
              </ul>
            </div>
          </div>

          {/* Card 2: Backend Status */}
          <div className={`status-card glassmorphic ${apiStatus.online ? 'success-border' : 'error-border'}`}>
            <div className="card-header">
              <h3>Backend API Service</h3>
              {apiStatus.loading ? (
                <span className="badge warning">Checking...</span>
              ) : apiStatus.online ? (
                <span className="badge success">Connected</span>
              ) : (
                <span className="badge danger">Offline</span>
              )}
            </div>
            <div className="card-body">
              <div className="tech-stack">
                <span className="tech-icon">🐘</span>
                <span>Laravel 11+ (PHP 8.5)</span>
              </div>
              
              {apiStatus.loading ? (
                <p className="status-msg text-muted">Contacting backend API...</p>
              ) : apiStatus.online ? (
                <div className="status-details">
                  <p className="status-msg text-success">{apiStatus.message}</p>
                  <p className="status-timestamp">Last check: {new Date(apiStatus.timestamp).toLocaleTimeString()}</p>
                </div>
              ) : (
                <div className="status-details">
                  <p className="status-msg text-danger">{apiStatus.message}</p>
                </div>
              )}

              <button 
                type="button" 
                className="action-btn"
                onClick={checkStatus}
                disabled={apiStatus.loading}
              >
                {apiStatus.loading ? 'Pinging...' : 'Test Connection'}
              </button>
            </div>
          </div>

          {/* Card 3: Database & Security */}
          <div className="status-card glassmorphic">
            <div className="card-header">
              <h3>Data & Security</h3>
              <span className="badge info">Secure</span>
            </div>
            <div className="card-body">
              <div className="tech-stack">
                <span className="tech-icon">💾</span>
                <span>SQLite (Zero-Config)</span>
              </div>
              <ul className="details-list">
                <li><strong>ORM:</strong> Eloquent (Prepared Statements)</li>
                <li><strong>CORS Policy:</strong> Restricted to Frontend Origin</li>
                <li><strong>Exceptions:</strong> Generic errors enabled</li>
                <li><strong>Variables:</strong> Encrypted app keys</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Branch / Code Tracking */}
        <section className="git-details glassmorphic">
          <div className="git-header">
            <h4>🔄 Repository Tracking & Git Branch Strategy</h4>
          </div>
          <div className="git-body">
            <p>The Git workflow is initialized with secure trunking standards:</p>
            <div className="branch-visual">
              <div className="branch-node main">
                <span className="node-dot"></span>
                <strong>main</strong> (production ready, stable)
              </div>
              <div className="branch-node develop">
                <span className="node-dot"></span>
                <strong>develop</strong> (staging/integration)
              </div>
              <div className="branch-node feature">
                <span className="node-dot"></span>
                <strong>feature/*</strong> (intern workspace)
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Premium Footer */}
      <footer className="portal-footer">
        <p>&copy; {new Date().getFullYear()} Colson Hotel Group. All rights reserved. Dev Portal v1.0.0</p>
      </footer>
    </div>
  )
}

export default App
