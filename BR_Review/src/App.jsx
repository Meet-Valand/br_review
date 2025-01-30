

// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import logo from "./assets/Main_Logo.webp";
// import bg1 from "./assets/bg1.webp";
// import bg2 from "./assets/bg2.webp";
// import bg3 from "./assets/bg3.webp";
// import bg4 from "./assets/bg4.webp";
// import bg5 from "./assets/bg5.webp";
// import bg6 from "./assets/bg6.webp";
// import bg7 from "./assets/bg7.webp";
// import bg8 from "./assets/bg8.webp";
// import bg9 from "./assets/bg9.webp";
// import bg10 from "./assets/bg10.webp";

// function App() {
//   const [currentRating, setCurrentRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [emojiShower, setEmojiShower] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//    const bgImg = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10];
  
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/reviews") // Change to your backend URL
//       .then((response) => setReviews(response.data))
//       .catch((error) => console.error("Error fetching reviews:", error));
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImg.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleMouseEnter = (index) => setHoverRating(index);
//   const handleMouseLeave = () => setHoverRating(0);
//   const handleClick = (index) => {
//     setCurrentRating(index);
//     triggerEmojiShower(index);
//   };

//   const triggerEmojiShower = (rating) => {
//     let emoji;
//     switch (rating) {
//       case 1:
//         emoji = "😢";
//         break;
//       case 2:
//         emoji = "😟";
//         break;
//       case 3:
//         emoji = "😐";
//         break;
//       case 4:
//         emoji = "😊";
//         break;
//       case 5:
//         emoji = "🤩";
//         break;
//       default:
//         emoji = "";
//     }

//     const emojis = Array.from({ length: 20 }, () => ({
//       id: Math.random(),
//       emoji,
//       left: Math.random() * 100,
//     }));

//     setEmojiShower(emojis);
//     setTimeout(() => setEmojiShower([]), 2000);
//   };

//   const getMessage = (rating) => {
//     switch (rating) {
//       case 1:
//         return "😞 Sorry, we will try better next time!";
//       case 2:
//         return "😕 Thanks! We appreciate your feedback.";
//       case 3:
//         return "😊 Glad you liked it! We will improve more.";
//       case 4:
//         return "😁 Awesome! Thanks for your support!";
//       case 5:
//         return "🤩 Thank you! We’re thrilled you loved it!";
//       default:
//         return "⭐ Please rate us!";
//     }
//   };

//   return (
//     <div className="app-container">
//       <header className="header">
//         <img src={logo} alt="Logo" className="logo" />
//         <p>The Taste of Happiness!</p>
//       </header>

//       <section
//         className="background"
//         style={{
//           backgroundImage: `url(${bgImg[currentIndex]})`,
//         }}
//       ></section>

//       <section className="rating-section">
//         <h2>Rate Us</h2>
//         <div className="stars">
//           {[1, 2, 3, 4, 5].map((index) => (
//             <div
//               key={index}
//               className={`star ${
//                 hoverRating >= index || currentRating >= index ? "active" : ""
//               }`}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => handleClick(index)}
//             >
//               ★
//             </div>
//           ))}
//         </div>
//         <textarea className="review-box" placeholder="Give a suggestion..." />
//         <button className="submit-button">Submit</button>

//         {/* Emoji Shower */}
//         <div className="emoji-shower">
//           {emojiShower.map((item) => (
//             <div
//               key={item.id}
//               className="emoji"
//               style={{ left: `${item.left}%` }}
//             >
//               {item.emoji}
//             </div>
//           ))}
//         </div>

//         <div className="emoji-popup">
//           <p className="message">{getMessage(currentRating)}</p>
//         </div>
//       </section>

//       <footer className="footer">
//         <p>© 2025 Baskin Robbins</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
// import { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";
// import logo from "./assets/Main_Logo.webp";
// import bg1 from "./assets/bg1.webp";
// import bg2 from "./assets/bg2.webp";
// import bg3 from "./assets/bg3.webp";
// import bg4 from "./assets/bg4.webp";
// import bg5 from "./assets/bg5.webp";
// import bg6 from "./assets/bg6.webp";
// import bg7 from "./assets/bg7.webp";
// import bg8 from "./assets/bg8.webp";
// import bg9 from "./assets/bg9.webp";
// import bg10 from "./assets/bg10.webp";

