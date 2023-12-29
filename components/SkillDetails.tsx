import React from "react";
import { MotionCard, MotionDiv } from "./MotionElements";
import { ISkill } from "../data";

interface ISkillsProps {
  skills: ISkill[];
}

export default function SkillDetails({ skills }: ISkillsProps) {
  return (
    <MotionCard
      radius="none"
      className="dark:bg-slate-900 p-4 grid grid-cols-5"
    >
      {skills.map(({ Icon, title }, idx) => (
        <MotionDiv
          variants={{
            hidden: { opacity: 0, x: 10 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate="visible"
          exit={{ opacity: 0, x: 10 }}
          transition={{
            delay: idx * 0.25 + 1,
            duration: 0.5,
          }}
          key={idx}
          className="group flex items-center flex-col"
        >
          <Icon
            className={`w-12 h-12 p-2 bg-none text-slate-400 text-3xl group-hover:text-slate-950 group-hover:dark:text-cyan-300 group-hover:dark:border-cyan-300 group-hover:shadow-xl transition-all duration-300 dark:hover:shadow-[2.0px_2.0px_20.0px_rgb(255,255,255,0.18)]`}
          />
          <p
            className={`text-slate-600 mt-1 mb-2 group-hover:text-slate-950 group-hover:dark:text-cyan-300`}
          >
            {title}
          </p>
        </MotionDiv>
      ))}
    </MotionCard>
  );
}
