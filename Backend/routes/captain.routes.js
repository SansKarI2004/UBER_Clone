const express=require('express');
const router=express.Router();

const captainController = require('../controllers/captain.controller')
const authMiddleware=require('../middlewares/auth.middleware')
const { body, validationResult } = require('express-validator');
router.post(
    "/register",
    [
      // Email validation
      body("email")
        .isEmail()
        .withMessage("Invalid Email"),
  
      // Full name validation
      body("fullname.firstname")
        .isLength({ min: 3 })
        .withMessage("First name must be at least 3 characters"),
      body("fullname.lastname")
        .isLength({ min: 3 })
        .withMessage("Last name must be at least 3 characters"),
  
      // Password validation
      body("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
  
      // Vehicle details validations
      body("vehicle.color")
        .isLength({ min: 3 })
        .withMessage("Color must be at least 3 characters"),
      body("vehicle.plate")
        .isLength({ min: 3 })
        .withMessage("Plate must be at least 3 characters"),
      body("vehicle.capacity")
        .isInt({ min: 1 })
        .withMessage("Capacity must be at least 1"),
      body("vehicle.vehicleType")
        .isIn(["car", "motorcycle", "auto"])
        .withMessage("Invalid Vehicle Type"),
    ],
     
    captainController.registerCaptain
  );


  router.post('/login', [
    body('email')
      .isEmail()
      .withMessage('Invalid Email'),
  
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters'),
  ], async (req, res, next) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      // Return the errors if validation fails
      return res.status(400).json({ errors: errors.array() });
    }
  
    // If validation passes, proceed to the controller
    try {
      await captainController.loginCaptain(req, res);
    } catch (error) {
      next(error);  // If there's any error in the controller, pass it to the next error handler
    }
  });

router.post('/profile',authMiddleware.authCaptain,captainController.getCaptainProfile)

router.get('/logout',authMiddleware.authCaptain,captainController.logoutCaptain)




module.exports=router;
 