import {motion} from 'framer-motion';
import {twJoin} from 'tailwind-merge';
import {IMPACT_METRICS} from '@/data/home';
import {fadeUp} from '@/utils/animations';

export const ImpactMetricsCard = () => (
  <motion.div
    animate="visible"
    className="col-span-1 row-span-1 md:col-span-4 md:row-span-3"
    custom={4}
    initial="hidden"
    variants={fadeUp}
  >
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">
        Impact Metrics
      </h3>
      <div className="space-y-6">
        {IMPACT_METRICS.map((metric, index) => (
          <div className={twJoin(index > 0 && 'border-t border-border pt-6')} key={metric.value}>
            <div className="mb-2 flex items-baseline gap-2">
              <div className="text-4xl font-bold">
                {metric.value}
                <span className="sr-only">:</span>
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
            <p className="text-sm text-muted-foreground">{metric.description}</p>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);
