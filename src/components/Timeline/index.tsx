import { type FC } from "react";

import DateHelper from "@/helpers/dateHelper";

import { HistoryEntry } from "@/types/code";

interface TimelineProps {
  history: HistoryEntry[]
}

export const TimelineComponent: FC<TimelineProps> = ({ history }) => {
  return (
    <ol className="border-s border-neutral-300 dark:border-neutral-500">
      {
        history?.map((entry: HistoryEntry) => {
          const date = new DateHelper(entry.createdAt);

          return (
            <li key={entry.id}>
              <div className="flex-start flex items-center pt-3">
                <div
                  className="-ms-[5px] me-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                <p className="text-sm text-neutral-500 ">
                  {date.formatDateWithHours()}
                </p>
              </div>
              <div className="mb-6 ms-4 mt-2">
                <h4 className="mb-1.5 text-xl font-semibold">{entry.title}</h4>
                <p className="mb-3 text-neutral-500 ">
                  {entry.description}
                </p>
              </div>
            </li>
          )
        })
      }
    
  </ol>
  )
}

export default TimelineComponent;