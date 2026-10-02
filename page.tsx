import {
  ArrowUpRight,
  BarChart3,
  Bell,
  ChevronRight,
  CircleDollarSign,
  CreditCard,
  Gauge,
  LayoutDashboard,
  LockKeyhole,
  Menu,
  Network,
  PiggyBank,
  Plus,
  Repeat2,
  Settings,
  Sparkles,
  WalletCards,
  Zap
} from "lucide-react";

const spend = [
  ["Housing", "£320", "37%"],
  ["Food", "£240", "28%"],
  ["Transport", "£110", "13%"],
  ["Subscriptions", "£82", "9%"],
  ["Other", "£118", "13%"]
];

const activity = [
  ["Salary", "+£2,840", "Income", "Today"],
  ["Rent", "−£320", "Housing", "Yesterday"],
  ["Supermarket", "−£64.20", "Food", "Yesterday"],
  ["Streaming", "−£14.99", "Subscription", "2 days ago"],
  ["Savings Vault", "−£200", "Savings", "3 days ago"]
];

function NavItem({ icon: Icon, label, active = false }: { icon: React.ElementType; label: string; active?: boolean }) {
  return (
    <div className={`nav-item ${active ? "active" : ""}`}>
      <Icon size={18} />
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">M</div>
          <div>
            <div className="brand-name">FlowWallet</div>
            <div className="brand-sub">powered by Monad</div>
          </div>
        </div>

        <nav>
          <NavItem icon={LayoutDashboard} label="Overview" active />
          <NavItem icon={WalletCards} label="Wallet" />
          <NavItem icon={BarChart3} label="Analytics" />
          <NavItem icon={Sparkles} label="Smart Actions" />
          <NavItem icon={Repeat2} label="Automations" />
        </nav>

        <div className="nav-divider" />
        <nav>
          <NavItem icon={Settings} label="Settings" />
          <NavItem icon={LockKeyhole} label="Security" />
        </nav>

        <div className="sidebar-bottom">
          <div className="network-card">
            <div className="network-dot" />
            <div>
              <strong>Monad Testnet</strong>
              <span>Connected</span>
            </div>
          </div>
          <div className="demo-pill">DEMO MODE</div>
        </div>
      </aside>

      <section className="content">
        <header className="topbar">
          <button className="mobile-menu" aria-label="Open menu"><Menu size={20} /></button>
          <div>
            <div className="eyebrow">PERSONAL FINANCE</div>
            <h1>Good morning, Alex</h1>
          </div>
          <div className="top-actions">
            <button className="icon-button"><Bell size={19} /></button>
            <div className="avatar">A</div>
          </div>
        </header>

        <div className="dashboard">
          <section className="hero-card">
            <div>
              <div className="muted">Total balance</div>
              <div className="balance">£4,280.42</div>
              <div className="positive"><ArrowUpRight size={15} /> 3.8% this month</div>
            </div>
            <div className="hero-network">
              <Network size={16} />
              <span>Monad</span>
              <span className="network-status">Live</span>
            </div>
          </section>

          <div className="stat-grid">
            <div className="card stat-card">
              <div className="card-icon"><CircleDollarSign size={19} /></div>
              <div className="muted">Available</div>
              <div className="stat-value">£1,850.00</div>
              <div className="stat-caption">Ready to spend</div>
            </div>
            <div className="card stat-card">
              <div className="card-icon"><PiggyBank size={19} /></div>
              <div className="muted">Savings</div>
              <div className="stat-value">£2,430.42</div>
              <div className="stat-caption">18.4% savings rate</div>
            </div>
            <div className="card stat-card">
              <div className="card-icon"><CreditCard size={19} /></div>
              <div className="muted">Spent this month</div>
              <div className="stat-value">£870.00</div>
              <div className="stat-caption">£142 above average</div>
            </div>
            <div className="card stat-card">
              <div className="card-icon"><Gauge size={19} /></div>
              <div className="muted">Financial health</div>
              <div className="stat-value">82<span className="score-suffix">/100</span></div>
              <div className="health-bar"><span /></div>
            </div>
          </div>

          <div className="two-col">
            <section className="card chart-card">
              <div className="section-head">
                <div>
                  <div className="muted">Cash flow</div>
                  <h2>£1,970 net this month</h2>
                </div>
                <select defaultValue="6 months">
                  <option>6 months</option>
                  <option>12 months</option>
                </select>
              </div>
              <div className="chart">
                <div className="chart-grid">
                  <span>£3k</span><span>£2k</span><span>£1k</span><span>£0</span>
                </div>
                <svg viewBox="0 0 620 210" preserveAspectRatio="none" aria-label="Cash flow chart">
                  <defs>
                    <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#8368ff" stopOpacity=".22" />
                      <stop offset="100%" stopColor="#8368ff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d="M0 170 C65 165 75 130 130 140 S190 105 245 120 S315 78 370 95 S430 55 485 72 S545 38 620 48 L620 210 L0 210 Z" fill="url(#area)" />
                  <path d="M0 170 C65 165 75 130 130 140 S190 105 245 120 S315 78 370 95 S430 55 485 72 S545 38 620 48" fill="none" stroke="#7057e8" strokeWidth="4" strokeLinecap="round" />
                </svg>
                <div className="months"><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span></div>
              </div>
            </section>

            <section className="card insight-card">
              <div className="insight-label"><Sparkles size={17} /> SMART INSIGHT</div>
              <h2>You can safely move £200 into savings.</h2>
              <p>Your balance has stayed above your normal weekly spending buffer for 14 days.</p>
              <div className="insight-meta">
                <div><span>Recommended</span><strong>£200</strong></div>
                <div><span>Settlement</span><strong>&lt; 1 min</strong></div>
                <div><span>Gas</span><strong>Sponsored</strong></div>
              </div>
              <button className="primary-button">Review action <ChevronRight size={17} /></button>
            </section>
          </div>

          <div className="two-col lower">
            <section className="card">
              <div className="section-head">
                <div>
                  <div className="muted">Spending</div>
                  <h2>£870 this month</h2>
                </div>
                <button className="text-button">View analytics <ArrowUpRight size={15} /></button>
              </div>
              <div className="spend-list">
                {spend.map(([name, amount, percent]) => (
                  <div className="spend-row" key={name}>
                    <div className="spend-name"><span className="spend-dot" />{name}</div>
                    <div className="spend-track"><span style={{ width: percent }} /></div>
                    <strong>{amount}</strong>
                  </div>
                ))}
              </div>
            </section>

            <section className="card">
              <div className="section-head">
                <div>
                  <div className="muted">Recent activity</div>
                  <h2>Latest transactions</h2>
                </div>
                <button className="text-button">See all <ArrowUpRight size={15} /></button>
              </div>
              <div className="activity-list">
                {activity.map(([name, amount, category, time]) => (
                  <div className="activity-row" key={name + time}>
                    <div className="activity-icon"><WalletCards size={16} /></div>
                    <div className="activity-main"><strong>{name}</strong><span>{category}</span></div>
                    <div className="activity-amount"><strong className={amount.startsWith("+") ? "positive-text" : ""}>{amount}</strong><span>{time}</span></div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className="action-banner">
            <div className="action-copy">
              <div className="action-icon"><Zap size={19} /></div>
              <div>
                <strong>Make your money programmable</strong>
                <span>Create a rule such as “When I get paid, save 10%.”</span>
              </div>
            </div>
            <button className="secondary-button"><Plus size={17} /> Create automation</button>
          </section>
        </div>
      </section>
    </main>
  );
}
