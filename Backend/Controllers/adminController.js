import { Project } from "../Models/ProjectModel.js";
import { Client } from "./../Models/ClientModel.js";
import { Subscriber } from "./../Models/SubscriberModel.js";
import { Contact } from "./../Models/ContactModel.js";

export const addProjectController = async (req, res) => {
  try {
    const { image, name, description } = req.body;
    const isExisting = await Project.findOne({ image, name, description });
    if (isExisting) {
      return res.status(409).json({
        message: "Project With specified data already exist",
        error: true,
        success: false,
      });
    }
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
    const isExisting = await Client.findOne({
      image,
      name,
      description,
      designation,
    });
    if (isExisting) {
      return res.status(409).json({
        message: "Client with the specifiied data already exist",
        success: false,
        error: true,
      });
    }
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
    console.log("Reached the function call")
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

export const deleteItem = async (req, res) => {
  try {
    const { id, type } = req.body;
    let model = null;
    if (type === "sub") {
      model = Subscriber;
    } else if (type === "con") {
      model = Contact;
    } else if (type === "client") {
      model = Client;
    } else if (type === "project") {
      model = Project;
    } else {
      model = null;
    }

    if (model) {
      const resp = await model.findByIdAndDelete(id);
      return res.status(200).json({
        message: "Deleted Successfully",
        success: true,
        error: false,
      });
    }
  } catch (error) {
    res.status(400).json({
      message: "Error in Deleting Item " + error.message,
      success: false,
      error: true,
    });
  }
};
