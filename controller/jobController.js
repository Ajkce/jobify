const createJob = async (req, res) => {
  res.send("Create Job");
};
const getAllJobs = async (req, res) => {
  res.send("get all jobs");
};
const updateJob = async (req, res) => {
  res.send("update Job");
};
const deleteJob = async (req, res) => {
  res.send("delete Job");
};
const showStats = async (req, res) => {
  res.send("Show stats");
};

export { createJob, getAllJobs, updateJob, deleteJob, showStats };
