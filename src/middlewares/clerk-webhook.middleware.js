import { Webhook } from 'svix';

export const verifyClerkWebhook = async (req, res, next) => {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    console.log('error signing secret');
    return res.status(500).json({
      success: false,
      message: 'Error: Please add SIGNING_SECRET from Clerk Dashboard to .env',
    });
  }

  const wh = new Webhook(SIGNING_SECRET);

  const headers = req.headers;
  const payload = req.body;

  const svix_id = headers['svix-id'];
  const svix_timestamp = headers['svix-timestamp'];
  const svix_signature = headers['svix-signature'];

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return void res.status(400).json({
      success: false,
      message: 'Error: Missing svix headers',
    });
  }

  try {
    req.evt = wh.verify(JSON.stringify(payload), {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
    next();
  } catch (err) {
    console.log('Error: Could not verify webhook:', err.message);
    return void res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
