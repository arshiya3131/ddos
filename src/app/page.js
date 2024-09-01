import AlertSection from './components/alerts';
import BlockIPSection from './components/ipblock';
import Navbar from './components/Navbar';
import RateLimitSection from './components/ratelimiter';
import TrafficAnalysis from './components/traffic';
import TrafficMonitor from './components/trafficmonitor';

export default function Home() {
  return (
    <div>
      <Navbar />
      <TrafficAnalysis />
      
      <AlertSection/>
      <BlockIPSection/>
      <RateLimitSection/>
      <TrafficMonitor/>
    </div>
  );
}
