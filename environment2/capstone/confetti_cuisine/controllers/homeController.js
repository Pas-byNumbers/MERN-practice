exports.showCourses = (req, res) => {
  res.render("courses", {
    offeredCourses: courses,
  });
};
exports.showSignUp = (req, res) => {
  res.render("contact");
};
exports.postedSignUpForm = (req, res) => {
  res.render("thanks");
};
exports.renderHomePage = (req, res) => {
  res.render("index");
};

var courses = [
  {
    title: "Event Driven Cakes",
    cost: 50,
  },
  {
    title: "Asynchronous Artichoke",
    cost: 25,
  },
];
