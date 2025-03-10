'use client';

import deleteOrder from '@/lib/actions/delete-order';
import { Button } from './ui/button';
import { Trash } from 'lucide-react';
import { Order } from '@/lib/types';
import { useFormState } from 'react-dom';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type DeleteButtonProps = {
  order: Order;
};

export default function DeleteButton({ order }: DeleteButtonProps) {
  const [state, formAction] = useFormState(deleteOrder, null);
  const router = useRouter();

  useEffect(() => {
    if (state?.error) {
      toast.error(state.message);
    }
    if (!state?.error && state?.message) {
      toast.success(state.message);
      router.refresh();
    }
  }, [state, state?.error, state?.message, router]);

  return (
    <form action={formAction}>
      <input type="hidden" name="orderId" value={order?.id} />
      <Button variant="ghost" className="">
        <Trash className="w-4 text-red-500" />
      </Button>
    </form>
  );
}
