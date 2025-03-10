import React from 'react';
import { Input } from '@/components/ui/input';
import { useKeywords } from '@/hooks/use-automation';
import { useMutationDataState } from '@/hooks/use-mutation-data';
import { useQueryAutomation } from '@/hooks/user-queries';
import { X } from 'lucide-react';

// Define the Props type
interface Props {
  id: string;
}

// Define the Keywords component
export const Keywords: React.FC<Props> = ({ id }) => {
  // Extract necessary values from hooks
  const { onValueChange, keyword, onKeyPress, deleteMutation } = useKeywords(id);
  const { latestVariable } = useMutationDataState(['add-keyword']);
  const { data } = useQueryAutomation(id);

  return (
    <div className="bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl">
      <p className="text-sm text-text-secondary">
        Add words that trigger automations
      </p>
      <div className="flex flex-wrap justify-start gap-2 items-center">
        {/* Render existing keywords */}
        {data?.data?.keywords?.map((word) => (
          word.id !== latestVariable?.variables?.id && (
            <div
              className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full"
              key={word.id}
            >
              <p>{word.word}</p>
              <X
                className="cursor-pointer"
                onClick={() => deleteMutation(word.id)}
                size={16}
              />
            </div>
          )
        ))}

        {/* Render the latest variable if its status is 'pending' */}
        {latestVariable?.status === 'pending' && (
          <div className="bg-background-90 flex items-center gap-x-2 capitalize text-text-secondary py-1 px-4 rounded-full">
            <p>{latestVariable.variables.keyword}</p>
          </div>
        )}

        {/* Input field for adding new keywords */}
        <Input
          placeholder="Add keyword..."
          style={{
            width: `${Math.min(Math.max((keyword?.length || 10), 2), 50)}ch`,
          }}
          value={keyword}
          className="p-0 bg-transparent ring-0 border-none outline-none"
          onChange={onValueChange}
          onKeyUp={onKeyPress}
        />
      </div>
    </div>
  );
};

export default Keywords;
