const Page = require('../models/Page')

exports.createPage = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newPage = new Page({ title, content });
    await newPage.save();
    res.status(201).json({ message: 'Page created successfully', page: newPage });
  } catch (error) {
    res.status(500).json({ message: 'Error creating page', error: error.message });
  }
};

exports.getAllPages = async (req, res) => {
  try {
    const pages = await Page.find();
    res.status(200).json({ message: 'Pages fetched successfully', pages });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching pages', error: error.message });
  }
};

exports.getPageById = async (req, res) => {
  try {
    const page = await Page.findById(req.params.id);
    if (!page) return res.status(404).json({ message: 'Page not found' });
    res.status(200).json({ message: 'Page fetched successfully', page });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching page', error: error.message });
  }
};

exports.updatePage = async (req, res) => {
  try {
    const updatedPage = await Page.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedPage) return res.status(404).json({ message: 'Page not found' });
    res.status(200).json({ message: 'Page updated successfully', page: updatedPage });
  } catch (error) {
    res.status(500).json({ message: 'Error updating page', error: error.message });
  }
};

exports.deletePage = async (req, res) => {
  try {
    const deletedPage = await Page.findByIdAndDelete(req.params.id);
    if (!deletedPage) return res.status(404).json({ message: 'Page not found' });
    res.status(200).json({ message: 'Page deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting page', error: error.message });
  }
};
