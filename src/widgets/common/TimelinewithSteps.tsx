'use client';
import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView
} from 'framer-motion';
import TitleBar from '@components/TitleBar';

interface Step {
  title: string;
  description: string;
  time:string;
}

const steps: Step[] = [
  {
    title: 'Hackathon Registration',
    time:"8:30 AM",
    description: 'Hackathon Registration starts. Get ready for an exciting day!'
  },
  {
    title: 'Inauguration',
    time:"8:30 AM",
    description: 'Official inauguration of the event with keynote speakers.'
  },
  {
    title: 'Lunch Break',
    time:"8:30 AM",
    description: 'Enjoy a delicious lunch and network with fellow participants.'
  },
  {
    title: 'Cultural Events',
    time:"8:30 AM",
    description: '3:00 PM - Relax and enjoy cultural performances and entertainment.'
  }
];

const TimelineWithSteps: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div
      ref={containerRef}
      className="w-screen flex flex-col justify-center relative overflow-hidden px-[5vw] gap-[50px] pb-[10vh]"
    >
        <TitleBar title='Timeline'/>
      <motion.div
        className="absolute left-[10px] lg:left-1/4 top-[130px] bottom-[50px] w-1 bg-yellow-400"
        style={{ scaleY, originY: 0 }}
      />
      {steps.map((step, index) => (
        <TimelineItem key={index} step={step} index={index} progress={scrollYProgress} />
      ))}
    </div>
  );
};

interface TimelineItemProps {
  step: Step;
  index: number;
  progress: any;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ step, index, progress }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(itemRef, { margin: '-50% 0px -50% 0px' });

  const yRange = useTransform(progress, [0, 1], [50, -50]);

  return (
    <motion.div
      ref={itemRef}
      className="flex pl-[20px] lg:flex-row flex-col w-full items-center mb-0 px-10 space-y-2 lg:space-y-0"
      style={{ y: yRange }}
    >
      <div className="lg:px-[60px] text-right">
        <motion.h2
          initial={{ opacity: 1, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="text-4xl font-bold text-gray-600"
        >
{step?.time}
        </motion.h2>
      </div>
      <div className="lg:w-1/2 flex items-start lg:pl-20">
        <div>
          <motion.h3
            initial={{ opacity: 1, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="text-2xl font-semibold"
          >
            {step.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 1, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
            className="mt-1 text-lg text-gray-600"
          >
            {step.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineWithSteps;
