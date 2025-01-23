const Card = require("../models/cardSchema"); // Import the Card model
exports.createCard = async (req, res) => {
  try {
    console.log("request success");
    const { name, description, price, discount, image } = req.body;

    // Validate required fields
    if (!name || !price || !image ) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields: name, price, image",
      });
    }

    // Create new card
    const newCard = new Card({
      name,
      description,
      price,
      discount,
      image,
    });

    // Save card to the database
    const savedCard = await newCard.save();

    res.status(201).json({
      success: true,
      data: savedCard,
      message: "Card created successfully!",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};


// /**
//  * @desc    Get cards with filtering, sorting, and pagination
//  * @route   GET /api/cards
//  * @access  Public
//  */
 exports.getCards = async (req, res) => {
  try {

       console.log("req access");
        const data =await Card.find({});
        // console.log(data);
        res.status(200).json({
          msg:"ye le bhai",
          data
        })

//     // Extract query parameters
//     const {
//       page = 1, // Default page number
//       limit = 16, // Default number of items per page
//       sortBy = "price", // Default sort field
//       sortOrder = "asc", // Default sort order
//       minPrice, // Minimum price filter
//       maxPrice, // Maximum price filter
//     } = req.query;

//     // Build filter object
//     const filter = {};


//     if (minPrice || maxPrice) {
//       filter.price = {};
//       if (minPrice) filter.price.$gte = parseFloat(minPrice); // Greater than or equal to minPrice
//       if (maxPrice) filter.price.$lte = parseFloat(maxPrice); // Less than or equal to maxPrice
//     }

//     // Determine sorting order
//     const sortOptions = {};
//     sortOptions[sortBy] = sortOrder === "desc" ? -1 : 1;

//     // Pagination
//     const skip = (page - 1) * limit;
//     const totalCards = await Card.countDocuments(filter); // Get total count for the filters applied
//     const cards = await Card.find(filter)
//       .sort(sortOptions)
//       .skip(skip)
//       .limit(parseInt(limit));

//     // Response
//     res.status(200).json({
//       success: true,
//       data: cards,
//       pagination: {
//         totalCards,
//         currentPage: parseInt(page),
//         totalPages: Math.ceil(totalCards / limit),
//         limit: parseInt(limit),
//       },
    // });
  } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Server error",
//       error: error.message,
//     });
  }
};


// module.exports = { getCards, createCard };
// /**
//  * @desc    Create a new card
//  * @route   POST /api/cards
//  * @access  Public
//  */