// function App() {
//   const [currentRating, setCurrentRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [emojiShower, setEmojiShower] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [reviewText, setReviewText] = useState("");
//   const [reviews, setReviews] = useState([]); // Stores fetched reviews
//   const bgImg = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10];

//   // Fetch reviews from MongoDB when the app loads
//   useEffect(() => {
//     axios.get("http://localhost:5000/api/reviews") // Change to your backend URL
//       .then((response) => setReviews(response.data))
//       .catch((error) => console.error("Error fetching reviews:", error));
//   }, []);

//   // Background Image Rotation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImg.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const handleMouseEnter = (index) => setHoverRating(index);
//   const handleMouseLeave = () => setHoverRating(0);
//   const handleClick = (index) => {
//     setCurrentRating(index);
//     triggerEmojiShower(index);
//   };

//   const triggerEmojiShower = (rating) => {
//     let emoji;
//     switch (rating) {
//       case 1:
//         emoji = "😢";
//         break;
//       case 2:
//         emoji = "😟";
//         break;
//       case 3:
//         emoji = "😐";
//         break;
//       case 4:
//         emoji = "😊";
//         break;
//       case 5:
//         emoji = "🤩";
//         break;
//       default:
//         emoji = "";
//     }

//     const emojis = Array.from({ length: 20 }, () => ({
//       id: Math.random(),
//       emoji,
//       left: Math.random() * 100,
//     }));

//     setEmojiShower(emojis);
//     setTimeout(() => setEmojiShower([]), 2000);
//   };

//   const getMessage = (rating) => {
//     switch (rating) {
//       case 1:
//         return "😞 Sorry, we will try better next time!";
//       case 2:
//         return "😕 Thanks! We appreciate your feedback.";
//       case 3:
//         return "😊 Glad you liked it! We will improve more.";
//       case 4:
//         return "😁 Awesome! Thanks for your support!";
//       case 5:
//         return "🤩 Thank you! We’re thrilled you loved it!";
//       default:
//         return "⭐ Please rate us!";
//     }
//   };

//   // Submit Review to Backend
//   const submitReview = async () => {
//     if (currentRating === 0 || reviewText.trim() === "") {
//       alert("Please select a rating and write a review!");
//       return;
//     }

//     const newReview = {
//       rating: currentRating,
//       reviewText: reviewText.trim(),
//     };

//     try {
//       const response = await axios.post("http://localhost:5000/api/reviews", newReview);
//       setReviews([...reviews, response.data]); // Add new review to UI
//       setCurrentRating(0); // Reset rating
//       setReviewText(""); // Reset text field
//     } catch (error) {
//       console.error("Error submitting review:", error);
//     }
//   };

//   return (
//     <div className="app-container">
//       <header className="header">
//         <img src={logo} alt="Logo" className="logo" />
//         <p>The Taste of Happiness!</p>
//       </header>

//       <section
//         className="background"
//         style={{
//           backgroundImage: `url(${bgImg[currentIndex]})`,
//         }}
//       ></section>

//       <section className="rating-section">
//         <h2>Rate Us</h2>
//         <div className="stars">
//           {[1, 2, 3, 4, 5].map((index) => (
//             <div
//               key={index}
//               className={`star ${
//                 hoverRating >= index || currentRating >= index ? "active" : ""
//               }`}
//               onMouseEnter={() => handleMouseEnter(index)}
//               onMouseLeave={handleMouseLeave}
//               onClick={() => handleClick(index)}
//             >
//               ★
//             </div>
//           ))}
//         </div>
//         <textarea
//           className="review-box"
//           placeholder="Give a suggestion..."
//           value={reviewText}
//           onChange={(e) => setReviewText(e.target.value)}
//         />
//         <button className="submit-button" onClick={submitReview}>
//           Submit
//         </button>

//         {/* Emoji Shower */}
//         <div className="emoji-shower">
//           {emojiShower.map((item) => (
//             <div
//               key={item.id}
//               className="emoji"
//               style={{ left: `${item.left}%` }}
//             >
//               {item.emoji}
//             </div>
//           ))}
//         </div>

//         <div className="emoji-popup">
//           <p className="message">{getMessage(currentRating)}</p>
//         </div>
//       </section>

//       {/* Display Submitted Reviews */}
//       <section className="reviews-section">
//         <h2>Customer Reviews</h2>
//         {reviews.length === 0 ? (
//           <p>No reviews yet.</p>
//         ) : (
//           reviews.map((review, index) => (
//             <div key={index} className="review-item">
//               <h3>{review.rating}⭐</h3>
//               <p>{review.reviewText}</p>
//             </div>
//           ))
//         )}
//       </section>

