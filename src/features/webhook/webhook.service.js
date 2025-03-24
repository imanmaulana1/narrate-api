import { createUser, deleteUser, updateUser } from './webhook.repository.js';

export const processWebhookEvent = async (event) => {
  const { type, data } = event;
  try {
    let result;

    console.log(data)

    switch (type) {
      case 'user.created':
        result = await createUser(data);
        console.log(`User created successfully`);
        break;
      case 'user.updated':
        result = await updateUser(data);
        console.log('User updated succesfully');
        break;
      case 'user.deleted':
        result = await deleteUser(data.id);
        console.log('User deleted successfully');
        break;

      default:
        console.log(`Unhandled event type: ${type}`);
    }

    return { success: true, message: 'Webhook processed', data: result };
  } catch (error) {
    console.error('Error processing webhook event:', error);
    return { success: false, message: 'Failed to process webhook' };
  }
};
