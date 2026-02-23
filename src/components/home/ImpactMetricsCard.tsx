import {motion} from 'framer-motion';
import {ANIMATION_ORDER, IMPACT_METRICS} from '@/data/home';
import {fadeUp} from '@/utils/animations';

export const ImpactMetricsCard = () => (
  <motion.div
    animate="visible"
    className="col-span-1 row-span-1 md:col-span-7 md:row-span-3"
    custom={ANIMATION_ORDER.impactMetrics}
    initial="hidden"
    variants={fadeUp}
  >
    <section
      aria-label="Impact metrics at ezCater"
      className="flex h-full flex-col rounded-3xl border border-border bg-card p-6"
    >
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Impact</h3>
        <span className="rounded-lg bg-secondary px-3 py-1 font-medium">ezCater</span>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-6">
        {IMPACT_METRICS.map((metric) => (
          <div key={metric.label}>
            <div className="mb-1 text-4xl font-bold text-brand">
              {metric.value}
              <span className="sr-only"> {metric.label.toLowerCase()}</span>
            </div>
            <div aria-hidden="true" className="mb-2 font-medium">
              {metric.label}
            </div>
            <p className="text-muted-foreground">{metric.description}</p>
          </div>
        ))}
      </div>
    </section>
  </motion.div>
);