//       <footer className="footer">
//         <p>© 2025 Baskin Robbins</p>
//       </footer>
//     </div>
//   );
// }

// export default App;
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import logo from "./assets/Main_Logo.webp";
import bg1 from "./assets/bg1.webp";
import bg2 from "./assets/bg2.webp";
import bg3 from "./assets/bg3.webp";
import bg4 from "./assets/bg4.webp";
import bg5 from "./assets/bg5.webp";
import bg6 from "./assets/bg6.webp";
import bg7 from "./assets/bg7.webp";
import bg8 from "./assets/bg8.webp";
import bg9 from "./assets/bg9.webp";
import bg10 from "./assets/bg10.webp";

function App() {
  const [currentRating, setCurrentRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [emojiShower, setEmojiShower] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([]);

  const bgImg = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10];

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/reviews") // Fetch reviews
      .then((response) => setReviews(response.data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bgImg.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  const handleMouseEnter = (index) => setHoverRating(index);
  const handleMouseLeave = () => setHoverRating(0);
  const handleClick = (index) => {
    setCurrentRating(index);
    triggerEmojiShower(index);
  };
  const submitReview = async () => {
    if (currentRating === 0 || reviewText.trim() === "") {
      alert("Please select a rating and write a review!");
      return;
    }

    const newReview = {
      rating: currentRating,
      reviewText: reviewText.trim(),
    };

    try {
      const response = await axios.post("http://localhost:5000/api/reviews", newReview , {
        headers:{"Content-Type": "application/json" }
      });
      setReviews([...reviews, response.data]);
      setCurrentRating(0);
      setReviewText("");
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
    const triggerEmojiShower = (rating) => {
    let emoji;
    switch (rating) {
      case 1:
        emoji = "😢";
        break;
      case 2:
        emoji = "😟";
        break;
      case 3:
        emoji = "😐";
        break;
      case 4:
        emoji = "😊";
        break;
      case 5:
        emoji = "🤩";
        break;
      default:
        emoji = "";
    }
        const emojis = Array.from({ length: 20 }, () => ({
      id: Math.random(),
      emoji,
      left: Math.random() * 100,
    }));

    setEmojiShower(emojis);
    setTimeout(() => setEmojiShower([]), 2000);
  };

  const getMessage = (rating) => {
    switch (rating) {
      case 1:
        return "😞 Sorry, we will try better next time!";
      case 2:
        return "😕 Thanks! We appreciate your feedback.";
      case 3:
        return "😊 Glad you liked it! We will improve more.";
      case 4:
        return "😁 Awesome! Thanks for your support!";
      case 5:
        return "🤩 Thank you! We’re thrilled you loved it!";
      default:
        return "⭐ Please rate us!";
    }
  };
  // Structured Data (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Baskin Robbins",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : "0",
      "reviewCount": reviews.length.toString()
    },
    "review": reviews.map((review) => ({
      "@type": "Review",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating.toString(),
        "bestRating": "5"
      },
      "reviewBody": review.reviewText,
    })),
  };

  return (
    <div className="app-container">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <p>The Taste of Happiness!</p>
      </header>
      <section
       className="background"
        style={{
          backgroundImage: `url(${bgImg[currentIndex]})`,
        }}
      ></section>
      <section className="rating-section">
        <h2>Rate Us</h2>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((index) => (
            <div
              key={index}
              className={`star ${currentRating >= index ? "active" : ""}`}
              onClick={() => setCurrentRating(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              ★
            </div>
          ))}
        </div>
        <textarea
          className="review-box"
          placeholder="Give a suggestion..."
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button className="submit-button" onClick={submitReview}>
          Submit
        </button>
       
         {/* Emoji Shower */}
         <div className="emoji-shower">
          {emojiShower.map((item) => (
            <div
              key={item.id}
              className="emoji"
              style={{ left: `${item.left}%` }}
            >
              {item.emoji}
            </div>
          ))}
        </div>

        <div className="emoji-popup">
          <p className="message">{getMessage(currentRating)}</p>
        </div>
      </section>

      {/* Display Submitted Reviews */}
     

      <footer className="footer">
        <p>© 2025 Baskin Robbins</p>
      </footer>

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </div>
  );
}

export default App;
