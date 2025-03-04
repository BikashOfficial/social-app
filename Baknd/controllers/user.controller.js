const userModel = require("../models/user.model");
const userService = require("../services/user.service");

// module.exports.registerUser = async (req, res) => {
//   try {
//     const { name, email, password,username } = req.body;
//     // Validate inputs
//     if (!name || !email || !password || !username) {
//       return res
//         .status(400)
//         .json({ error: "Please provide all required fields" });
//     }
//     // Check if email already exists
//     const existingUser = await userModel.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: "Email already exists" });
//     }
//     // const existingUsername = await userModel.findOne({ username });
//     // if (existingUser) {
//     //   return res.status(400).json({ error: "Email already exists" });
//     // }

//     const hashedPassword = await userModel.hashPassword(password);

//     const user = await userService.createUser({
//       name,
//       email,
//       password: hashedPassword,
//       username,
//     });

//     console.log(user);

//     const token = user.generateAuthToken();

//     res.cookie("token", token, {
//       httpOnly: true,
//       // secure: process.env.NODE_ENV === 'production', // Use secure in production
//       sameSite: "strict",
//       maxAge: 24 * 60 * 60 * 1000, // 24 hours
//     });

//     res.status(201).json({ token, user });
//   } catch (error) {
//     console.error("Registration error:", error);
//     res.status(500).json({ error: "An error occurred during registration" });
//   }
// };

module.exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, username } = req.body;
    
    // Validate inputs
    if (!name || !email || !password || !username) {
      return res.status(400).json({ error: "Please provide all required fields" });
    }

    // Check if email already exists
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ error: "Email already exists" });
    }

    // Check if username already exists
    const existingUsername = await userModel.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ error: "Username already taken" });
    }

    // Hash password
    const hashedPassword = await userModel.hashPassword(password);

    // Create user
    const user = await userService.createUser({
      name,
      email,
      password: hashedPassword,
      username,
    });

    // Generate token
    const token = user.generateAuthToken();

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    });

    // Send response
    res.status(201).json({ 
      message: "Registration successful",
      token, 
      user 
    });

  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ 
      error: error.message || "An error occurred during registration" 
    });
  }
};

module.exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Please provide all required fields" });
    }

    const user = await userModel.findOne({ email }).select("+password");

    if (!user) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = user.generateAuthToken();

    // res.cookie('token', token);

    res.cookie("token", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === 'production', // Use secure in production
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    res.status(200).json({ token, user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "An error occurred during login" });
  }
};

module.exports.getProfile = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports.logoutUser = async (req, res) => {
  //   res.clearCookie("token");

  //   res.status(200).json({ message: "Logged out successfully" });

  try {
    res.clearCookie("token", {
      httpOnly: true,
      //   secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(500).json({ error: "Logout failed" });
  }
};


module.exports.checkUsername = async (req, res) => {
  try {
    const username = req.params.value;
    const existingUser = await userModel.findOne({ name: username });
    
    res.json({
      available: !existingUser,
      message: existingUser ? 'Username is taken' : 'Username is available'
    });
  } catch (error) {
    console.error('Username check error:', error);
    res.status(500).json({ error: 'Error checking username availability' });
  }
};


// module.exports.updateProfile = async (req, res) => {
//   try {
//     const { username, name, bio } = req.body;
//     const userId = req.user._id;

//     const updates = {};
//     if (username) updates.username = username;
//     if (name) updates.name = name;
//     if (bio) updates.bio = bio;

//     const updatedUser = await userModel.findByIdAndUpdate(
//       userId,
//       { $set: updates },
//       { new: true, runValidators: true }
//     );

//     if (!updatedUser) {
//       return res.status(404).json({ error: "User not found" });
//     }

//     res.status(200).json({ user: updatedUser });
//   } catch (error) {
//     console.error("Profile update error:", error);
//     res.status(500).json({ error: "An error occurred while updating profile" });
//   }
// };

// module.exports.updateProfile = async (req, res) => {
//   try {
//       const { username, name, bio } = req.body;
//       const userId = req.user._id;

//       // Validate the updates
//       if (username) {
//           const existingUser = await userModel.findOne({ 
//               username, 
//               _id: { $ne: userId } 
//           });
//           if (existingUser) {
//               return res.status(400).json({ 
//                   error: "Username already taken" 
//               });
//           }
//       }

//       const updates = {};
//       if (username) updates.username = username;
//       if (name) updates.name = name;
//       if (bio !== undefined) updates.bio = bio;

//       const updatedUser = await userModel.findByIdAndUpdate(
//           userId,
//           { $set: updates },
//           { 
//               new: true, 
//               runValidators: true,
//               select: '-password' // Exclude password from response
//           }
//       );

//       if (!updatedUser) {
//           return res.status(404).json({ error: "User not found" });
//       }

//       res.status(200).json({ 
//           message: "Profile updated successfully",
//           user: updatedUser
//       });
//   } catch (error) {
//       console.error("Profile update error:", error);
//       res.status(500).json({ 
//           error: "An error occurred while updating profile" 
//       });
//   }
// };

module.exports.updateProfile = async (req, res) => {
  try {
      const { name, bio, username } = req.body;
      const userId = req.user._id;

      // Validate input
      if (!name && !bio && !username) {
          return res.status(400).json({ error: "No updates provided" });
      }

      const updates = {};
      if (name) updates.name = name;
      if (bio !== undefined) updates.bio = bio;
      if (username) {
          // Check if username is already taken
          const existingUser = await userModel.findOne({ 
              username, 
              _id: { $ne: userId } 
          });
          if (existingUser) {
              return res.status(400).json({ error: "Username already taken" });
          }
          updates.username = username;
      }

      const updatedUser = await userModel.findByIdAndUpdate(
          userId,
          { $set: updates },
          { 
              new: true,
              runValidators: true,
              select: '-password'
          }
      );

      if (!updatedUser) {
          return res.status(404).json({ error: "User not found" });
      }

      res.status(200).json({
          message: "Profile updated successfully",
          user: updatedUser
      });

  } catch (error) {
      console.error("Update error:", error);
      res.status(500).json({ 
          error: "An error occurred while updating profile"
      });
  }
};