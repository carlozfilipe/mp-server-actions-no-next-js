import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { LoaderIcon } from 'lucide-react';
import toast from 'react-hot-toast';

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <div className="animate-spin">
          <LoaderIcon className="w-4 h-4 animate-spin" />
        </div>
      ) : (
        'Cadastrar'
      )}
    </Button>
  );
}
