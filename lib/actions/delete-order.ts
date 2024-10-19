'use server';

export default async function deleteOrder(prevState: any, formData: FormData) {
  const orderId = formData.get('orderId') as string;

  const response = await fetch(
    `https://apis.codante.io/api/orders-api/orders/${orderId}`,
    {
      method: 'DELETE',
    }
  );

  if (!response.ok) {
    return {
      error: true,
      message: 'Erro ao deletar o pedido!',
    };
  } else {
    return {
      error: false,
      message: 'Pedido deletado com sucesso!',
    };
  }
}
