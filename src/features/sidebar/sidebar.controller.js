import asyncHandler from 'express-async-handler';
import { getSidebarContent } from './sidebar.service.js';

export const getSidebar = asyncHandler(async (req, res) => {
  const { id: currentId } = req.user;

  const data = await getSidebarContent(currentId);

  res.status(200).json({
    success: true,
    message: 'Sidebar fetched successfully',
    data,
  });
});
