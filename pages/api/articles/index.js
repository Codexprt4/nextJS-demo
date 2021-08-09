import { articles } from "../../../data";

/**
 * These data can be from DB or Static file
 */

export default function handler(req, res) {
  res.status(200).json(articles);
}
