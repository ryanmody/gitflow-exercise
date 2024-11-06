import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

//Get all categories
const getAllMonths = async (_req, res) => {
  try {
    const categories = await knex("months")
        .select("*");

    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json(`${error}`);
  }
};

export { getAllMonths };