import React from 'react';
import { useListener } from '@/hooks/use-automation';
import TriggerButton from '../trigger-button';
import { AUTOMATION_LISTENERS } from '@/constants/automation';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Loader from '../../loader';

type Props = {
  id: string;
};

const ThenAction = ({ id }: Props) => {
  const {
    onSetListener,
    listener: Listener,
    onFormSubmit,
    register,
    isPending,
  } = useListener(id);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await onFormSubmit();
  };

  return (
    <TriggerButton label="Then">
      <div className="flex flex-col gap-y-4">
        {AUTOMATION_LISTENERS.map((listener) => (
          <div
            key={listener.id}
            onClick={() => onSetListener(listener.type)}
            className={cn(
              Listener === listener.type
                ? 'bg-gradient-to-br from-[#3352CC] to-[#1C2D70]'
                : 'bg-background-80',
              'p-3 rounded-xl flex flex-col gap-y-2 cursor-pointer hover:opacity-80 transition duration-100'
            )}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onSetListener(listener.type)}
          >
            <div className="flex gap-x-2 items-center">
              {listener.icon}
              <p className="font-medium">{listener.label}</p>
            </div>
            <p className="text-sm text-text-secondary">{listener.description}</p>
          </div>
        ))}

        {Listener && (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-y-3"
          >
            <Textarea
              placeholder={
                Listener === 'SMARTAI'
                  ? 'Add a prompt for your smart AI to use...'
                  : 'Add a message you want to send to your customers'
              }
              {...register('prompt')}
              className="bg-background-80 outline-none border-none ring-0 focus:ring-0 p-3 rounded-md"
            />
            <Input
              {...register('reply')}
              placeholder="Add a reply for comments (Optional)"
              className="bg-background-80 outline-none border-none ring-0 focus:ring-0 p-3 rounded-md"
            />
            <Button
              type="submit"
              disabled={isPending}
              className="bg-gradient-to-br from-[#3352CC] to-[#1C2D70] text-white font-medium w-full py-2 rounded-md"
            >
              <Loader state={isPending}>Add Listener</Loader>
            </Button>
          </form>
        )}
      </div>
    </TriggerButton>
  );
};

export default ThenAction;
