import { Project } from "../Models/ProjectModel.js";
import { Client } from "./../Models/ClientModel.js";

export const addProjectController = async (req, res) => {
  try {
    const { image, name, description } = req.body;
    const project = new Project({
      image,
      name,
      description,
    });

    await project.save();
    res.status(201).json({
      message: "Project Added Successfully!",
      error: false,
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      message: error.messsage,
      success: false,
      error: true,
    });
  }
};

export const addClientController = async (req, res) => {
  try {
    const { image, name, description, designation } = req.body;
    const client = new Client({
      image,
      name,
      description,
      designation,
    });
    await client.save();
    res.status(200).json({
      message: "Client Created Successfully!",
      success: true,
      error: false,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      success: false,
      error: true,
    });
  }
};

export const getAllClientData = async (req, res) => {
  try {
    const data = await Client.find();
    res.status(200).json({
      message: "Client Data delivered Successfully!",
      success: true,
      error: false,
      data,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

export const getAllProjectData = async (req, res) => {
  try {
    const data = await Project.find();
    res.status(200).json({
      message: "Project Data delivered Successfully",
      error: false,
      success: true,
      data,
    });
  } catch (err) {
    res.status(400).json({
      error: true,
      success: false,
      message: err.message,
    });
  }
};
