import {motion} from 'framer-motion';
import {TECH_STACK} from '@/data/home';
import {fadeUp} from '@/utils/animations';

export const TechStackCard = () => (
  <motion.div
    animate="visible"
    className="col-span-1 row-span-1 md:col-span-3 md:row-span-3"
    custom={3}
    initial="hidden"
    variants={fadeUp}
  >
    <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-6">
      <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-muted-foreground">
        Tech Stack
      </h3>
      <div className="space-y-4">
        {TECH_STACK.map((item) => (
          <div className="flex items-center gap-3" key={item.label}>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-lg">
              <span aria-hidden="true">{item.emoji}</span>
            </div>
            <div>
              <div className="text-sm font-medium">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.sub}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </motion.div>
);
