import { processWebhookEvent } from './webhook.service.js';

export const handleWebhook = async (req, res) => {
  try {
    const { evt } = req;

    const result = await processWebhookEvent(evt);

    return res.status(200).json(result);
  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(500).json({
      success: false,
      message: 'Error processing webhook',
    });
  }
};
