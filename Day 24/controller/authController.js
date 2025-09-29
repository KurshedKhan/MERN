const User = require("../models/user");
const bcrypt = require("bcryptjs");

const { check, validationResult } = require("express-validator");
exports.getLogin = (req, res, next) => {
  res.render("auth/login", {
    isLoggedIn: false,
    errorMessage: [],
    oldInput: { email: "" },
    user : {}
  });
};

exports.getSignUp = (req, res, next) => {
  res.render("auth/signUp", {
    isLoggedIn: false,
    errorMessage: [],
    oldInput: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      userType: "",
    },
    user : {}
  });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(422).render("auth/login", {
      isLoggedIn: false,
      errorMessage: ["user does not exist"],
      oldInput: { email },
      user : {}
    });
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    return res.status(422).render("auth/login", {
      isLoggedIn: false,
      errorMessage: ["Invalid Password"],
      oldInput: { password },
      user : {}
    });
  }
  req.session.isLoggedIn = true;
  req.session.user = user;
  await req.session.save();
  res.redirect("/");
};

exports.postSignUp = [
  check("firstName")
    .notEmpty()
    .withMessage("first name is required")
    .trim()
    .isLength({ min: 3 })
    .withMessage("First name must be at least 3 character long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("First name can only contain latters"),

  check("lastName")
    .notEmpty()
    .withMessage("last name is required")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Last name must be at least 3 character long")
    .matches(/^[a-zA-Z\s]+$/)
    .withMessage("Last name can only contain latters"),
  check("email")
    .isEmail()
    .withMessage("Please Enter a valid email")
    .normalizeEmail(),

  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long")
    .matches(/[a-z]/)
    .withMessage("Password must contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password must contain at least one UpperCase letter")
    .matches(/[0-9]/)
    .withMessage("Password must contain at least one number")
    .matches(/[!@#$%*(),.?]/)
    .withMessage("Password must contain at least one special character")
    .trim(),

  check("ConfirmPassword")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password do not match");
      }
      return true;
    }),

  check("userType")
    .notEmpty()
    .withMessage("user type is required")
    .isIn(["Guest", "Host"])
    .withMessage("Invaild user type"),

  check("terms")
    .notEmpty()
    .withMessage("please accept the terms and conditions")
    .custom((value, { req }) => {
      if (value !== "on") {
        throw new Error("please accept the terms and conditions");
      }
      return true;
    }),

  (req, res, next) => {
    const { firstName, lastName, email, password, userType } = req.body;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signUp", {
        isLoggedIn: false,
        errorMessage: errors.array().map((error) => error.msg),
        oldInput: {
          firstName,
          lastName,
          email,
          password,
          userType,
        },
        user : {}
      });
    }

    bcrypt
      .hash(password, 12)
      .then((hashPassword) => {
        const user = new User({
          firstName,
          lastName,
          email,
          password: hashPassword,
          userType,
        });
        return user.save();
      })
      .then(() => {
        res.redirect("/login");
      })
      .catch((error) => {
        return res.status(422).render("auth/signUp", {
          isLoggedIn: false,
          errorMessage: [error.message],
          oldInput: {
            firstName,
            lastName,
            email,
            password,
            userType,
          },
          user : {}
        });
      });
  },
];

exports.postLogout = (req, res, next) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};
