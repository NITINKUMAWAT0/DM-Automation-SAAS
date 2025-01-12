import { ChevronRight, PencilIcon } from 'lucide-react';
import React from 'react';
import ActivateAutomationButton from '../../activate-automation-button';

type Props = {
  id?: string;
  title?: string; // Added a prop for the automation title
};

const AutomationBreadCrumb = ({ id, title = "Untitled Automation" }: Props) => {
  return (
    <div className="rounded-full w-full p-5 bg-[#18181B1A] flex justify-between items-center">
      {/* Breadcrumb section */}
      <div className="flex items-center gap-x-3 min-w-0">
        <p className="text-[#9B9CA0]">Automations</p>
        <ChevronRight color="#9B9CA0" />
        <span className="flex gap-x-3 items-center min-w-0">
          <p className="text-[#9B9CA0] truncate" title={title}>
            {title}
          </p>
          <button
            className="cursor-pointer hover:opacity-75 duration-100 transition mr-4"
            aria-label="Edit automation title"
          >
            <PencilIcon size={14} />
          </button>
        </span>
      </div>
      
      {/* Right section */}
      <div className="flex items-center gap-x-5 ml-auto">
        <p className="hidden md:block text-text-secondary/60 text-sm truncate min-w-0">
          All states are automatically saved
        </p>
        <p className="text-text-secondary text-sm truncate min-w-0">Changes Saved</p>
      </div>

      {/* Activate button */}
      <ActivateAutomationButton id={id ||''} />
    </div>
  );
};

export default AutomationBreadCrumb;
